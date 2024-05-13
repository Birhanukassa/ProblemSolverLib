/*

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 

The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.


rules 
  - explicit
    - input: string 
    - output: number 
    - count the repeated characters 
    - the characters are case-insensitive 
    - the character can be letter or numeric digits 
  - implicit
    - the character can appear more than twice
    - if empty string passed, return 0
  
ds: object, string 


# Given the string 

declare a frequency variable and initialize it with empty object 

loop the string 
  - retrieve each character and count its frq using the frequency object 

retrieve the values of the frq object that has more than 1 value 

return the amount of key that has a value of 2 or more 


START 

# Given the string 

SET frequency = {}
SET index = 0

WHILE string.length > index 
  SET currentChar = string[index]
  frequency[str] = (string[index] || 0) + 1

retrieve frequency values 
  filter and keep the ones who has a value of greater than 1 
  count the total left elements 
return the total left elements 

END


*/ 


function duplicateCount(str) {
  let frequency = {};
  [...str.toLowerCase()].forEach(char => frequency[char] = (frequency[char] || 0) + 1);
  return Object.values(frequency).filter(value => value > 1).length;
}







// console.log(duplicateCount("")) 
// //  0;
// console.log(duplicateCount("abcde")) 
// // 0;
// console.log(duplicateCount("aabbcde")) 
//  2;
console.log(duplicateCount("aabBcde")) 
// //  2"should ignore case");
// console.log(duplicateCount("Indivisibility")) 
// //  1
// console.log(duplicateCount("Indivisibilities")) 
// //  2 "characters may not be adjacent")




// Example
// "abcde"             -> 0 # no characters repeats more than once
// "aabbcde"           -> 2 # 'a' and 'b'
// "aabBcde"           -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility"    -> 1 # 'i' occurs six times
// "Indivisibilities"  -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11"              -> 2 # 'a' and '1'
// "ABBA"              -> 2 # 'A' and 'B' each occur twice
