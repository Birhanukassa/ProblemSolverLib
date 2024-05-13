/*5 kyu
Maximum subarray sum

The maximum sum subarray problem consists in finding the maximum sum of
a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers
and the maximum sum
is the sum of the whole array. If the list is made up of only negative numbers,
return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or
array is also a valid sub list/subarray.

FUNDAMENTALS
ALGORITHMS
LOGIC
LISTS
DATA STRUCTURES
DYNAMIC PROGRAMMING

//TODO #PEDAC
***Algorithm***

1. find all the sub arrays on the given array
   a. declare empty array
   b. creat a loop against the given array
   c. declare a variable and save the first sub Argument index
   d. creat another loop
   e. declare a variable & save the last sub Argument
   f. make a sub array starting from the current index value to the end of array
   g. push the sub array to empty array
2. loop thru the sub arrays
3. find the sum of all values in all each sub array
4. compare all sub array sum value and return the maximum value
*/

function compareArrayValue(array) {
  let isGreater = 0;
  for (let el = 0; el < array.length - 1; el++) {
    if (isGreater < array[el]) isGreater = array[el];
  }
  return isGreater;
}

function subArray(array) {
  let result = [];
  for (let idx = 0; idx < array.length - 1; idx++) {
    let subArrIdx = 1;
    while (subArrIdx <= (array.length - 1) - idx) {
      result.push(array.slice(idx, idx + subArrIdx));
      subArrIdx++;
    }
  }
  //console.log(result);
  return result;
}

function maxSequence(array) {
  let result = [];

  let allSubArrays = subArray(array);
  for (let ArrIdx = 0; ArrIdx <= allSubArrays.length - 1; ArrIdx++) {
    let subArray = allSubArrays[ArrIdx];
    let sum = subArray.reduce((a, b) => a + b);
    result.push(sum);
  }
  //console.log(result);
  //let res = compareArrayValue(result);

  return compareArrayValue(result);

}
// let a = subArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// console.log(a);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([]));
// should be 6: [4, -1, 2, 1]