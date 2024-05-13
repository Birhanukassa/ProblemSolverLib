/* eslint-disable no-loop-func */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-depth */
/* eslint-disable max-len */
/*

Where my anagrams at? 5 kyu

What is an anagram? Well, two words are anagrams of each other
if they both contain the same chars. For example:

Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words. You should
return an array of all the anagrams or an empty array if there are none.
For example:

PEDAC
problem
  input: string and array of strings
  output: array
  # Given the word/string and array
    - find all anagram of a word from the array
    - return empty array if there are none
  Rules
  explicit - only return if all characters match to the given word
           - return empty array if there are none
  implicit - all characters much match
           - case sensitive
Examples/ Test cases
   - 'abba' & 'baab' == true
   - 'abba' & 'bbaa' == true
   - 'abba' & 'abbba' == false
   - 'abba' & 'abca' == false
     anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
     anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
     anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Data-structures
Algorithm
    1. declare a var and assign it to empty array
    2. loop the given array
      a. loop the word on the current element
      b. check if all char can found in the comparing given word
      c. if all words match push the current ele to 1
      d. if they don't completely match all, continue
    3.
*/

function anagrams(word, array) {
  let result = [];

  for (let el = 0; el <= array.length - 1; el++) {
    let currWord = array[el].split('');
    let newWord = [];
    if (currWord.length === word.length) {
      let count = 0;

      while (count <= word.length - 1) {
        let wordChar = word[count];

        currWord.forEach(char =>  {
          if (wordChar === char) newWord.push(currWord);

          if (newWord === word || currWord === word) {
            result.push((currWord));
          }
        });
        count++;
      }
    }
  }
  return console.log(result);
}

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // => ['carer', 'racer']

