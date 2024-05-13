/**
 The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon

Given the string, find the longest vowel substring and return the length of it.


rules
  - input: string 
  - output: number 
  - all inputs are lowercase 

ds: array, string 


Given the string 

declare a variable vowel and initialize it to empty string 
declare a variable called vowels and initialize it with empty array
  - iterate the string 
    - access the current string 
    - check if its a vowel 
      - if its a vowel 
        - concat it with vowel declared on line 25
      - if its not push the current vowel to vowels array 
      reset vowel to empty string 
  - check if any of the vowels inside vowels array is longer and
    return the length value 
       
SET vowel = ''
SET vowels = []
SET index 0

WHILE string length > index
  SET currentChar = string[index]
  IF 
    currentChar is 'vowel'
      vowel = vowel + currentChar 
  ELSE 
    push vowel to vowels 
    vowel = ''
SET max    
   

  WHILE vowels.length > index
     max = Math.max(max, vowels[index])

return max 


*/

// function solve(str) {
//   let max = 0;
//   let curr = 0

//   str.split('').forEach(char => {
//     if ('aeiou'.includes(char)) {
//       curr++;
//       if (curr > max) {
//         max = curr;
//       }
//     } else {
//      curr = 0;
//     }
//   })

//   return max;
// }

function solve(str) {
    return  str.split(/[^aeiou]/).reduce((curr, pre) => Math.max(curr, pre.length),0)
  }

console.log();
console.log(solve("codewarriors")) // 2;
console.log(solve("suoidea")) // 3;
console.log(solve("ultrarevolutionariees")) // 3;
console.log(solve("strengthlessnesses")) // 1;
console.log(solve("cuboideonavicuare")) // 2;
console.log(solve("chrononhotonthuooaos")) // 5;
console.log(solve("iiihoovaeaaaoougjyaw")) // 8;







function solve(str) {
    return [...str].map((_, idx1) => [...str].map((_,idx2) =>  str.slice(idx1, idx2 + 1)).filter(num => num !== '').map(Number).filter(n => n % 2 === 1)).reduce((acc, arr) => acc.concat(arr), []).length; 
}

function solve(s){
    return [...s].reduce(
      (total, number, idx) => total + (+number % 2 ? idx + 1: 0)
      , 0);
  };