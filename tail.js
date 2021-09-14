const tail = function(arr) {
  if (arr === [] || arr.length === 1) {
    return undefined;
  } else {
    return arr.splice(1, arr.length);
  }
};

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

