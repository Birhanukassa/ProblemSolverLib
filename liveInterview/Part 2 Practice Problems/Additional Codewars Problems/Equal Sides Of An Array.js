/*

You are going to be given an array of integers. 

Your job is 

to take that array and find an index arr.length where the sum of the integers to the left of arr.length is equal to the sum of the integers to the right of arr.length. 

If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index arr.length where the side to the left of arr.length is equal to the side to the right of arr.length. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

*/

/*

rules 
  - explicit
    - input: array
    - output: number 
  - find the index where the left and write side of sum of 
    subarray has equal sum 

ds: array, number 

Given the array 

- calculate sum for the given array
- loop the array 
  - sum each elements until the sum / 2 
  - the last element plus 1 is the middle element


*/

function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((total, curr) => total + curr, 0);
  
  for (let i = 0; i < arr.length; i++) {
  
    right = right - arr[i];

    if (i >= 1) left = left + arr[i - 1];
    
  

    if (right === left) return i;
    

  }
 return -1;
}


console.log(findEvenIndex([1,  2,  3,4,3,2,1])); 
// 3 
console.log(findEvenIndex([1,  100,  50,-51,1,1])); // 102
// 1
console.log(findEvenIndex([1,2,3,4,5,6]));
// -1 
 console.log(findEvenIndex([20,10,30,10,10,15,35]));
// 3

