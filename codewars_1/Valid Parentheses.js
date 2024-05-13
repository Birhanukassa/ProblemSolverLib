/*

write a function that accept parentheses chars and return boolean if both side match.


rules
  - explicit: 
      - input string chars of parentheses 
      - output: boolean 
  - the inputs are chars of parentheses 
  
ds: array, string 


Given the string 

declare balance and initialize it to 0 
  split the string to chars of array 
    loop the array and 
      if the char is '(' increment balance by 1
      if the char is ')', decrement balance by 1
  return balance === 0  


SET balance = 0

splittedArr = string splitted to individual chars 

LOOP splittedArr 
      if the char is '(' increment balance by 1
      if the char is ')', decrement balance by 1
return balance === 0  

*/


// function validParentheses(str) {
//   let balance = 0;

//   for (let char of [...str]) { 
//     if (char === '(' ) balance++;
//     if (char === ')' ) balance--;
//     if (balance < 0) return false;
//   }

//   return balance === 0;
// }

function validParentheses(parens){

  while (parens.includes('()')) {
    parens = parens.replace('()', '');
  }

  return !parens;
}


console.log(validParentheses( "()" ))              //  true
console.log(validParentheses( ")(()))" ))          //  false
console.log(validParentheses( "(" ))               //  false
console.log(validParentheses( "(())((()())())" ))  //  true
console.log(validParentheses( "(" ))               //  false
console.log(validParentheses( ")" ))               //  false
console.log(validParentheses( "" ))                //  true
console.log(validParentheses( "()" ))              //  true
console.log(validParentheses( "())" ))             //  false
console.log(validParentheses( "())(()" ))          //  false
console.log(validParentheses("())(()"))            //  false