var fahrenheitToCelsiusMain = function (fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  // var myOutputValue = "hello world";

  var celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
};

// added from https://codingbasics.rocketacademy.co/modules/2-structuring-and-debugging-code/2.3-functions/2.3.1-functions
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};
// var main = function (input) {
//   var myOutputValue = convertKmToMiles(input);
//   return myOutputValue;
// };

// added from https://codingbasics.rocketacademy.co/modules/2-structuring-and-debugging-code/2.3-functions/2.3.1-functions
var calculateTotalFuelCost = function (tripLengthInMiles) {
  // Some code that calculates total fuel cost
  // 9 miles per litre of fuel
  // $2.20 per litre
  var litresNeeded = tripLengthInMiles / 9;
  var fuelCost = litresNeeded * 2.2;
  return fuelCost;
};

// =======================
// additional item to beautify floats
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
function precise(x, y) {
  return x.toPrecision(y);
}

// Base exercise
var roadTripCostBaseMain = function (distanceInKm) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  // var myOutputValue = "hello world";
  var inputInMiles = precise(convertKmToMiles(distanceInKm), 3);
  var fuelCost = precise(calculateTotalFuelCost(inputInMiles), 2);
  var myOutputValue = `For ${distanceInKm} km (or ${inputInMiles} miles), the total fuel cost is $${fuelCost}`;
  return myOutputValue;
};
// without precise
// For 3 km (or 1.8599999999999999 miles), the total fuel cost is $0.4546666666666667
// with precise
// For 3 km (or 1.86 miles), the total fuel cost is $0.45
// =======================

// =======================
// Comfortable exercises
// reference solutions if needed - github.com/rocketacademy/basics-starter-code-2.0/blob/day1/day01-data-manipulation-and-functions/in-class/script.js
var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
// =======================

// =======================
// More comfortable exercises
var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
// =======================
