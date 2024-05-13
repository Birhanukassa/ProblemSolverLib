

/*
 given string remove vowels and return the string 
 with removed vowels
 
rules
explicit : 
  - input: string
  - output: vowels removed new string 
  - 'y' is not included to the vowels
implicit: 
  - the input and the vowels can have capital and small letters 


ds: array, string 
1. split the string in to array of words
2. loop the array.
  2.1 access each element of word 
  2.2 remove all the vowels in the current word 
    a. split the word to chars
    b. remove all vowels 
    c. join the word 
    d. put th word in place of its original location 
3. join the string array to change it to string 
4. return the new string
  
 */


const disemvowel = str => str.split('').filter(
  ele => !'aeiouAEIOU'.includes(ele))
  .join('');



console.log(disemvowel("This website is for losers LOL!"));
//  "Ths wbst s fr lsrs LL!"

console.log(disemvowel(
  "No offense but,\nYour writing is among the worst I've ever read") 
)
// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"

console.log(disemvowel("What are you, a communist?")); 

// "Wht r y,  cmmnst?"