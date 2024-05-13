
// 1) find unique char in string and return boolean

function isInteger(num) {
  return /\./.test(String(num))
}

console.log(isInteger(1.8)); // true


// ---------------------------------------------------




// Letter case Percentage Ratio

// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.


// Hint: Algorithm
// This exercise is a string processing problem. You can either convert the string into an array and use list processing (iteration perhaps?) to gather and tally the characters, or use regex to get the characters that match a particular pattern. Once you have the characters, you can simply get the quantity for each category, divide the quantity by the length of the string, and format the result as needed.






function letterPercentages(string) {
  let count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
      2
    )
  };
}


function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];  // ==> look this approach 
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

// Discussion
// Solution 1 may be concise, but there are many things happening on each line of the object literal. Let's break down the first of these three similar lines. In particular, we will look at the expression that makes up the value of the lowercase property:

// (string.match(/[a-z]/g) || []) : Returns either an array of the matches for lowercase letters, or an empty array []. String.prototype.match returns null if no matches are found, so the logical OR operator (||) is used to ensure that the overall expression will always return an array, which allows the length property to be accessed without raising an error.
// ((string.match(/[a-z]/g) || []).length / count) * 100 : Returns the letter percentage as a number.
// (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2) : Formats the percentage as a number string rounded to two decimal places.
// Solution 2 operates nearly identically to solution 1, but it uses a nested function, percentage to count the characters that match the regex argument and compute the percentage. It also breaks up some of the more complex code to make it easier to understand.

// Note that the inner function, percentage, has access to values assigned to variables string and count. Whenever you see a function within another function, the inner function has access to the scope in the outer function. This feature is called Lexical Scope. In other words, the scope of variables is defined by their position in the source code. To resolve variables, JavaScript starts at the innermost scope and searches outwards until it finds the variable it was looking for.




// Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }