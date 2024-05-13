
/*

rules
  - explicit
    - input: string
    - output: number 
    - count the the substrings of palindrome that has 3 or more length 
    - palindromes are the string that has the same meaning backward 
      and forward
  - implicit 
    - substrings must be consecutive 

ds: string, array 


Given the string 
declare a variable count and initialize it with 0 
  - check if the string is palindrome
    - if it is, increment count by 1
       - loop the string upto the last index - 3
         - loop the string form the first loop start index + 3 upto the last index 
          
           - find the first 3 consecutive chars and check if its palindrome,
             - if it is 
               - increment count by 1
               - else 
                 - continue 
- return count 


*/
function numPalindromes(str) {
  let count = 0;
 

  for (let i = 0; i < str.length - 2; i++) {
    let j = str.length - 1;
      let substr = str.slice(i, j + 1);
      if () {
        count++;
      }
   
  }
  return count;
}



 console.log(numPalindromes('abc')) // 0
console.log(numPalindromes('aaa bfj fba ske x')) // 4