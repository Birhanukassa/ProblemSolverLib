/*

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 'sLStr ', since the letter sLStr  only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


write a function that accept a string as argument 
and return the first letter that appear first. 
the letter is case insensitive. 

rules
- explicit 
  - input: string 
  - output: letter 
  - the fist unique letter that appears in the string 
  - the letter is case- insensitive 
  - if all chars are repeated, return empty string 
- 

ds
 - array, string 

 Given the string 
  - save all characters frequency 
    = construct the object tha record all string characters frequency 
      - check the closest key that is not repeated 
        - if there is return that character 
        - otherwise, check if all chars contain repeated chars, 
          - if all chars   are repeated, return empty string 
        
START 

Given the string 

  SET frequency = {}
  SET frequencyIdx = {};

  change the string to lowercase and split it to chars 
  
  LOOP the splitted string  
    
      SET currChar = original string[currentIdx]
     
      IF ! frequency [charIndex]
        SET currentChar = splitted string[charIndex]
      
        frequency[currentChar] = 
        frequency[currentChar, {currCharFrq: 1}];
      ELSE 
        frequency[currentChar][currChrFrq]++
      


  SET frequencyKeys
  
  LOOP frequencyKeys
      IF the smallest idx has a value of num 1 
        PRINT string[idx]
      ELSE if all keys have a value greater than 1
        PRINT ""
  
END

*/

function firstNonRepeatingLetter(string) {
  var sLStr = string.toLowerCase();

  for (let idx in string) { 
    
    if (sLStr.indexOf(sLStr[idx]) === sLStr.lastIndexOf(sLStr[idx]))
      
      return string[idx];

    }
  return "";
}



console.log(firstNonRepeatingLetter('a'))    //  'a';
console.log(firstNonRepeatingLetter('stress'))    //  'sLStr ';
console.log(firstNonRepeatingLetter('moonmen'))    //  'e';+