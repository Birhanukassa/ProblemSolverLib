
// Exercise 
// 1. Problem

// Create a regular expression that matches “magical” 
// dates in yyyy-mm-dd format. 

// A date is magical if the year minus the century, the month, 
// and the day of the month are
// all the same numbers. For example, 2008-08-08 is a magical date. 
// You can assume all dates in the subject text to be valid. 

// The regular expression does not have to exclude
// things like 9999-99-99, as these won’t occur in the subject text. 
// You only need to find the magical dates.

/*
using regex back reference
- capture
  - get the year 
  - get the month 
  - get the date 

- name the captured group 
- check if the the year last 2 digit is equal to the month and the date 



 */


function magicalDate(fullDate) {
  let regex = /(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})/

  const {groups: {year, month, date}} =  regex.exec(fullDate);
  
  return year.slice(2) && month === date;
}

console.log(magicalDate('1908-08-08'));

