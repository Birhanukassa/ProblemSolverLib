/*

Advanced Array Sort
Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.


Notes
The subarrays should be returned in the order of each element's first appearance in the given array.


rules
  - explicit 
    - input: array 
    - output: 2D array
    - return the array that has subarrays of the frequency of the elements
  - implicit
    - if the element has no any duplicate, return it with in an array 

    # Given the array 
    - declare a variable called frq and initialize it with empty object
    - declare a variable called result and initialize it with empty array
    - loop the object
       - access the current key and the frequency of its value 
       - construct an array the value of the length with key element
       - push the array to result array
*/

// function advancedSort(arr) {
//   let result = [];
//   let frq = arr.reduce((obj, value) => 
//     (obj[' ' + value] ? obj[' ' + value]++: obj[' ' + value] = 1, obj), {});
  
//    Object.keys(frq).forEach(key => {
//     key = key.trim();
//     let length = key;
//     let k = key;
    
//     if (arr.indexOf(Number(key)) !== -1 && 
//       typeof arr[arr.indexOf(Number(key))] !== 'string') {
//       k = arr[arr.indexOf(Number(key))];
//     }
//     result.push(Array(frq[length]).fill(k))
//   })

//   return result; 
// }
//

// =============================================================================
// =============================================================================

// Advanced Array Sort
// Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.

// function advancedSort(arr) {
//  return arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), 
//  new Map());
// }

// function advancedSort(arr) {
// 	return [...new Set(arr)].map(x => arr.filter(y => y == x))
// }

// =============================================================================
// =============================================================================

// Examples
//console.log(advancedSort([2, 1, 2, 1]));
//   console.log(advancedSort([5, 4, 5, 5, 4, 3]))
// // ➞ [[5, 5, 5], [4, 4], [3]]);
// console.log(advancedSort([1,2,1,2]));
// // [[1,1],[2,2]]
// console.log(advancedSort([2,1,2,1]));
// //   [[2,2],[1,1]]
//  console.log(advancedSort([3,2,1,3,2,1])); 
// //   [[3,3],[2,2],[1,1]]
// console.log(advancedSort([5,5,4,3,4,4])); 
// //   [[5,5],[4,4,4],[3]]
// console.log(advancedSort([80,80,4,60,60,3])); 
//  // [[80,80],[4],[60,60],[3]]
// console.log(advancedSort(['c','c','b','c','b',1,1]));
// // [['c','c','c'],['b','b'],[1,1]]
// console.log(advancedSort([1234, 1235, 1234, 1235, 1236, 1235])); 
// // [[1234, 1234],[1235, 1235, 1235],[1236]]
// console.log();
//  console.log(advancedSort(['1234', '1235', '1234', '1235', '1236', '1235'])); 
// // [['1234', '1234'],['1235', '1235', '1235'],['1236']]


// const myMap = new Map();

// const keyString = 'a string';
// const keyObj = {};
// const keyFunc = function() {};

// // setting the values
// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, 'value associated with keyObj');
// myMap.set(keyFunc, 'value associated with keyFunc');

// console.log(myMap.size); // 3

// // getting the values
// console.log(myMap.get(keyString)); // "value associated with 'a string'"
// console.log(myMap.get(keyObj)); // "value associated with keyObj"
// console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

// console.log(myMap.get('a string')); // "value associated with 'a string'", because keyString === 'a string'
// console.log(myMap.get({})); // undefined, because keyObj !== {}
// console.log(myMap.get(function() {})); 
// // undefined, because keyFunc !== function () {}
// console.log(myMap);


// Map(3) {
//   'a string' => "value associated with 'a string'",
//   {} => 'value associated with keyObj',
//   [Function: keyFunc] => 'value associated with keyFunc'
// }

