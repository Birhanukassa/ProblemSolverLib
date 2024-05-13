/*

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.



Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).




rules
  - explicit
    - input: array
    - output: number 
    - find the number that appear odd times in the array

ds: array, number 

# Given the array 
- declare a variable called frequency and initialize it with empty object 
- loop the array 
  - save each element frequency to the frequency object 
- filter the object that has odd frequency and return the key 



*/



// function findOdd(arr) {
//   let freq = arr.reduce((obj, curr) => 
//   (obj[curr] ? obj[curr]++: obj[curr] = 1, obj),{})

//   for (let k in freq) {
//     if (freq[k] % 2 === 1) {
//       return Number(k);
//     }
//   }
// }


// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
//const findOdd = (A) => A.sort((a, b) => a - b).reduce((a, b) => b - a)


function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); 
 
// 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); 
//  -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); 
//  5
console.log(findOdd([10])) 
//  10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); 
//  10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); 
//  1

//console.log( [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5].sort())