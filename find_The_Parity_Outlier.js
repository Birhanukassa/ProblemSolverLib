//!Find The Parity Outlier
/*
You are given an array (which will have a length of at least 3,
but could be very large) containing integers. The array is either
entirely comprised of odd integers or entirely comprised of even
integers except for a single integer N.
- Write a method that takes
  the array as an argument and returns this "outlier" N.*/

let arr = [2, 4, 0, 100, 4, 11, 2602, 36];
// Should return: 11 (the only odd number)
let arr2 = [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// - distinguish the majority of collection of elements are 'Even' or "Odd"
// - Find that particular "outlier" number.

function findOutlier(array) {
  let oddResult = array.filter(ele => ele % 2 === 0);
  let evenResult = array.filter(ele => ele % 2 !== 0);
  return oddResult.length === 1 ? oddResult[0] :  evenResult[0];
}

console.log(findOutlier(arr));
console.log(findOutlier(arr2));
