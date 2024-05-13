// 884. Uncommon Words from Two Sentences
// Easy



// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]
 

// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.

/*


p
```
given 2 sentences, return the words that are unique.
q / is it going to cases sensitive ?
q / is the sq of the chars matter ?
q / should i expect passed string values are always available ? 


e
``
ex: 'abc def' and 'ghk def' => ['def']

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]


data
```
input: strings 
output: array 

algo
````

declare empty array

construct 2 objects that record the freq of the `words` of the given each string

compare each object keys and values if they are similar. 

when find a unique `word` value push it to the result empty array.

return the result array


*/

// code

var uncommonFromSentences = function(s1, s2) {
    let freq = {};
    
    let result = [];


    for (let word of s1.concat(' ', s2).split(' ')) {
     freq[word] = (freq[word] || 0) + 1;
    }


    for (let word in freq) {
      if ((freq[word] === 1)) {
        result.push(word);
      }
    }
  // alternative using arrays
  //  console.log(s1.concat(' ', s2).split(' ')
  //  .filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e)));
   
   return result;
};

console.log(uncommonFromSentences("apple apple", "banana"))