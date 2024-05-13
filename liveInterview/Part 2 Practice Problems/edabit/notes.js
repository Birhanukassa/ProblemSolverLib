
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// ### Examples

// ```
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// ```
// ### Notes
// Return an empty array if the object is empty.
// Watch a quick demo on how Edabit works.

/*

rules
 explicit: 
   - input: array object 
   - output: object
   - construct a multidimentional array object using 
     the passed objet key and value properties as elements of inner arrays

ds: array 

# Given the object 
declare a variable called multidimentional array 
loop the object 
  access the current index and the current value 
  define them inside on array and push it to multidimentional array 
return multidimentional array 

*/

// function toArray(obj) {
//   return Object.keys(obj).reduce((arr, key) => {
//     arr.push([key, obj[key]]);
//     return arr;
//   }, [])
// }

// function toArray(obj) {
//   return Object.entries(obj);
// }

// console.log(toArray({ a: 1, b: 2 }) );
// console.log(toArray({ shrimp: 15, tots: 12 }));


// function countVowels(str) {
//   return str.match(/[aeiou]/gi).length;
// }


// console.log(countVowels("Celebration")) // ➞ 5
// console.log(countVowels("Palm")) // ➞ 1
// console.log(countVowels("Prediction")) // ➞ 4

//===================================

// Find the Missing Number
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.

function missingNum(arr) {
  let result;
 

  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
  return result;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));