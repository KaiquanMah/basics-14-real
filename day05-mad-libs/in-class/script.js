let randomAdj = "";
let mode1 = "userInputAdjective";
let mode2 = "chooseRandomAdjectiveAndOutputSentence";
let gameMode = mode1;
let aUserAdjectives = [];

let getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  let randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (input === "create") {
    gameMode = mode2;
  }

  // User input adjectives
  if (gameMode === mode1) {
    aUserAdjectives.push(input);
    return `Your adjectives so far: ${aUserAdjectives}`;
  }

  // Choose Random Adjective And Output Sentence
  if (gameMode === mode2) {
    let nAdjectiveIndex = getRandomIndex(aUserAdjectives.length);
    randomAdj = aUserAdjectives[nAdjectiveIndex];
    let madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " partner.";
    return madLib;
    // "WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his a partner.
  }
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
