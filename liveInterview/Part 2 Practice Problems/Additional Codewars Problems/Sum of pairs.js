/*

Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.





rules
  - explicit:
    - input: array, number 
    - output: array, undefined 
    - return the smallest indexed numbers that sum up to the second 
      argument 
    - if there is no value that can add to the second argument 
      return `undefined` 

ds: array, number 


# Given the array and number 

declare a variable called result and initialize it with empty array 
declare a variable called count and initialize it with 0
declare a variable called sum and initialize it with 0

loop the array
  - access the current indexed number 
  
    - loop the array starting from the the above loop current index 
  
       - add the outer current value with the inner loop current 
         value and increment the value with sum 
      
      - increment count 
        
         - if the sum is equal to the second argument 
            - slice the array from the outer loop current index to 
              the inner loop current index + 1
            - push the sub array to result array 
return the inner array that has the smallest length inside the result array 


START
  # Given the array and the number 

  SET result = []
  SET sum = 0
  SET outerIdx = 0;
  SET innerIdx = outerIdx + 1

  WHILE array.length > outerIdx
    SET currentOuter = array[outerIdx]

      WHILE array.length > innerIdx 
        SET currentInner = array[innerIdx]

        sum = sum + (currentOuter + currentInner )

        IF sum === second arg 
          SET subArr = array from outerIdx to innerIdx 
          push subArr to result 
          innerIdx = innerIdx + 1
          sum = 0

        break
    outerIdx = outerIdx + 1

END


*/

// function sumPairs(arr, target) {
//   let result = [], sum = 0, length = Infinity;


//   for (let outerIdx = 0; arr.length > outerIdx; outerIdx++) {
//     let currentOuterNum = arr[outerIdx];
//     let innerIdx = outerIdx + 1;
  
//     while (arr.length > innerIdx) {
//       let currentInnerNum = arr[innerIdx];

//       sum = currentOuterNum + currentInnerNum;
     
//       if (sum === target) {
//         let subArr = [arr[outerIdx], arr[innerIdx]];
     
//         if (innerIdx - outerIdx < length) {
//           length = innerIdx - outerIdx;
//           result = subArr;
//         }

//         break;
//       }
//       innerIdx++;
//     }
//   }

//   if (result.length === 0) return undefined;
//   return result;
// }

var sumPairs = function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
   
    if (seen[s - ints[i]]) { 
      console.log(seen);
      return [s - ints[i], ints[i]];  
    }
    seen[ints[i]] = true
  }
}

//console.log(sumPairs([1, 2, 3, 4, 1, 0] , 2));
console.log([1, 4, 8, 7, 3, 15]);
 console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); //  [0, -6]
// console.log(sumPairs([20, -13, 40], -7)); //  undefined
// console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); //  [1, 1]
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); //  [3, 7]
// console.log(sumPairs([4, -2, 3, 3, 4], 8)); //  [4, 4]
// console.log(sumPairs([0, 2, 0], 0)); //  [0, 0]
// console.log(sumPairs([5, 9, 13, -3], 10)); //  [13, -3]
