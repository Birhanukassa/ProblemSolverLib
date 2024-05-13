
//  var reformatNumber = function(number) {
//     let res = '';
//     number = number.match(/\d+/g).join('');
//     let count = 0;

const { logging } = require("selenium-webdriver");

//     for (let i = 0; i < number.length; i++) {
//     let currentnum = number[i];
    
//     if (number.length > 4) { 
//       res += currentnum;
//       count++;
//       if (count === 3) {
//         res += '-';
//         count = 0;
//       }     
//       if (number.length - i === 4 || res.length ) {
//         res += currentnum;
//         count++;
//         if (count === 2 && i !== 3) {
//           res += '-';
//           count = 0;
//         } 
//       } 
//     }
//     if (number.length < 4) res += currentnum;
//    }   
//     return res;
// };


//console.log(reformatNumber("123 4-5678")); // "123-456-78"
//console.log(reformatNumber(" abc-12"));
//console.log(reformatNumber(" abc-123"));
//console.log(reformatNumber(" abc-1234"));
// console.log(reformatNumber(" abc-12345"));
// console.log(reformatNumber("123 4-567")); // "123-45-67"
// console.log(reformatNumber("123 4-565465443222775sdgfdgdfh7"));

// var reformatNumber = function(number) {
//     let res = '';
//     let str = number.match(/\d+/g).join('');
//     for (let i = 0; i < str.length; i++) {
//         let count = 0;
//         let currentnum = str[i];
//         if (str.length > 4 && i < str.length - 4) {
//             res += currentnum;
//             count++;
//             if (count === 3) {
//               res += '-';
//               count = 0;
//             }      
//        } else if ((str.length - i) <= 4) {
//            if ((res[res.length - 2])) {
//              res += currentnum;
//            } else if (res[res.length - 1]) {
//                count++;
//                res += currentnum;
//                count = 0;
//             } 
//        }  

//       if (res[res.length - 1] === '-') res += currentnum;       
//     }  
//     return res;
// };



// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }



// console.log(disemvowel("This website is for losers LOL!")); 
// // "Ths wbst s fr lsrs LL!"

// console.log(disemvowel(
//   "No offense but,\nYour writing is among the worst I've ever read")
//   );// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"

// console.log(disemvowel("What are you, a communist?"));
// // "Wht r y,  cmmnst?"
    



// function toCamelCase(str) {
//   return str.replace(/[_-][a-z]/gi, c => {
//     console.log(c);
//     return c[1].toUpperCase() 
//   })
// }


// console.log(

//   toCamelCase('The-Stealth-Warrior'),
//   toCamelCase("the_stealth_warrior")

// );

// let arr =  [':)', ';(', ';}', ':-D']

// console.log(str);


//  console.log(":);(;}:-D".match(/^(:|;)(-|~)?[)|D]$/g));

//  function countSmileys(arr) {
//   return arr.filter(smile => /^(:|;)(-|~)?[)D]$/.test(smile)).length
// }

// console.log(countSmileys(arr));

// console.log(/^(:|;)(-|~)?[)|D]$/.test(':)'));







// function pigIt(str){
//   return str.replace(/(\w)(\w+)(\s|$)/g, '\$2\$1ay\$3')

// }




// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
// console.log(pigIt('Hello world!'));     // elloHay orldway !
// console.log(pigIt('Hello world !'));     // elloHay orldway !