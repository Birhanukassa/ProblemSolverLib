/*

DESCRIPTION:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Rules
  Explicit
    - input: number
    - output: single number 
    - return the sum of consecutive single number 
  
  DS: string, number 

# Given the number 

1 - separate each character of digit
2 - add them to each other 
  3 - if the added value is more than one digit
  4 - apply 1 and 2 until the result is a single value 
5 - return the single value 


*/


// function digitalRoot(n) {
//   return n < 10 ? n : digitalRoot([...String(n)].reduce((t, c) => +t + +c));
// }

// console.log(digitalRoot(1014352));


/*
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)

*/

console.log(
  'abCD_123'.match(/()/)
);