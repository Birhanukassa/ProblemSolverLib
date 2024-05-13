/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


rules
explicit: 
  - input: sting 
  - output: boolean 
  - find out if the string is pangram 
  - pangram is the string that has all letters
  - cases are insensitive 

ds: array, string 

Given the string
  - declare variable called letters and initialize it with a-z 
  
  - loop the letters  
    - check if the current alphabet is inside the string 
    - if it does't, return false 
  return true 

*/

function isPangram(str) {
  let lower = str.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(char => 
    lower.includes(char));
}








var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)); // true

var string = "This is not a pangram."
console.log(isPangram(string)); // false