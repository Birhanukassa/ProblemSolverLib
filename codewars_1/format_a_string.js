/* eslint-disable max-len */
/*
6 kyu
Format a string of names like 'Bart, Lisa & Maggie'.
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except
for the last two names, which should be separated by an ampersand.

!PEDAC
*Problem
  input:
      - array of objects / hashes
  output:
      - string
  explicit:
  - format the given array of hashes to a sting
  - the string should return with comma separations except the last 2 will be with '&'
  implicit:
  - ampersand mean a conjuncture of words
  - if the given array is empty array return ''
*Examples/Test cases are given above
*Data-structure
  -
*Algorithms
 # Given the array of hashes
  1- declare a variable and assign it to empty array
  2- iterate the array and select the value of each hash and save it in num 1
  3- format num 1 elements
    a. check the array length
    b. if its 1 element return the element
    c. if its 2 elements return the elements with ampersand
    d. if its 3 and over, return all elements separated with comma except the last 2 elements
       - the last 2 should be separated with given ampersand
    e. return the formatted string
*/


function list(array, ampersand = ' & ') {
  let names = [];
  array.forEach(name => names.push(name.name));
  console.log((names));
  switch (names.length) {
    case 0:
      return '';
    case 1:
      return names[0];
    case 2:
      return names.join(ampersand);
    default:
      return names.slice(names.length - 1).join(ampersand) +
      ampersand + names.length - 1;
  }
}

// return `${copyOfnames.join(', ')}${ampersand + lastName}`;

console.log(list([ {name: 'Bart'}, {name: 'Lisa'},{name: 'Maggie'} ]));
//returns 'Bart, Lisa & Maggie'
//console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
//returns 'Bart & Lisa'
//list([ {name: 'Bart'} ]);
//returns 'Bart'
//console.log(list('')); // returns ''
