/*

# Return an Array of Subarrays // Edabit


Write a function that takes three arguments `(x, y, z)` and returns an array containing `x` subarrays (e.g. `[[], [], []]`), each containing `y` number of item `z`.

-   `x` Number of subarrays contained within the main array.
-   `y` Number of items contained within each subarray.
-   `z` Item contained within each subarray.


### Notes

-   The first two arguments will always be integers.
-   The third argument is either a string or an integer.


Rules
  - explicit
    - input: number 
    - output: multidimentional array
    - the first argument is the number of sub arrays 
    - the second argument is the number of items inside the subarray
    - the third argument is the the item of the sub arrays contains 

ds: array 


# Given the the fist argument 
  - declare a variable called result and initialize it with empty array
  - iterate from zero up to the first argument
    - construct an array that has the second argument amount of third argument 
      - push constructed array to result 
  - return result 
     

*/






function matrix(num1, num2, num3) {
  return Array(num1).fill(Array(num2).fill(num3));
}









// Examples
console.log(matrix(3, 2, 3))        // ➞ [[3, 3], [3, 3], [3, 3]]
console.log(matrix(2, 1, "edabit")) // ➞ [["edabit"], ["edabit"]]
console.log(matrix(3, 2, 0))        // ➞ [[0, 0], [0, 0], [0, 0]]