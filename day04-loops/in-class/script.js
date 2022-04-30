var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  let counter = 0;
  let myOutputValue = "";
  while (counter < input) {
    myOutputValue += "👍";
    counter += 1;
  }
  // var myOutputValue = "hello world";
  // return "👍" * input;
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  let rowCounter = 0;
  let myOutputValue = "";
  while (rowCounter < input) {
    let colCounter = 0;
    while (colCounter < input) {
      myOutputValue += "👍";
      colCounter += 1;
    }

    myOutputValue += "<br>";
    rowCounter += 1;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// const aModes = ["numDiceToRoll", "guessNumAllDice"];
const mode1 = "numDiceToRoll";
const mode2 = "guessNumAllDice";
let currentMode = mode1;

let numDice = 0;
let diceNumToCompare = 0;
var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};
let numsRolled = [];

// function isNumRolled(computerDiceNum) {
//   return diceNumToCompare === computerDiceNum
// }
let countDiceNumMatch = 0;

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  // Get Numer of dice to roll
  if (currentMode === mode1) {
    numDice = Number(input);
    currentMode = mode2;
    return `You wish to roll ${numDice} dice`;
  }

  if (currentMode === mode2) {
    // Get dice # to compare against
    diceNumToCompare = Number(input);

    // Roll the dice
    let countRollDiceIteration = 0;
    while (countRollDiceIteration < numDice) {
      let numRolled = rollDice();
      numsRolled.push(numRolled);
      countRollDiceIteration += 1;
    }

    // Check whether user input # is found in the array of rolled numbers
    let countCheckDiceNumIteration = 0;
    while (countCheckDiceNumIteration < numDice) {
      if (numsRolled[countCheckDiceNumIteration] === diceNumToCompare) {
        if (countDiceNumMatch === 0) {
          countDiceNumMatch = 1;
        }
      }
      countCheckDiceNumIteration += 1;
    }

    // reset game mode back to mode 1 -> replay the game
    currentMode = mode1;

    // then return output to user
    if (countDiceNumMatch === 1) {
      return `You won! From ${numDice} Dice Rolls, you guessed ${diceNumToCompare} to compare against all dice. The computer rolled ${numsRolled}`;
    } else {
      return `You lost. From ${numDice} Dice Rolls, you guessed ${diceNumToCompare} to compare against all dice. The computer rolled ${numsRolled}`;
    }
  }
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
