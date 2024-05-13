// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
/*


req 
Explicit:
  - input: array of numbers 
  - output: array
  - count how many smaller numbers in the array to each element 
    and save the value to the current element index 
    - if any duplicate smaller numbers when count only count of them.
implicit:
  - If there are no smaller number, set 0 to that element index 
  - 

Given the array
declare count and initialize it to 0
declare result array and initialize it to empty array

outer iterate the array and save the current element 
  - inner iterate the array and compare the current outer element to each inner element 
   
  - if the current outer element is greater than the inner iterated element, 
      and, if the smaller element is the only element 
      - increment count
     
  - when the inner iterate finish, push the the count value to the result array at index outer iterate current element 
    if there are no smaller numbers, push 0 to the result array at index current number 
return the result array 


START 

Given the array 

SET count = 0
SET result = []
SET  index = 0

WHILE array length > index 
  SET innerIdx = 0
  SET outerLoopCurrNum = array[index]
  
  SET uniqueNumsArr = uniqueNums(array);

  WHILE uniqueNumsArr length > innerIdx
    SET uniqueCurrNum = array[innerIdx]
  
    IF outerLoopCurrNum > uniqueCurrNum 
      count = count + 1
  
      innerIdx = innerIdx + 1
  
  IF there are no smaller number in the array 
    push 0 to result at current index 
  
  index = index + 1
  push counter to result array 
  count = 0;

return result 

END 

*/

function smallerNumbersThanCurrent(arr) {
  let count = 0;
  let result = [];
  let arrIndex = 0;
  
  while (arr.length > arrIndex) {
    let uniqueNumsArr = uniqueNums(arr);
    let uniqueArrIdx = 0;
    let arrCurrNum = arr[arrIndex];

    while (uniqueNumsArr.length > uniqueArrIdx) {
   
      let uniqueCurrNum = uniqueNumsArr[uniqueArrIdx];
    
      if (arrCurrNum > uniqueCurrNum) count++;
      
      uniqueArrIdx++;
    }
    
    result.push(count)
    arrIndex++;
    count = 0;
  }

  return result;
}

function uniqueNums(arr) {
  return arr.filter((num, i, arr2) => arr2.indexOf(num) === i)
}

/*

map1 the given array 
   map2 for each element of the array 
     filter to unique nums3 
       map the array4 
         map the unique array5 to each element
           count how many smaller elements inside the unique element 
         return the incremented value to current index of array4
*/



// Examples:
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); 
// [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([1, 4, 6, 8, 13, 2, 4, 5, 4])); 
  // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); 
// [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); 
// [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); 
// [0]