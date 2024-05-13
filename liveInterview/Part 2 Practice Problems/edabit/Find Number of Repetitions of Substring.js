/*


! Find Number of Repetitions of Substring // Edabit

Create a function that takes a string as an argument and tells the number of repitions of a substring. It is exactly vice versa to repeating a string function (i.e. if a string "k" is given and asked to make a larger string "z" such that "k" is repated "n' times).

In this scenario, we do the opposite. Given the final string, and ask the number of times the substring is repeated.

### Examples

```
number_of_repeats("abcabcabcabc" ) ➞ 4

number_of_repeats("bcbcbc") ➞ 3

number_of_repeats("llbllbllbllbllbllb") ➞ 6

number_of_repeats("kc") ➞ 1
```

### Notes

-   Assume that the substring length is always greater than 1.
-   Assume that the string length is always greater than 1.
-   Assume that the substring is not always the same.

Rules 
  - explicit
    - input: string 
    - output: number 
    - find out how many times substring is repeated to make 
      the over all string and return the number 
  - implicit 
    - the input is a small letter string 

  - DS: array, string 

  # Given the string 
     - declare a variable called seen and initialize it with empty object
     - save char frequency of the string to the seen object 
     - extract and concat the key to one string 
     - get the length of the key string 
     - divided the string length with the key string length 
     - repeat the key string the divided value
     - check if the repeated string is equal to the string argument 
       - if that is the case; return the divided number
    -
  

*/

// function numberOfRepeats(str) {
//   let seen = {};

//   [...str].forEach(char => seen[char] = (seen[char] || 0) + 1)

//   let keyString = Object.keys(seen).join('');
//   let times = str.length / keyString.length;

//   return times;
// }



function numberOfRepeats(arr) {
  // let seen = {};
  // for (let word of arr) {
  //   if (seen[word]) {
  //     seen[word]++;
  //   } else {
  //     seen[word] = 1;
  //   }
  // }
  // return Object.keys(seen).filter(k => seen[k] === 1)
   return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v))
}


// function numberOfRepeats(str) {
//   return str.length / new Set(str).size;
// }

// console.log(numberOfRepeats("abab")) //  1
// console.log(numberOfRepeats("abcabcabc")) //  3
// console.log(numberOfRepeats("abab")) //  2
// console.log(numberOfRepeats("LVLVLVLV")) //  4
// console.log(numberOfRepeats("inkinkinkinkinkink")) //  6
// console.log(numberOfRepeats("abcdabcdabcdabcdabcdabcdabcd")) //  7

let listArray = [
  "Manish", "Chandan", "Piyush", "Manish", "Sunil", "Chandan"
];

console.log(numberOfRepeats(listArray));
// Manish, Chandan, Piyush, Sunil

// [4, 3, 2, 1, 0]  k = 3  => 4 > 3 ? => 
// [4, 4, 2, 1, 0]  
// [0, 1, 2, 3, 4]
