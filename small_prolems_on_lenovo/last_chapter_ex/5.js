/*
Write a method that changes the first occurrence of
the word apple, blueberry, or cherry in a string to danish.
*/

// Examples:

const danish = (text) => {
  return console.log(text.replace(/\b(apple|blueberry|cherry)\b/, 'danish'));
};

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'
danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'
danish('The cherry of my eye');
// -> 'The danish of my eye'
danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'
danish('I love pineapple');
// -> 'I love pineapple'