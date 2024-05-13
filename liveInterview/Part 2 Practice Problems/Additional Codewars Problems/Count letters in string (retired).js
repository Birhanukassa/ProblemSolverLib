/*

You've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
*/


/*

rules
  - given the string, count the lowercase letters and save the frequency using object and return the constructed object. 

  - input: string 
  - output: object 

ds: string, object 

Given the sting
  - declare a variable and initialize it with empty object 
  - loop the string and check each char if its small letter. 
    - if its, save the char as a key and its frequency as a value 
  return the object 


 SET frequency = {}

 LOOP string 
    IF the current char is small letter and its not inside the frequency object
      frequency[currentChar] = 1
      ELSE IF current char is a key inside frequency object 
        frequency[currentChar] += 1
*/


function letterCount(str) {
  let frequency = {};

  [...str].forEach(char => !frequency[char] ? frequency[char] = 1: frequency[char] += 1)

  return frequency;
}








//Example:
console.log(letterCount('arithmetics'));
//=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

console.log(letterCount("codewars"));
// {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});
console.log(letterCount("activity")) 
// {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1});
console.log(letterCount("arithmetics")) 
// {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2});
console.log(letterCount("traveller")) 
// {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1});
console.log(letterCount("daydreamer")) 
// {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1});