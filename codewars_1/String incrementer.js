/*
rules
  - explicit
    - input: string/ alphanumeric 
    - output: incremented by 1 string/ alphanumeric 
    - if the string is not ending with a number, add 1 on the end of string 
  - examples
    - foo -> foo1
    - fooba23 -> fooba24
    -foo099 -> foo100
  
    DS: string 


  # Given the string 
  - extract the number 
    - check if zero is a leading or the first number 
      - find out how many leading zeros and save the amount 
      - check where the number greater than 0 is started 
        - extract the number from non zero char 
           - add one to it 
           - change it to string t
           - concat it with the 0 leading substring 
        - concat it with the rest of the string 
        - if 0 is not starting 
          - extract the number 
          - coerce it to a number 
          - add one to the number 
          - coerce it to string 
        - concat it with the substring 
    - return the result 
 
*/




const incrementString = strng =>
  strng.replace(/[0-8]?9*$/, val => ++val);

// console.log(incrementString("foobar000"));// "foobar001"

//  console.log(incrementString("foobar999"));// "foobar1000"
// console.log(incrementString("foobar00999"));// "foobar01000"
// console.log(incrementString("foo"));// "foo1"
// console.log(incrementString("foobar001")); // "foobar002"
// console.log(incrementString("foobar1")); // "foobar2"
// console.log(incrementString("1"));// "2"
// console.log(incrementString("009"));// "010"
 console.log(incrementString("fo99obar99"));// "fo99obar100"



