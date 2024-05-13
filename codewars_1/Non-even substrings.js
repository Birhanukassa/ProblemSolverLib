/*

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

If you like substring Katas, please try

Longest vowel chain
Alphabet symmetry



rules
  - input: string 
  -output: number
  - all strings are alphanumeric 
  - find all substrings that can form odd number 

ds: string, array

Given the string 

- declare a variable odd and initialize it with empty array
- declare a variable subs and initialize it with empty array 
  - create all possible sub strings 
    - loop the string 
      - for each start loop the string 
         - construct subarray from each outer loop start to inner loop start 
           and push it to subs array 
    
  - check every sub string if its odd number 
     - if it is, push it to odd array 
return the amount of odds inside odds array 


SET odds = []
SET subs = []
SET outerIdx = 0
SET innerIdx = 0


WHILE string.length > outerIdx
  WHILE string.length > innerIdx
     string from string[outerIdx] to string[outerIdx] + 1
     innerIdx = innerIdx + 1 
  outerIdx = outerIdx + 1

  FOR each odd of odds 
   IF odds 
     push odd to odds 
return odds.length


*/


function solve(str) {
  let count = 0;

  for (let start = 0; start < str.length; start++) {
    for (let end = start; end < str.length; end++) {
      let substr = str.slice(start, end + 1);
      substr = substr[substr.length - 1];
    //  console.log(substr);
       if (substr % 2 === 1) count++;
    }
  }
  return count;
}


// console.log(solve("1235")) 
console.log(solve("12357")) // 10
// console.log(solve("13471")) // 12
// console.log(solve("134721")) // 13
// console.log(solve("1347231")) // 20
// console.log(solve("134723157305204t6235325")) // 28


