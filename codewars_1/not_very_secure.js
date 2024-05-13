/*
5 kyu
Not very secure

In this example you have to validate if a user input string is alphanumeric. 
The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No white spaces / underscore

BUGS REGULAR EXPRESSIONS DECLARATIVE PROGRAMMING ADVANCED LANGUAGE FEATURES FUNDAMENTALS STRINGS

*/

function alphanumeric(string){
  isAlphanumeric = /[" " a-z_]/gi.test(string);
    return isAlphanumeric ? false: true;
      
}


// Sample Tests:
// "     "

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("hello world_"));  //, false)
console.log(alphanumeric("PassW0rd"));   //true)
console.log(alphanumeric("     "));   //, false);


