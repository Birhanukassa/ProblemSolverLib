/*
What Century is That?

Write a function that takes a year as input and returns the century. The return
value should be a string that begins with the century number, and ends with
'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century.

PEDAC
P
E/D  input - number
*/
const century = num => {
  let result = Math.floor(num / 100) + 1;
  if (result < 9) result += 'st';
  return console.log(result);
};

//Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th


