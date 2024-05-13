/* eslint-disable max-len */

/*
Clean up the words

Given a string that consists of some words and an assortment of
non-alphabetic characters, write a function that returns that string
with all of the non-alphabetic characters replaced by spaces. If one
or more non-alphabetic characters occur in a row, you should only have
one space in the result (i.e., the result string should never
have consecutive spaces).

  *PEDAC
  Problem: input: string
          output: string
           - the given string has alphabetic and non alphabetic chars
           - return the string without all of non-alphabets chars

  Rules:   - explicit
               - return value should remove all non alphabets and replace with space
               - return value shouldn't contain more than one consecutive space
  Example/ Test Case:
           "---what's my +*& line?"   --->  " what s my line "
  Data-structure:
           - regex
           - string
  Algorithm:
    # Given the string
    1 - find non-alphabetic chars in the string
    2 - replace non-alphabetic chars with a space
    3 - if the string has more than 1 consecutive spaces, remove the space until 1 space left
    4 - return the string

*/ 

function cleanUp(string) {
  let trimmedString = [];

  string.split('').forEach((char) => {
    if (smallLetter(char) || capitalLetter(char)) {
      trimmedString.push(char);
    } else if (trimmedString[trimmedString.length - 1] !== ' ') {
      trimmedString.push(' ');
    }
  });
  return trimmedString.join('');
}

function smallLetter(char) {
  return char >= 'a' && char <= 'z';
}
function capitalLetter(char) {
  return char >= 'A' && char <= 'Z';
}
let st = "---what's my +*& line?";
st.replace(/[^\w]/gi, ' ').replace(/\s+/gi, ' ');
console.log(st.replace(/[^\w]/gi, ' ').replace(/\s+/gi, ' '));
console.log(cleanUp("---what's my +*& line?"));

// Example:
// cleanUp("---what's my +*& line?");    // " what s my line "


