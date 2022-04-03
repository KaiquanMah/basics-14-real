// WITH ASSUMPTION
var orangeJuiceMain = function (nExpectedGuests) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  // 4 oranges 1 glass of juice
  // 1 guest drinks 2 glasses of juice on avg
  var orangePerGlass = 4;
  var glassPerGuest = 2;
  var totalOranges = orangePerGlass * glassPerGuest * nExpectedGuests;
  return totalOranges;
};
// input 2 => output 16

// WITHOUT ASSUMPTION
var orangeJuiceMain = function (nExpectedGuests, glassPerGuest = 2) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  // 4 oranges 1 glass of juice
  // 1 guest drinks 2 glasses of juice on avg
  var orangePerGlass = 4;
  // var glassPerGuest = 2;
  var totalOranges = orangePerGlass * glassPerGuest * nExpectedGuests;
  return totalOranges;
};

// WITH ASSUMPTION
var paintMain = function (costPerLitrePaint) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var areaPerRoom = 3 * 3;
  var nRooms = 6;
  var areaPerLitre = 300; //square metres per litre
  var nCoatsPaint = 2;
  var totalPaint = (areaPerRoom * nRooms * nCoatsPaint) / areaPerLitre;
  var totalPaintCost = totalPaint * costPerLitrePaint;
  return totalPaintCost;
};

// WITHOUT ASSUMPTION
var paintMain = function (costPerLitrePaint, nRooms, nCoatsPaint) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var areaPerRoom = 3 * 3;
  // var nRooms = 6;
  var areaPerLitre = 300; //square metres per litre
  // var nCoatsPaint = 2;
  var totalPaint = (areaPerRoom * nRooms * nCoatsPaint) / areaPerLitre;
  var totalPaintCost = totalPaint * costPerLitrePaint;
  return totalPaintCost;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function () {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // Math.random() => 0 up to BUT NOT INCLUDING 1; drawn at random
  var randomFloatBeforeSix = Math.random() * 6;
  var randomIntBeforeSix = Math.floor(randomFloatBeforeSix);
  // because a normal dice wont have 0; and would have 6
  // we have to increment the integers by 1
  var randomIntDiceRoll = randomIntBeforeSix + 1;
  return randomIntDiceRoll;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
