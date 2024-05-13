/*
6 kyu
Count characters in your string

The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

FUNDAMENTALS STRINGS ASCII CHARACTER ENCODINGS FORMATS*/

function count(string) {
  let memo = {};
  [...string].forEach(char => {
    memo[char] = (memo[char] + 1) || 1;
  });
  return memo;
}

console.log(count("aba")); // { a: 2, b: 1 }
console.log(count(""));    // {}