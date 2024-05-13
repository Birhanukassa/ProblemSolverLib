/*

For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter
Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde"
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.





deepEqual(f("ababab"), ["ab", 3])
deepEqual(f("abcde"), ["abcde", 1])

rules
  explicit 
    - input: string 
    - output: number
    - find the minimum substring that the string made from
  

ds: string

Given a string 

declare  variable called count & initialize it with 1
 
  if the current char is equal to the rest of string 
   increment count by 1
   else 
    loop the string
      substring from index 0 to the next index n where n is before the next char that is identical to the char @ index 0
      if found 
        measure the length of that subString string and use it to extract another substring from the current index, 
          if both substrings are equal
          increment count 
          repeatNumber it until the last index

return [substring, count]
  
*/

function f(s) {

  for( let idx = 1; idx < s.length + 1; idx++) { 
      let subString = s.slice(0, idx);
   
      let repeatNumber = s.length / subString.length;
    
      if (subString.repeat(repeatNumber) === s) return [subString, repeatNumber];
  }
}


// function f(s) {

//   for (let idx = 1; idx < s.length + 1; idx += 1) {
//       let subString = s.slice(0, idx);
//       let repeatNumber = s.length / subString.length;
//       if (subString.repeat(repeatNumber) === s) return [subString, repeatNumber];
//     }
// }

console.log(f("ababab")) //, ["ab", 3])
console.log(f("abcde")) //, ["abcde", 1]);
