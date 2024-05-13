/*

# Move Capital Letters to the Front // Edabit

Create a function that moves all capital letters to the front of a word.




### Notes
Keep the original relative order of the upper and lower case letters the same.



*/


// function capToFront(str) {
//   return [...str].filter(char => char === char.toUpperCase()).join('') + [...str].filter(char => char === char.toLowerCase()).join('');
// }



// // Examples
// console.log(capToFront("hApPy")) // ➞ "APhpy"
// console.log(capToFront("moveMENT")) // ➞ "MENTmove"
// console.log(capToFront("shOrtCAKE")) // ➞ "OCAKEshrt"

/*

declare a variable called common and initialize it with empty array 
loop the first array 
access the current element 
  check if its available to the second array
   if it does, push it to common array 
return common array 
*/


function commonElements(arr1, arr2) {
  return arr2.filter(num => arr2.includes(num));
}



console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])) 
//  ➞ [3]
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])) 
//  ➞ [1, 3, 4, 7]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])) 
//  ➞ [1, 2, 4, 5]
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])) 
//  ➞ []

console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));