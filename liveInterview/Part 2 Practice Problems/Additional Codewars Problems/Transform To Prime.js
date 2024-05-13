/*

Task :
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)


Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)


Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)


Explanation:
Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .


Rules
  - Explicit
    - input: array 
    - output: number 
    - find the minimum number to be inserted to make up the sum of all array
      numbers become the next closest prime number 
    - all elements are greater than 0 
  - implicit 
    - 

ds: array, number 


# Given the array

loop the array 
  add all elements
  check how many number left for the next prime number to the sum 
return the inserted number 


START 


# Given the array

SET sum = 0
SET prime = 0
sum = sumAll(array)
SET prime = sum;
SET smallestNum = 0;

WHILE (!isPrime(prime)) {
  prime += 1;
  smallestNum = sum - prime
}

return smallestNum;
  

  
*/


function minimumNumber(arr) {
  let smallestNum = 0;
  let sum = addAll(arr);
  let prime = sum;

  while(!isPrime(prime)) {
    prime++;
    smallestNum = prime - sum;
  }
  return smallestNum;
}


const addAll = arr => arr.reduce((acc, curr) => acc + curr);

const isPrime = num => {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}



console.log(minimumNumber([3,1,2]))     // 1
console.log(minimumNumber([5,2]))     // 0
console.log(minimumNumber([1,1,1]))     // 0
console.log(minimumNumber([2,12,8,4,6]))     // 5
console.log(minimumNumber([50,39,49,6,17,28]))     // 2


