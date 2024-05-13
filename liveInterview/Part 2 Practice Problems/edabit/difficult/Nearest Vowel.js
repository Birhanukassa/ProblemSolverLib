/*

Nearest Vowel

Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.


Notes
All letters will be given in lowercase.
There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".


Rules
  - explicit
     - input: letter
     - output: letter (vowel)
     - return the nearest vowel to the given letter 
     - all the given letter is a small letter 

  - DS: string

  # Given the letter 
    - declare a variable called vowel and initialize it with vowels 
    - temp variable with empty string 

    - start iterate vowels
      - increment the vowel to temp that is smaller than the letter 
    - compare temp chars and return the bigger char 
*/


// function nearestVowel(letter) {
//   let vowelsAcc = 'aeiou';
//   let temp = '';
 

//   for (let highCloser of vowelsAcc) {
//    if (letter <= highCloser ) {
//     temp += highCloser;
//     break;
//    }
//   }

//   let vowelsDes = [...vowelsAcc].sort((a, b) => {
//     if (a > b) {
//       return -1;
//     } else if(a < b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
//   )

//    for (let lowCloser of vowelsDes) {
//     if (letter >= lowCloser ) {
//       temp += lowCloser;

//      break;
//     }
//    }

 
//    let highCloser = 0;
//    let lowCloser = 0;

//   if (temp.length === 1) {
//    return temp;
//   } else if (temp.length === 2) {
//     highCloser = letter.charCodeAt() - temp[0].charCodeAt()
//     lowCloser =  letter.charCodeAt() - temp[1].charCodeAt()
//   }

 
//   if (highCloser < 0) highCloser = highCloser * -1;
//   if (lowCloser < 0) lowCloser = lowCloser * -1;

//   return letter.charCodeAt() + highCloser < lowCloser + letter.charCodeAt() ? temp[0]: temp[1];
  
//   }


// function nearestVowel(s) {

//   return String.fromCharCode(
//     [97, 101, 105, 111, 117].sort((a, b) => 
//     Math.abs(a - s.charCodeAt(0)) - Math.abs(b - s.charCodeAt(0)))[0]
//     )
// }


// function nearestVowel(s) {
//   const char = "aaaeeeeiiiiioooooouuuuuuuu";
//   const output = "abcdefghijklmnopqrstuvwxyz".indexOf(s);
//   return char[output]
// }


function nearestVowel(s) {
  for (let c = s.charCodeAt(0), i = 0; ; i++) {
   
    if (/[aeiou]/.test(String.fromCharCode(c - i))) {
      return String.fromCharCode(c - i);
    }

    if (/[aeiou]/.test(String.fromCharCode(c + i))) {
      return String.fromCharCode(c + i);
    }
  
  }
}


// function nearestVowel(s) {
// 	var v  = ["a","e","i","o","u"]
// 	var dex = s.charCodeAt(0)
// 	var char =  v.map(x => Math.abs(dex - x.charCodeAt(0)))
//   return v[char.indexOf(Math.min(...char))] 
// }

// console.log(nearestVowel("a")) // "a"
// console.log(nearestVowel("b")) // "a"

// console.log(nearestVowel("c")) // "a"
// console.log(nearestVowel("u")) // "u"


console.log(nearestVowel("v")) // "u"
console.log(nearestVowel("w")) // "u"
console.log(nearestVowel("x")) // "u"
console.log(nearestVowel("y")) // "u"
console.log(nearestVowel("z")) // "u"


// console.log(nearestVowel("o")) // "o"
// console.log(nearestVowel("p")) // "o"
// console.log(nearestVowel("q")) // "o"
// console.log(nearestVowel("r")) // "o"
// console.log(nearestVowel("i")) // "i"
// console.log(nearestVowel("j")) // "i"
// console.log(nearestVowel("k")) // "i"
// console.log(nearestVowel("l")) // "i"
// console.log(nearestVowel("e")) // "e"
// console.log(nearestVowel("f")) // "e"
// console.log(nearestVowel("g")) // "e"

//  console.log(nearestVowel("d")) // "e"
//  console.log(nearestVowel("h")) // "i"
//  console.log(nearestVowel("m")) // "o"
//  console.log(nearestVowel("n")) // "o"

//  console.log(nearestVowel("s")) // "u"
//  console.log(nearestVowel("t")) // "u"
