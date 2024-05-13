/*

# Delete Occurrences of Extra Elements in an Array // Edabit


Create a function that takes two arguments: an array `arr` and a number `currNum`. If an element occurs in `arr` more than `currNum` times, remove the extra occurrence(s) and return the result.




### Notes

Do not alter the order of the original array.

## ProTip

Ctrl + Enter to check code.

Rules
  - explicit
    - input: array and number 
    - output: removed array 
    - Given the array and the number, remove the amount of 
      the given number duplicates and return the removed in the array
         
  - ds: object, string, number 

  Given the array and the number 
  - declare a variable called frequency and initialize it with empty object
  - construct a data structure using the frequency objet that 
    keep the characters and their frequency 
  - check if the character is appear more than the second number argument 
    - if it so, find where in the array is located and remove the element 
    - return the array 


    !!
   1  - sort the array 
      - start loop the array 
   2  - count the current element. 
   3    - when the count is greater than the second argument, 
   4      remove the current element 
   5    - repeat 2 - 4
   6 return the array 
  
  
START

# Given the array and the number 
- sort the array 
- SET index = 0
- SET count = 0
- SET element = array[index]
- SET copyArray = [...array]

WHILE index < array.length
  - SET currentElement = array[index]
  - IF currentElement === element
    - count++
    
  - IF currentElement === element && count > number 
     copyArray.splice(1, index)
     count--
  
   if element !== currentElement
     - element = currentElement
     - count = 0 
  

  - index++

END



*/

// function deleteOccurrences (arr, currNum) {
//   let copySortedArr = typeof arr[0] === 'number' ?  
//   arr.slice().sort((a, b) => a - b):
//   arr.slice().sort();
//   let count = 0;
//   let targetElement = copySortedArr[0];

//   for ( let idx = 0; idx < copySortedArr.length; idx++) { 
  
//     let currNum = copySortedArr[idx];
   
//     if (currNum === targetElement) count++;
//     if (currNum === targetElement && count > currNum) {
//       let removeIdx = arr.lastIndexOf(currNum);
     
//       arr.splice(removeIdx, 1);
//       count--;
//     }
    
//     if (targetElement !== currNum) {
//       targetElement = currNum;
//       count = 1;
//     } 
//   }
//   return arr;
// }


function deleteOccurrences(arr, num) {
	let newArr = []

	let counts = {};

	for (let i = 0; i < arr.length; i++) {
  	let currNum = arr[i];
  
    counts[currNum] = counts[currNum] ? counts[currNum] + 1 : 1;
    if (counts[currNum] <= num) newArr.push(arr[i])
	
	}
  
  console.log(counts);
	return newArr
}

// Examples
 console.log(deleteOccurrences([1, 1, 1, 1], 2)); // ➞ [1, 1]
 console.log(deleteOccurrences([13, true, 13, null], 1)); // [13, true, null]

// console.log(deleteOccurrences([true, true, true], 3)); // ➞ [true, true, true]


// console.log(deleteOccurrences([13, true, 13, null], 1)); //, [13, true, null]
// console.log(deleteOccurrences([], 100));  //, []
// console.log(deleteOccurrences(["John", "John", "Marry", "Marry"], 1));
//  // ["John", "Marry"]

// console.log(
//   deleteOccurrences(
//   ["Marry", "John", null, "John", false, "John", 0, "John", "Marry", "Marry", "John"]
//   , 3)); 

// // ["Marry", "John", null, "John", false, "John", 0, "Marry", "Marry"]

// console.log(deleteOccurrences([20, 37, 20, 21], 1)); //, [20, 37, 21]

// console.log(deleteOccurrences([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); 
// //, [1, 1, 3, 3, 7, 2, 2, 2]
// console.log(
//   deleteOccurrences([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],3)
//   ); 
// //, [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
