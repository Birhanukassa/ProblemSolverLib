/*

In this kata your mission is to rotate matrix counter - clockwise N-times.

So, you will have 2 inputs:

1)matrix

2)a number, how many times to turn it
And an output is turned matrix.
Example:


Note: all matrices will be square. Also random tests will have big numbers in input (times to turn)

Happy coding!


Rules
   - Explicit
     - input: multidimentional array (2D array)
     - output: one time clockwise rotated multidimentional array
DS: array 

# Given the matrix 
- declare a variable named result and initialize it with empty array
- loop the outer array 
  - declare a variable named subArr and initialize it with empty array
     - retrieve each current idx1 and push it to subArr 
     - push subArr to result 
- return result 


START 

# Given the matrix

SET result = []
SET idx1 = matrix.length - 1

WHILE outer idx1 >= 0
  SET subArr = []
  
  WHILE inner array idx1 >= 0
    push matrix[idx1] to subArr
    idx1-- 
  idx1--
  
  push subArr to result

return result

END

*/

function rotateAgainstClockwise(matrix, times){
  // happy coding ;)
  let result = [];
  let temp = times;

  while(times > 0) {
    if (times === temp) {
      result = mat(matrix);  //  oneTime(matrix);  
    } else {
      result = mat(result);  // oneTime(result); 
    }
   
   times--;
  }
  return result;
} 

function mat(matrix) {
  return matrix.map((_, idx) => matrix.map(row => 
     row[ matrix.length - 1 - idx])
     )
}

// function oneTime(matrix) { 
//   let result = [];
  
//   for (let idx1 = matrix.length - 1; idx1 >= 0; idx1--) {
//     let sub = [];
  
//     for (let idx2 = 0; idx2 <= matrix.length - 1; idx2++) {
//       const element = matrix[idx2][idx1];
//       sub.push(element);
//       break;
//     }

//     result.push(sub);
//   }

//   return result;
// }

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]
   

 //console.log(mat(matrix));
// times_to_turn = 1
//  It should return this:
// [
//  [4, 8, 12, 16],
//  [3, 7, 11, 15],
//  [2, 6, 10, 14],
//  [1, 5, 9, 13]
// ]

// console.log(rotateAgainstClockwise(matrix, 1));
// console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 1));
// //1
// //  [
// //   [2, 4],
// //   [1, 3]
// // ]

// console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 2)) 
// // [ [ 4, 3 ], [ 2, 1 ] ]

// console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 3)) 
// // [[4, 3],[2, 1]]

// console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 3)) 
// // 3  [[3, 1],[4, 2]]

// console.log(rotateAgainstClockwise([[1, 2],[3, 4]],4)) 
// // 4  [[1, 2],[3, 4]]

// //-- 'times' > 4
// console.log(rotateAgainstClockwise([[1, 2],[3, 4]], 5)) 
// //, [[2, 4],[1, 3]]

// -- greater matrix
 
console.log(rotateAgainstClockwise(
    [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16]], 2
  )
)
  
//, 2 [[16, 15, 14, 13], [12, 11, 10, 9], [8, 7, 6, 5], [4, 3, 2, 1]]

