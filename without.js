const eqArrays = require ("./eqArrays")

  const without = function(arr1, arr2) {
    let finalArr= " "
    // loop over the whole arr
    for (let index in Object) {
      //  if arr1 element is not = to first index in arr2
      if (arr1[index] !== arr2[0]) {
        finalArr.push(arr[index]);
      }
    } return finalArr;
  }
  console.log(without(without([1, 2, 3], [1])))


// const eqArrays = function(arr1, arr2) {
//   // if the length is not same return false
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     // if the elements are not same inside the array return false
//     if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//       if (!eqArrays(arr1[i], arr2[i])) {
//         return false;
//       }
//       // if the element in the arr is same then return true
//     } else if (arr1[i] === arr2[i]) {
//       return true;
//     }
//   }
//   return true;
// }
// console.log(eqArrays([1,2,7,4,5,6], [1,2,4,5,6]));



// const assertArraysEqual = (arr1, arr2) => {
//   if(eqArrays[arr1]=== eqArrays[arr2]) {
//     return true;
//   } else {
//     if (!eqArrays[arr1]=== eqArrays[arr2]){
//       return false;
//     }
//   }
//   };console.log(assertArraysEqual([1,2,4,6,4,3], [2,5,3,2,5,4,6,7]))

