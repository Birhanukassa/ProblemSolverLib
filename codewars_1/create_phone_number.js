/*
Create Phone Number 
6 kyu

Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!*/

function createPhoneNumber(array) {
  let phoneNumber = '';
  array.forEach(num => {
    if (phoneNumber.length === 0) phoneNumber += '(';
    phoneNumber += num;
    if (phoneNumber.length === 4) phoneNumber += ') ';
    if (phoneNumber.length === 9) phoneNumber += '-';

  });

  return console.log(phoneNumber);  // => returns "(123) 456-7890"
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);