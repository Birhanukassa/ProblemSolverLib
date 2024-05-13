/* eslint-disable max-lines-per-function */
/*
5 kyu
The Hashtag Generator
41611488% of 3,13413,763 of 32,746AKJ.IO9 Issues Reported

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/


/*
# Given the string
- if string.length is over 140 or o  return false
- split the string in to words
- declare array with hash/# first element
- loop thru the str array
- make each first word of element to capital letter
- push each alphabet to the declared array
  - when the loop reaches empty space; ignore if any
  - push only first capitalized words

*/

function generateHashtag(str) {
  let array = [];
  let word = '#';
  for (let el = 0; el < str.length; el++) {
    if ((el === 0 || str[el - 1] === ' ') && (str[el] !== ' ')) {
      word += str[el].toUpperCase();
    }  else {
      word += str[el];
    }
  }

  word.split('').forEach(char => {
    if (char !== ' ') {
      array.push(char);
    }
  });

  if (array === '' || array.join('') === '#' || array.length > 140) return console.log(false);
  return console.log(array.join(''));
}

let st = "code" + " ".repeat(140) + "wars";

generateHashtag(" Hello there thanks for trying my Kata");
generateHashtag(st);

// Examples
//=> "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                 => "#HelloWorld"
// ""
// Best practice                                      => false
// 1)
// function generateHashtag (str) {
//     return str.length > 140 || str === '' ? false :
//       '#' + str.split(' ').map(capitalize).join('');
//   }

//   function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }

// 2)
// function generateHashtag (str) {

//     var hashtag = str.split(' ').reduce(function(tag, word) {
//       return tag + word.charAt(0).toUpperCase() + word.substring(1);
//     }, '#');

//     return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
//   }

