/*

# Training on Playing with passphrases | Codewars

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

1.  shift each letter by a given number but the transformed letter must be a letter (circular shift),
2.  replace each digit by its complement to 9,
3.  keep such as non alphabetic and non digit characters,
4.  downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
5.  reverse the whole result.


With longer passphrases it's better to have a small and easy program. Would you write it?

[https://en.wikipedia.org/wiki/Passphrase](https://en.wikipedia.org/wiki/Passphrase)


Rules
  - Explicit 
    - input: string and number 
    - output: string 
    - shift each letter to the number of times that is passed 
    - the chars of the letters that are positioned in odd numbers should be 
      down cased 
    - reverse the string 
  
- DS: array 

# Given the string and the number 

- declare a variable called letters and initialize it with a-z.
  - change the string to a chars of array 
  - change all chars to the passed number of shift letters
    - find the current index 
      - add the second number argument to the index and retrieve 
        the letter from letters variable and replace the current char with retrieved letter. 
      
  - for the chars that are at odd index, change the letter to lowercase 
  - when the number found, change each number to its compliment of 9
  - reverse the string 


START 

# Given the string and the number '

SET letters = 'abcdefghijklmnopqrstuvwxyz';

SET strArr = [...str]
SET index = 0

WHILE strArr.length > index
  SET currChar = strArr[index]
  
  SET shiftedCharIdx = index + n 
  strArr[index] = letters[shiftedCharIdx]

  IF index % 1 === 0 && currChar.test(/[a-z-A-Z]/)
    strArr[index] = currChar.toLowerCase()

  IF currChar.test(/[0-9]/)
    currentNum = 9 - currentNum 
    strArr[index] = currentNum 
    
    index++

strArr = strArr.reverse()

return strArr

END 

*/

// function playPass(s, n) {
//   let letters = 'abcdefghijklmnopqrstuvwxyz';
//   return [...s].map((char, i) => {
//     if (letters.includes(char.toLowerCase())) {
//       let idx = letters.indexOf(char.toLowerCase());
//       idx = idx + n > 25 ? idx = (idx + n) - 26: idx + n;
//       char === char.toUpperCase() ? char = letters[idx].toUpperCase():
//         char = letters[idx + n];
//     }
//     if (i % 2 === 1 && /[A-Z]/.test(char)) char = char.toLowerCase();
//     if (/[0-9]/.test(char)) char = 9 - Number(char)
//     return char;
//   }).reverse().join('');
// }


// function playPass(s, n) {
//   return s
//     .replace(/[A-Z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65);
//     })
//     .replace(/[a-z]/g, function(char) {
//       return String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97);
//     })
//     .replace(/\d/g, function(digit) { 
//       return 9 - digit; 
//     })
//     .replace(/(.)(.?)/g, function(match, odd, even) {
//       return odd.toUpperCase() + even.toLowerCase();
//     })
//     .split('').reverse().join('');
// }

const playPass = (s, n) => s
  .replace(/\d/g, x => 9 - x).split``.map((e, i) => (/[a-z]/i.test(e) ? 
  shift(e, n) : e)[`to${i % 2 ? 'Lower' : 'Upper'}Case`]()).reverse().join``;
  
const shift = (s, n) => String.fromCharCode((s = n + s.charCodeAt()) > 90 ? (s - 26) : s);



console.log(playPass("BORN IN 2015!", 1)); //  "!4897 Oj oSpC"
console.log(playPass("I LOVE YOU!!!", 1)); // "!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2));
 
// "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"

// Example:
// your text: "BORN IN 2015!", shift 1
// 1 + 2 + 3 -> "CPSO JO 7984!"
// 4 "CpSo jO 7984!"
// 5 "!4897 Oj oSpC"