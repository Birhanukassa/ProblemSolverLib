/* eslint-disable max-len */
/*
6 kyu
Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet
at least once. For example, the sentence "The quick brown fox jumps over
the lazy dog" is a pangram, because it uses the letters A-Z at least once
(case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is,
False if not. Ignore numbers and punctuation.*/

// function isPangram(string) {
//   return [...string.toLowerCase()].split('').every(function(x) {
//     return string.indexOf(x) !== -1;
//   });
// }
function isPangram(string) {
  let count = 0;
  let memo = {};
  for (let char of string) {
    if (char >= 'a' && char <= 'z' && !memo[char]) {
      memo[char] = char;
      count++;
      if (count === 24) {
        return true;
      }
    }
  }
  return false;
}


// function isPangram(string) {
//   let l = string.length;
//   if (l >= 26) {
//     const hash = {};
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//       const char = string[i].toLowerCase();
//       if (char >= 'a' && char <= 'z' && !hash[char]) {
//         hash[char] = char;
//         if (++count === 26) return true;
//       }
//     }
//   }
//   return false;
// }
console.log(isPangram('The quick brown fox jumps over the lazy dog'));


