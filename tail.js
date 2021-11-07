//  const assertEqual = require("./assertEqual")

const tail = function(arr) {
  if (arr === [] || arr.length === 1) {
    return undefined;
  } else {
     return arr.splice(1, arr.length)
}
};

console.log(tail([2,54,6,4]));

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅  Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
//   }
// };
