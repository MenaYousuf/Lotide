const assertEqual = require("./assertEqual")

const head = function(val){
  let head = val[0]
  return head;
}
assertEqual(head([5,6,7]), 5);


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅  Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
//   }

// assertEqual("Hello", "Hello");
// assertEqual("Mena", "Muna");
// assertEqual(1, 1);
// assertEqual(12, 21);

// 