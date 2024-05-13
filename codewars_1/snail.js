/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
4 kyu
Snail

Snail Sort
Given an n x n array, return the array elements arranged from outermost
elements to the middle element, traveling clockwise.


NOTE: The idea is not sort the elements from the lowest value to the highest;
the idea is to traverse the 2-d array in a clockwise snailshell pattern.
*/

const snail = function(array) {
  let result = [];

  while (array.length > 0) {
    result.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    result.push(...(array.pop() || []).reverse());
  }
  return result;
};


let array1 = [
  [1,2,3],

  [4,5,6],

  [7,8,9]
];

console.log(snail(array1)); // => [1,2,3, 6,9,8, 7,4,5]
// For better understanding, please follow the numbers of the next
// array consecutively:

let array2 = [
  [1,2,3],
  [8,9,4],
  [7,6,5]];
console.log(snail(array2)); // => [1,2,3,4,5,6,7,8,9]

