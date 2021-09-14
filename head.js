const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Hello", "Hello");
assertEqual("Mena", "Muna");
assertEqual(1, 1);
assertEqual(12, 21);


const assertEqual = require('./assertEqual');
const head = function(arr) {
  return arr[0];
}
module.exports = head;
