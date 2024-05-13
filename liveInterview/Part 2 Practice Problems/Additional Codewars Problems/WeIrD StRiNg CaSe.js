/*

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"






rules
  - explicit:
    - input: string 
    - output: string 
    - given string return all even indexed chars upper cased. 

ds: array, string 



# Given the string 
- declare a variable called weird and initialize it with empty string 
- check if the current index is odd, if it is odd, upper cased the 
  character and concat it with weird 
- return weird 





  
*/




function toWeirdCase(str) {
  return str.split(' ').map(word => [...word].map((char, idx) => 
    idx % 2 === 0 ? char.toUpperCase(): char).join('')).join(' ')
}



console.log(toWeirdCase('This')); // 'ThIs'
console.log(toWeirdCase('This is a test')) // 'ThIs Is A TeSt'
                                           //  ThIs iS A TeSt