// from https://codingbasics.rocketacademy.co/modules/4-scope/4.1-intro-to-scope
// global scope
var globalVariable = 0;

// from https://codingbasics.rocketacademy.co/modules/4-scope/4.1-intro-to-scope
// also global scope
var scopeIntroMain = function (input) {
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// from https://codingbasics.rocketacademy.co/modules/4-scope/4.1-intro-to-scope
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

// from https://codingbasics.rocketacademy.co/modules/4-scope/4.1-intro-to-scope
var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  // default outcome to 'losing'
  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

// initialise variable to store previous dice roll
var prevDiceRoll = 1;
var lastRollMain = function (prevDiceRoll) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  if (prevDiceRoll > 0) {
    return `Previous dice roll number was ${prevDiceRoll}`;
  } else {
    return "This is the 1st roll of the dice. Therefore, there is no previous dice roll number.";
  }
};

var nTotalRolls = 10;
var winLossMain = function (nWin) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  let nWin = nWin;
  // let nLoss = nLoss;
  let proportionWinLoss = nWin / nTotalRolls;
  return `Player has ${proportionWinLoss} percentage of winning across all his/her plays.`;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
