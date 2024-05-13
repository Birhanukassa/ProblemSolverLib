/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

rules 
  - explicit
    - input: number 
    - output: number 
    - find the numbers that are less than the given number 
      and multiplies of 3 or 5
    - if the number is multiply by 3 and 5, only count ones 
    - if the number is negative, return 0
    - return the sum of the multiplies 

10 : 3, 5 
3, 5, 6, 9

ds: array, number 

# Given the number 
  - declare a variable sum and initialize it with 0 
  - check if the number - 1 is divisible by 3 and 5 without a reminder 
      - add the number with sum 
      - else if the number - 1 is divisible by 5 
         - add the number with sum 
      - otherwise, if the number is divisible by 3
         - add the number with sum 
         
  return sum 
 
  

STaRT 

SET sum = 0
SET index = 0

WHILE number > index 
  IF number - 1 % 5 and 3 
    sum += number - 1 
  ELSE IF number - 1 % 5
    sum += number - 1
  ELSE IF number - 1 
  
  index = index + 1
PRINT sum 


*/  

function solution(num) {
  let sum = 0;
  let index = 0;
  let tempNum = num;

  while (tempNum > index) {
    if (index % 5 === 0 || index % 3 === 0) {
      sum += index;
    }
    index++;
  }
  return sum;
}

console.log(solution(10));