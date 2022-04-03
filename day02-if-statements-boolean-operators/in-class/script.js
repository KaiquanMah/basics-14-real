var RollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);

  var DiceRoll = randomInteger + 1;
  return DiceRoll;
};

var lucky11Main = function (Guess) {
  var DiceRollOne = RollDice();

  var DiceRollTwo = RollDice();

  var TotalDiceRoll = DiceRollOne + DiceRollTwo;
  if (DiceRollOne == Guess || DiceRollTwo == Guess || TotalDiceRoll == 11) {
    return `You won! You guessed ${Guess} and the dice numbers were ${DiceRollOne} and ${DiceRollTwo}`;
  } else {
    return `You lost! You guessed ${Guess} and the dice numbers were ${DiceRollOne} and ${DiceRollTwo}`;
  }
};

var hawkerFoodCategorisationMain = function (HawkerDishName) {
  if (HawkerDishName == "Chicken Rice" || HawkerDishName == "Nasi Lemak") {
    return "Rice";
  }
  if (HawkerDishName == "Hokkien Mee" || HawkerDishName == "Laksa") {
    return "Noodle";
  }
  if (HawkerDishName == "Bak Kut Teh" || HawkerDishName == "Roti Prata") {
    return "Other";
  }
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
