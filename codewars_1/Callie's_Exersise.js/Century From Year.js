/**
 * 
 * 
 * 
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20


Rules

# Given a year, return the corresponding century 
 Explicit 
  - input: number of year
  - output: number of century 
    - 0 - 100 is 1st century
    - 101 - 200 is 2nd century 
    - 200 - 301 is 3rd century 

DS: string, number 

# Given the year number 

- change the number to string 
- if the length of the string is less than 4
  - return 1
- otherwise, if the length of the string is 4
  - split the sting to 2 sub strings from 0 - 2, 2 - 3 indexes 
  - if the second substring is '00', return the first char of 
    the first substring 
  - if the second substring, second char is greater than 0, then return the first substring, first char plus 1



 */


// function century(year) {
//   return Math.ceil(year/100)
// }


// console.log((1705 + 99 / 100 | 0)); // --> 18
// console.log(century(1900)); // --> 19
// console.log(century(1601)); // --> 17
// console.log(century(2000)); // --> 20
// console.log(century(519890)); // --> 1



