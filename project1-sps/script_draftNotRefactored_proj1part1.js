var randomIntegerGenerator = function (maxNum) {
  let nRandomNum = Math.random() * maxNum;
  let iRandomInt = Math.floor(nRandomNum);
  iRandomInt += 1;
  return iRandomInt;
};

var main = function (userInput) {
  // validate user input
  let userWrongInput = 0;
  if (userInput != "scissors" && userInput != "paper" && userInput != "stone") {
    // return 'Please enter a correct input - "scissors" "paper" or "stone" to play scissors, paper, stone';
    userWrongInput = 1;
  }

  console.log(userInput);
  // Generate random int between 1 to 3 (inclusive)
  const maxNum = 3;
  let iRandomInt = randomIntegerGenerator(maxNum);

  // Retrieve program's random choice of 'scissors/paper/stone'
  let sComputerRandomChoice = "";
  if (iRandomInt === 1) {
    sComputerRandomChoice = "scissors";
  } else if (iRandomInt === 2) {
    sComputerRandomChoice = "paper";
  } else if (iRandomInt === 3) {
    sComputerRandomChoice = "stone";
  } else {
    sComputerRandomChoice = "error";
  }

  // compare user input with computer's random choice
  // scissors beats paper
  let userWin = 0;
  if (userInput === "scissors" && sComputerRandomChoice === "paper") {
    userWin = 1;
  } else if (sComputerRandomChoice === "scissors" && userInput === "paper") {
    userWin = 0;
  }
  // paper beats stone
  else if (userInput === "paper" && sComputerRandomChoice === "stone") {
    userWin = 1;
  } else if (sComputerRandomChoice === "paper" && userInput === "stone") {
    userWin = 0;
  }
  // stone beats scissors
  else if (userInput === "stone" && sComputerRandomChoice === "scissors") {
    userWin = 1;
  } else if (sComputerRandomChoice === "stone" && userInput === "scissors") {
    userWin = 0;
  }
  // If both parties choose the same object, it's a draw (assign arbitrary score of 0.5)
  else if (sComputerRandomChoice === "scissors" && userInput === "scissors") {
    userWin = 0.5;
  } else if (sComputerRandomChoice === "paper" && userInput === "paper") {
    userWin = 0.5;
  } else if (sComputerRandomChoice === "stone" && userInput === "stone") {
    userWin = 0.5;
  }

  // output message for different winning scenarios
  if (userWrongInput === 1) {
    return 'Please enter a correct input - "scissors" "paper" or "stone" to play scissors, paper, stone';
  } else if (userWin === 1) {
    return `The computer chose ${sComputerRandomChoice}.
     You chose ${userInput}.
     <br><br>
     You won!
     <br><br>
     Now you can type "scissors" "paper" or "stone" to play another round.`;
  } else if (userWin === 0.5) {
    return `The computer chose ${sComputerRandomChoice}.
     You chose ${userInput}.
     <br><br>
     It was a draw!
     <br><br>
     Now you can type "scissors" "paper" or "stone" to play another round.`;
  } else if (userWin === 0 && userInput != "") {
    return `The computer chose ${sComputerRandomChoice}.
     You chose ${userInput}.
     <br><br>
     You lost! Try harder next round.
     <br><br>
     Now you can type "scissors" "paper" or "stone" to play another round.`;
  } else {
    return "EXIT_ERROR";
  }
};
