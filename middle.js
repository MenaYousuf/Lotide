/*const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] === arr2[i]) {
      return true;
    }
  }
  return true;
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


const assertArraysEqual = (arr1, arr2) => {
  if(eqArrays[arr1]=== eqArrays[2]) {
    return true;
  } else {
    if (!eqArrays[arr1]=== eqArrays[2]){
      return false;
    }
  }
  };*/

  const middle = function(arr) {
  
    if (arr.length <= 3) return [];

  if (arr.length % 2 === 0);{
  return arr.slice(mid - 1, mid + 1);
  
  if (arr.length % 1 === 0);{
    return arr.slice((mid, mid + 1));
  }
} return middle;
  
};
