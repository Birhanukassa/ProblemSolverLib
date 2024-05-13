/*

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples

Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks

a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.


rules 
  - implicit 
     - input: 2 arrays
     - output: 2 arrays
     - check if one of the array has the number that is a 
       multiplied by how many times appear on the other array 
  - explicit
     - the first array is where numbers will be counted of there appearance 
     - the second array is where the multiplied numbers are 


ds: array 


# Given 2 arrays
  - check if both passed values are arrays
    - if one or both of them are not arrays 
      - return false 
  - check if both arrays have similar length
      - if both length are not equal 
         - return false
  
  - loop the first array 
     - access the each element and check how many times appear 
     - calculate the multiplicity of the number by how many times 
       it appear 

  - loop the second array 
     - check if the result is in the second array 
     - if one of the result is not available 
       - return false 
  
  - return true 



*/

function comp(arr1, arr2) {
  if (!Array.isArray(arr1) || 
  !Array.isArray(arr2) || 
  arr1.length !== arr2.length) return false; 
  arr1.sort((a, b) => a - b); 
  arr2.sort((a, b) => a - b);

  return arr1.map(num => num * 2).every((num1, i) => num1 === arr2[i])
}


function comp(array1, array2) {
  array1.sort((a, b) => a - b); 
  array2.sort((a, b) => a - b);
 
  return array1.map(v => v * v).join() === array2.join();
}



let a1 = [121, 144, 19, 161, 19, 144, 19, 11, ];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1, a2)) // true

//console.log(comp(null, a2)) // false

// console.log(comp( 
//   [7, 7, 7, 1, 7, 10, 4, 0, 5, 2, 7, 0], 
//   [49, 4, 49, 1, 0, 0, 49, 25, 16, 100, 49, 49]
//   )
// );