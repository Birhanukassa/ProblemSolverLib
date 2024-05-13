/*

Extracting Words with "-ing" Inflection

Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". 

Your function should also exclude ``all the mono-syllabic words`` ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.


Notes

Mono-syllabic means a word containing just one syllable.
It's probably best to use RegEx for this challenge./*


Rules
  - Explicit 
    - input: string 
    - output: array of sub strings
    - given the string, extract and return the word that end with 'ing' 
      where the word is more than one syllable. 
  - Implicit
    - the input string has cas insensitive words 

ds: array, string 

# Given the string 

- declare a variable called result and initialize it with empty array 

- change the string input to an array of words 

- iterate the constructed array 
   - check each word if it has more than vowel or if its more than 
      one syllable that end with 'ing'
        - push the word to the result array 
- return result array 

*/


// function ingExtractor(str) {
//   let result = [];
//   let vowels = 'aeiouyAEIOUY';
//   let count = 0;

//   str.split(' ').forEach(word => {
//       [...word].forEach(char => {
//         if (vowels.includes(char)) count++;
//       })
 
//       if (count > 1 && word.slice(word.length - 3) === 'ing' || 
//         count > 1 && word.slice(word.length - 3) === 'ING') {
//         result.push(word)
//       }
//     count = 0;
//     })
  
//   return result;
// }


function ingExtractor(string){
	return string.split(" ").filter(str => str.match(/.*[aouei].*ing/gmi))
}


// console.log(ingExtractor("feeling killing saying discussing FALLing"));
//  // ["feeling", "killing", "saying", "discussing", "FALLing"]
 
// console.log(ingExtractor("Taking taLkING pending SING"));
//  // ["Taking", "taLkING", "pending"]
 
// console.log(ingExtractor("suggest drive run lend"));
//  // []
 
// console.log(ingExtractor("KING sing bring ring pING"));
//  // []
 
// console.log(ingExtractor("bing reading dancing ing"));
//  // ["reading", "dancing"]
 
// console.log(ingExtractor("singing ringing winging bringING PINGING"));
//  // ["singing", "ringing", "winging", "bringING", "PINGING"]
 
// console.log(ingExtractor("KISSing shrinking hand window"));
//  // ["KISSing", "shrinking"]
 
// console.log(ingExtractor("hold past ling bring up go away shake Zing king"));
//  // []
 
// console.log(ingExtractor("string"));
//  // []
 
// console.log(ingExtractor("Kris Ehresmann, the infectious disease director at the Minnesota Department of Health, said at a briefing on Friday that at least 15 cases in Minnesota were identified as having originated from rally attendees. Seven more cases were identified in Nebraska, according to reporting from CNN. Health officials in South Dakota said this week that they had traced several cases to a popular bar along main street, where photos showed thousands of people congregating without masks over the course of the rally"));
 
//  //, ["briefing", "having", "according", "reporting 