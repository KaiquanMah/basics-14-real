// Nested Loops to Simulate Dimensions
var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "";

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "x";
      columnCounter = columnCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

// Simple Loop with Variations
// Q1 Create a loop in the simpleLoopMain function. Make the loop run 6 times, adding "hello" to myOutputValue with each loop iteration.
// code found in 'simpleLoopMain'
// Q2 What happens if counter starts as a number other than zero?
// the loop will run more or less than 6 times, depending on how much lower than 0 the counter starts at for the former, and how much higher than 0 the counter starts at for the latter.
// Q3 What happens if, inside the loop, you alter the counter by adding a number other than one?
// the loop executes either more or less iterations in between, if the step-sizes are reduced for the former, and increased for the latter
// Q4 What happens if you change the condition inside the loop from counter < 6 to counter <= 6?
// The loop would evaluate the condition for 1 more 'counter' number before deciding whether to run the code enclosed within the loop
var simpleLoopMain = function (userInputCount) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  let counter = 0;
  let myOutputValue = "";

  while (counter < userInputCount) {
    myOutputValue += "hello";
    counter += 1;
  }

  // var myOutputValue = "hello world";
  return myOutputValue; //3 => hellohellohello
};

// Loop within Loop (Loops)
// Q1 Create nested loops in the loopWithinLoop function, where the outer loop runs 3 times and the inner loop runs 3 times per outer loop. Concatenate "hello" to myOutputValue in the inner loop. How many times do we see "hello"?
//
// Q2 Add "<br />" to myOutputValue in the outer loop so that the program makes a new line for each outer loop.
//
// Q3 What happens if outerCounter starts as a number other than zero?
// increase OR decrease rows, keeping col count same
// Q4 What happens if innerCounter starts as a number other than zero?
// increase OR decrease cols, keeping row count same
// Q5 What happens if, inside the loop, you alter outerCounter by adding a number other than one?
// if the altered counter is < maxCounter => loop will keep running in an infinite loop
// because the altered counter keeps getting reset after the outer while loop finishes executing the code block within it
// otherwise if the altered counter is >= maxCounter => loop will run 1 last time before terminating
// Q6 What happens if, inside the loop, you alter innerCounter by adding a number other than one?
// Refer to my response to Q5
// Q7 What happens if you change the outer loop condition from outerCounter < 3 to outerCounter <= 3?
// run the outer loop 1 extra time
// Q8 What happens if you change the inner loop condition from innerCounter < 3 to innerCounter <= 3?
// run the inner loop 1 extra time during every iteration through the outer loop
// Q9 Update loop conditions to use input to control how many times the loops run.
//
// Q10 Update our code such that the inner loop runs twice the number of times as the outer loop. How many more times do we see "hello"?
//
var loopWithinLoopMain = function (userInputCount) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  //const maxCounter = 3; //used prior to Q9
  const maxCounter = userInputCount; //Q9
  let rowCounter = 0;
  let myOutputValue = "";

  while (rowCounter < maxCounter) {
    let colCounter = 0;
    // before Q10
    // while (colCounter < maxCounter) {
    // Q10
    while (colCounter < maxCounter * 2) {
      myOutputValue += "hello";
      colCounter += 1;
    }
    myOutputValue += "<br />";
    rowCounter += 1;
  }

  return myOutputValue;
  // Q1
  //hellohellohellohellohellohellohellohellohello
  // Q2
  // hellohellohello
  // hellohellohello;
  // hellohellohello;
  // Q9
  // hellohellohellohello
  // hellohellohellohello
  // hellohellohellohello
  // hellohellohellohello
  // Q10
  // hellohellohellohellohellohello
  // hellohellohellohellohellohello
  // hellohellohellohellohellohello
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
