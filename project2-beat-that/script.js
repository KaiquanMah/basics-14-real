const player1 = "player 1";
const player2 = "player 2";
let player = player1;

let numsPlayer1Rolled = [];
let numsPlayer2Rolled = [];
var RollDice = function () {
  return Math.ceil(Math.random() * 6);
};

// const dice1 = "dice 1";
// const dice2 = "dice 2";
// let dice = dice1;
const mode1 = "roll dice";
const mode2 = "choose dice order";
let gameMode = mode1;

let firstNumIndex = 0;
let secondNumIndex = 1;
let firstNum = 0;
let secondNum = 0;
let player1FullNum = "";
let player2FullNum = "";

var validateInput = function (input) {
  // input = Number(input);
  let boolInputAcceptable = 0;
  if (input == 1 || input == 2) {
    boolInputAcceptable = 1;
  }
  return boolInputAcceptable;
  // if (boolInputAcceptable == 0) {
  //   return "Please enter a number: Either 1 or 2";
  // }
};

var main = function (input) {
  if (player === player1) {
    // Roll 2 Dice
    if (gameMode === mode1) {
      numsPlayer1Rolled.push(RollDice(), RollDice());
      gameMode = mode2;

      return `Welcome Player 1.
      <br>
      You rolled ${numsPlayer1Rolled[0]} for Dice 1 and ${numsPlayer1Rolled[1]} for Dice 2.
      <br>
      Choose the order of the dice.`;
    }
    // User input which dice number goes first
    else if (gameMode === mode2) {
      input = Number(input);
      boolInputAcceptable = validateInput(input);
      if (boolInputAcceptable == 0) {
        return "Please enter a number: Either 1 or 2";
      } else {
        if (firstNumIndex + 1 === input) {
          firstNum = numsPlayer1Rolled[firstNumIndex];
          secondNum = numsPlayer1Rolled[secondNumIndex];
        } else if (secondNumIndex + 1 === input) {
          firstNum = numsPlayer1Rolled[secondNumIndex];
          secondNum = numsPlayer1Rolled[firstNumIndex];
        }
        player1FullNum = String(firstNum).concat(String(secondNum));

        // next is player 2
        player = player2;
        gameMode = mode1;

        return `Player 1, you chose Dice ${input} first.
        <br>
        Your number is ${player1FullNum}.
        <br>
        It is now Player 2's turn.`;
      }
    }
  }

  if (player === player2) {
    // Roll 2 Dice
    if (gameMode === mode1) {
      numsPlayer2Rolled.push(RollDice(), RollDice());
      gameMode = mode2;

      return `Welcome Player 2.
      <br>
      You rolled ${numsPlayer2Rolled[0]} for Dice 1 and ${numsPlayer2Rolled[1]} for Dice 2.
      <br>
      Choose the order of the dice.`;
    }
    // User input which dice number goes first
    else if (gameMode === mode2) {
      input = Number(input);
      boolInputAcceptable = validateInput(input);
      if (boolInputAcceptable == 0) {
        return "Please enter a number: Either 1 or 2";
      } else {
        if (firstNumIndex + 1 === input) {
          firstNum = numsPlayer2Rolled[firstNumIndex];
          secondNum = numsPlayer2Rolled[secondNumIndex];
        } else if (secondNumIndex + 1 === input) {
          firstNum = numsPlayer2Rolled[secondNumIndex];
          secondNum = numsPlayer2Rolled[firstNumIndex];
        }
        player2FullNum = String(firstNum).concat(String(secondNum));

        // compare player 1 and 2 numbers - which is greater
        player1FullNum = Number(player1FullNum);
        player2FullNum = Number(player2FullNum);
        let bPlayer1MoreThanPlayer2 = player1FullNum > player2FullNum;

        // next is player 1
        player = player1;
        gameMode = mode1;

        if (bPlayer1MoreThanPlayer2 == 1) {
          return `Player 2, you chose Dice ${input} first.
          <br>
          Your number is ${player2FullNum}.
          <br>
          Player 1's ${player1FullNum} is greater than player 2's ${player2FullNum}.
          <br>
          Player 1 won!`;
        } else if (bPlayer1MoreThanPlayer2 == 0) {
          return `Player 2, you chose Dice ${input} first.
          <br>
          Your number is ${player2FullNum}.
          <br>
          Player 1's ${player1FullNum} is lower than player 2's ${player2FullNum}.
          <br>
          Player 2 won!`;
        }
      }
    }
  }
};

// Player 1 dice 1 first, player 2 dice 2 first
// Welcome Player 1. You rolled 3 for Dice 1 and 4 for Dice 2. Choose the order of the dice.
// Player 1, you chose Dice 1 first. Your number is 34. It is now Player 2's turn.
// Welcome Player 2. You rolled 2 for Dice 1 and 4 for Dice 2. Choose the order of the dice.
// Player 2, you chose Dice 2 first. Your number is 42. Player 1's 34 is lower than player 2's 42. Player 2 won!

// Added <br>
// Player 1 dice 2 first, player 2 dice 1 first
// Welcome Player 1.
// You rolled 5 for Dice 1 and 3 for Dice 2.
// Choose the order of the dice.
// Player 1, you chose Dice 2 first.
// Your number is 35.
// It is now Player 2's turn.
// Welcome Player 2.
// You rolled 6 for Dice 1 and 3 for Dice 2.
// Choose the order of the dice.
// Player 2, you chose Dice 1 first.
// Your number is 63.
// Player 1's 35 is lower than player 2's 63.
// Player 2 won!
