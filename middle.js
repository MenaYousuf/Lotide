// const eqArrays = function(arr1, arr2) {
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
//       if (!eqArrays(arr1[i], arr2[i])) {
//         return false;
//       }
//     } else if (arr1[i] === arr2[i]) {
//       return true;
//     }
//   }
//   return true;
// }


// const assertArraysEqual = (arr1, arr2) => {
//   if(eqArrays[arr1]=== eqArrays[2]) {
//     return true;
//   } else {
//     if (!eqArrays[arr1]=== eqArrays[2]){
//       return false;
//     }
//   }
//   };

// const assertEqual = require("./assertEqual")

  const middle = function(arr) {
    let mid = []
  // if array length is =/less than 2 return empty array
    if (arr.length <= 2){
    return [];
    }
// if array length is even no, from mid take 1 on each side
   else if (arr.length % 2 === 0) {
     console.log(mid)
     const start =(arr.length/2) -1;
     const end = (arr.length/2) +1;

  return arr.slice(start, end);
  }
   // if array length is odd no, from mid take the mid no
  else{ 
    if (arr.length % 1 === 0) {
      const start = Math.floor(arr.length/2)
      const end = start + 1
  return arr.slice(start, end);

  }
    }  return mid;
  }
  const midFunction = middle([1, 2, 3, 6]) // length = 4 (2,3) (1,3) 
  console.log(midFunction);


  // const midFunction = middle([1, 2, 3, 6, 2, 5]) // length = 6 (3,6)(2,4)
  // const midFunction = middle([1, 2, 3, 6, 2, 5, 4, 5]) //length = 8 (6,2)(3,5)


//   let arr2 = []
// console.log(arr2)  ans: []
// console.log(arr2-1); ans: -1
// console.log(arr2+1); ans:  1



