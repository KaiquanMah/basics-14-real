// initialise variables
let boolUserEnteredName = 0;
let userName = "";
let iCountUserWins = 0;
let iCountComputerWins = 0;
let iCountDraws = 0;
let iCountTotalRounds = 0;

var randomIntegerGenerator = function (maxNum) {
  let nRandomNum = Math.random() * maxNum;
  let iRandomInt = Math.floor(nRandomNum);
  iRandomInt += 1;
  return iRandomInt;
};

// Helper function to retrieve computer random choice from computer's random integer
var retrieveComputerRandomChoice = function (iRandomInt) {
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

  return sComputerRandomChoice;
};

// Helper function to compute userWin (0 means loss, 0.5 means draw, 1 means won)
var computeUserWin = function (userInput, sComputerRandomChoice, userWin) {
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

  return userWin;
};

// Refactored main fn
var main = function (userInput) {
  // welcome a user
  if (boolUserEnteredName === 0 && userInput != "") {
    userName = userInput;
    boolUserEnteredName = 1;
    return `Welcome ${userInput}! 
    <br><br>
    Now enter "scissors", "paper" or "stone" in the "Input" box and click
    "Submit" to play the game!`;
  }
  // play the game
  else if (boolUserEnteredName === 1) {
    // validate user input
    let userWrongInput = 0;
    if (
      userInput != "scissors" &&
      userInput != "paper" &&
      userInput != "stone"
    ) {
      // return 'Please enter a correct input - "scissors" "paper" or "stone" to play scissors, paper, stone';
      userWrongInput = 1;
    }

    // Generate random int between 1 to 3 (inclusive)
    const maxNum = 3;
    let iRandomInt = randomIntegerGenerator(maxNum);

    // Retrieve program's random choice of 'scissors/paper/stone'
    let sComputerRandomChoice = "";
    sComputerRandomChoice = retrieveComputerRandomChoice(iRandomInt);

    // compare user input with computer's random choice
    // scissors beats paper
    let userWin = 0;
    // console.log("userInput", userInput);
    // console.log("sComputerRandomChoice", sComputerRandomChoice);
    // console.log("userWin", userWin);
    userWin = computeUserWin(userInput, sComputerRandomChoice, userWin);

    if (userWrongInput != 1) {
      iCountUserWins += Math.floor(userWin);
      if (userWin === 1) {
        iCountComputerWins += 1;
      } else if (userWin === 0.5) {
        iCountDraws += 1;
      }
      iCountTotalRounds += 1;
    }

    // output message for different winning scenarios
    if (userWrongInput === 1) {
      return `${userName}, please enter a correct input - "scissors" "paper" or "stone" to play scissors, paper, stone`;
    } else if (userWin === 1) {
      return `The computer chose ${sComputerRandomChoice}.
      You chose ${userInput}.
      You won! 
      <br><br>
      So far ${userName}, you've been winning ${iCountUserWins}/${iCountTotalRounds} rounds, with ${iCountDraws} draws.
      <br><br>
      Now you can type "scissors" "paper" or "stone" to play another round.`;
    } else if (userWin === 0.5) {
      return `The computer chose ${sComputerRandomChoice}.
      You chose ${userInput}.
      It was a draw! 
      <br><br>
      So far ${userName}, you've been winning ${iCountUserWins}/${iCountTotalRounds} rounds, with ${iCountDraws} draws.
      <br><br>
      Now you can type "scissors" "paper" or "stone" to play another round.`;
    } else if (userWin === 0 && userInput != "") {
      return `The computer chose ${sComputerRandomChoice}.
      You chose ${userInput}.
      You lost! 
      <br><br>
      Try harder next round. So far ${userName}, you've been winning ${iCountUserWins}/${iCountTotalRounds} rounds, with ${iCountDraws} draws.
      <br><br>
      Now you can type "scissors" "paper" or "stone" to play another round.`;
    } else {
      return "EXIT_ERROR";
    }
  }
};
