

/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the
array has it's corresponding value squared in the second
array. The frequency of values must be the same.

*/



// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm');

/*

input: string 
output: boolean 

check if both strings are anagrams and return a boolean value.

algorithm

create and save chars to an object for both of strings

loop and compare each of keys and values for each object 

if any one of the comparison is false, return false else, return true. 


*/

function validAnagram(str1, str2){
  let o1 = {};
  let o2 = {};
  
  if (str1.length !== str2.length) return false;
  
  for (let char of str1) o1[char] = (o1[char] || 0) + 1;  
  
  for (let char of str2) o2[char] = (o2[char] || 0) + 1;
  

  for (let k in o1) {
    if (!(k in o2)) return false;

    if (o1[k] !== o2[k]) return false;
  }



  return true;

}


console.log(validAnagram('aarnmag', 'aaagram'));

