/*
Write a function that takes one argument, a positive integer, and returns
a string of alternating '1's and '0's, always starting with a '1'. The
length of the string should match the given integer.

*/

const stringy = (num) => {
  let count = 0;
  let result = '1';
  while (count < num - 1) {
    result = result[result.length - 1] === '0' ? result += '1' : result += '0';
    count++;
  }
  return console.log(result);
};

// Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"