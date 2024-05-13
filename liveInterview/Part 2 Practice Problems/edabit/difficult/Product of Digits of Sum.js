/*

Product of Digits of newNumber

Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. 

The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.


Notes
The input of the function is at least one number.

Rules
  - Explicit 
    - Input: any number of number arguments
    - Output: a single digit 
    - the output must be a from -9 to 9 single digits 
  
DS: Array, string and number 

# Given any number of number argument 
- put all the passed args to an array 
- newNumber up all args in the array 
- change the newNumber value to a string 

- while the string length is greater than 1
  - check if the string has a length of more than 1 
    1- if so, change the string to a separate number
    2- multiply then to each other 
    3- repeat 1 and 2 until the number is a single number 

- return the single number 


*/

function sumDigProd(...args) {
  let newNumber = [...args].reduce((acc, curr) => acc + curr);
  let stringSum = String(newNumber);
 
  while (stringSum.length > 1) {
    let multiply = [...stringSum].reduce((acc, curr) => 
     acc * Number(curr), 1);
    
     stringSum = String(multiply);
     newNumber = Number(stringSum);
  }
  return newNumber;
}








// Examples
console.log(sumDigProd(16, 28)); // ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

console.log(sumDigProd(0)); // ➞ 0

console.log(sumDigProd(1, 2, 3, 4, 5, 6)); // ➞ 2