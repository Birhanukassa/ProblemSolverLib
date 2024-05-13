/*

Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

Adapted from Project Euler.


rule: 
  - explicit 
    - input: string of digits 
    - output: the greatest number of a product 
    - find the 5 consecutive digits and multiply, 
      compare them and return the greatest number of product 
  - implicit 
    - 5 consecutive numbers of product mean the multiplication of those numbers 

ds: array, string, number 


# Given the string of digits 
  declare a variable called current sum and initialize it 0
  declare a variable called max and initialize it with negative infinity 

  loop the string 
    declare a variable called start at current index 
    declare a variable called end at the current index plus 5 

    for every substring from start to end 
      calculate the product 
      initialize sum with the current calculated produce 

      compare max with current sum 
      if current sum is greater than max 
        reassign sum to max 
  return max 


START 

# Given the string digit 
  
SET currentSum = 0
SET max = -infinity
SET index = 0

WHILE string digit - 5 > index

  SET start = index 
  SET end = currentIdx + 5 

  SET substr = string digit from start to end index 
  SET substrProduct = product(substr)

  IF max < substrProduct 
    max = substrProduct 
  
  index += 1 

PRINT max 
   
 

*/


function greatestProduct(strDigit) {
  let max = -Infinity;
  let index = 0;

  while (strDigit.length - 4 > index) {
    let currentSum = [...strDigit.slice(index, index + 5)]
    .reduce((acc, curr) => acc * curr);

    if (max < currentSum) max = currentSum;
    index += 1
  }
  return max; 
}








console.log(greatestProduct("123834539327238239583"));
// 3240 'The method gave a wrong answer'
console.log(greatestProduct("92494737828244222221111111532909999"));
// 5292 'The method gave a wrong answer'
console.log(greatestProduct("92494737828244222221111111532909999")); 
// 5292
console.log(greatestProduct("92494737828244222221111111532909999")); 
// 5292
console.log(greatestProduct("02494037820244202221011110532909999")); 
//  0