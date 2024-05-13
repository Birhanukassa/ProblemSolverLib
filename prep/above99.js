// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// let sum = add(20, 45);
// console.log(sum);
// let difference = subtract(80, 10);
// console.log(difference);
// console.log(add(20, 45)); //65
// console.log(subtract(80, 10)); // 70
// function times(num1, num2) {
//     return num1 * num2;
// }
// console.log(times(add(20, 45), subtract(80, 10 ))); //4450
// // 4550 == ((20 + 45) * (80 - 10))
//  sum = add(20, 45);
//  difference = subtract(80, 10);
// let result = times(sum, difference);
// console.log(result);
// add(subtract(80, 10),  // 70
//     times(subtract(20, 6), // 14 
//           add(30, 5))) // 35 => 14 * 35 => 560
// Run this code in your browser
// function first() {
//     return "foo "
//   }
// function second() {
//     return first() + "bar ";
//   }
// function third() {
//     return first() + second() + "qux";
//   }
// third(); // => 'foo foo bar qux'
// //************************************************
// function evenOrOdd(num){
// if(num % 2 == 0) {
//   console.log('even');
// } else {
//   console.log('odd');
//   };
// };
// console.log(evenOrOdd(3));
// function qux(){
// };
// function foo(qux){
//   return  'bar'
// };
// let stL = '';
// function ab(stL) {
//   if(stL.length[10] <= 10) {
//      console.log(stL.toUpperCase());
//   } else {
//     console.log(stL);
//   } 
//   }
// console.log(ab('hello birthanu'));
// function newsl(stL) {
//  return stL = stL.length > 10 ? stL.toUpperCase() : stL;
// };
// newsl('Hey bre, Congrats!!');
//   if(stL < stL.length[10]) {
//     console.log(stL);
//   } else {
//     console.log();
//   }
//   }
// }
// function newsl(stL) {
//   return stL = stL.length > 10 ? stL.toUpperCase() : stL;
//  };
//  console.log(st.toUpperCase());
// }
// ab('Hello');
// num = 0;
// function numberRange(num) {
//  if (num < 0) {
//   console.log(num + " is less tan 0");
// } else if (num < 51) {
//     console.log( num + " is between 0 and 50");
// } else if (num <= 100) {
//     console.log(`${num} is between 51 and 100`);
// } else {
//   console.log(`${num}, is greater than 100`);
// } 
// };
// console.log(numberRange(25));
// console.log(numberRange(75));
// console.log(numberRange(125));
// console.log(numberRange(-25));
// *****************************************//
// *****************************************//
// let array = [3, 1, 5, 9, 2, 6, 4, 7];
// let indexOfFive = -1;
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === 5) {
//     indexOfFive = i;
//   }
// }
// console.log(indexOfFive);
// **************************************
// let counter = 0;
// while (counter = 1) {
//   console.log(counter);
//   counter += 1;
//   if (counter > 2) {
//     break;
//   }
// }
// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let tries = 0;
// let result = (1, 6);
// tries += 1;
// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }
// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
// function factorial(number) {
//     let result = 1;
//     for (let counter = number; counter > 0; counter -= 1) {
//       result *= counter;
//     }
//     return result;
//   }
//  console.log(factorial(4));     // => 24
//  function factorial(number) {
//     if (number <= 1) {
//       return 1;
//     } 
//     return number * factorial(number - 1);
//   }
// function evenNumber(myArray) {
//     for(Item = 0; Item < myArray.length; Item ++)
//           let newI = item % 2 = 0;
//             console.log(newI);
// console.log(evenNumber(myArray));
// //This one actually worling !! Yayy :)
// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
// myArray.forEach(function (num) {
//     if( num % 2) {
//         return num;
//         num = num + 1
//     }
//     console.log(num);
// });
// console.log();
// console.log();
// //let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
// for( let even = 0; even < myArray.length; even++) {
//     let value = myArray[even]
//     if( value % 2 === 0) {
//         console.log(value);
//     }
// }
// let myArray = [
//     [1, 3, 6, 11],
//     [4, 2, 4],
//     [9, 17, 16, 0],
//   ];
// myArray = myArray.flat();
// console.log(myArray);
// myArray.forEach(function(value) {
//       console.log(value);
// });
// console.log();
// console.log();
// for(i of myArray){
//     console.log(i);
// }
// for(let i = 0; i < myArray.length; i += 1){
//     let value = myArray[i];
//     if( value % 2 === 0) {
//     console.log(value);
//     };
// };
// //
// let myArray = [
//     1, 3, 6, 11,
//     4, 2, 4, 9,
//     17, 16, 0,
//   ];
//   Desired result:
//    [
//      'odd', 'odd', 'even', 'odd',
//      'even', 'even', 'even', 'odd',
//      'odd', even', 'even',
//    ]
//  let x = 0;
// let mapMyArray = myArray.map(x => x % 2);
// if(x === 0) {
//     console.log('even');   
// } else {
//     console.log('odd')
//     if (condition) {      
//     } else {        
//     }
// };
// console.log(mapMyArray);
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];
// myArray.array.forEach(element => {
//   console.log(element);
// });
// let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
// let x = 0;
// let mapMyArray = myArray.map(x => x % 2) {
//   if (x === 0) {
//     return 'even';   
//   } else {
//    return 'odd';
//   }
// });
// if (x === 0) {
//   return 'even';
// } else {
//   return 'odd';
// }
// });
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];
// let newArray = myArray.map(function(value) {
//   if (value % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
//  });
// console.log(newArray);
// for (let i = 0; i < myArray.length; i += 1) {
//   let value = myArray[i];
//   if (value % 2 === 0) {
//     newArray.push('even');
//   } else {
//     newArray.push('odd');
//   }
// }
// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let fArray = array.filter(function (value) {
//     return Number.isInteger(value);
// })
//  console.log(fArray);  
// function oddLengths(arr) {
//     let filteredNumbersArray = arr.map((letters) => {
//       return letters.length;
//      }).filter((number) => {
//        return number % 2 === 1;
//      });
//     return filteredNumbersArray;
//   }
//   let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//   console.log(oddLengths(arr));
//let numbers = [3, 5, 7];
//let sumOfSquares = (accumulator, currentValue) => accumulator * currentValue;
//const sumOfSquares = (accumulator, currentValue) => accumulator * currentValue;
//numbers.reduce((accumulator, element) => accumulator * element, 1)
// const value = 0;
// const numbers = [5, 10, 15];
// for(let i = 0; i < numbers.length; i++) {
//   value += numbers[i];
// }
// //
// //
/* this is our initial value i.e. the starting point*/
// const initialValue = 0;
// /* numbers array */
// const numbers = [5, 10, 15];
// /* reducer method that takes in the accumulator and next item */
// const reducer = (accumulator, item) => {
//   console.log("accumlator is", accumulator, "item is ", item)
//   return accumulator + item;
// };
// /* we give the reduce method our reducer function
//   and our initial value */
// const total = numbers.reduce(reducer, initialValue)
// console.log(total)
// let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
// arr[1][2];
// console.log(arr[1][2]);
// let person = {
//     name:    'Jane',
//     age:     37,
//     hobbies: ['photography', 'genealogy'],
//   }; //> let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }
//   let objToCopy = {
//     foo: 1,
//     bar: 2,
//   };
//   function copyobj(objToCopy, x) {
//      objToCopy.Object.create(x)
//   }
//   let newObj = copyObj(objToCopy);
//   console.log(newObj.foo);    // => 1
//   console.log(newObj.bar);    // => 2
//   let newObj2 = copyObj(objToCopy, [ 'foo' ]);
//   console.log(newObj2.foo);   // => 1
//   console.log(newObj2.bar);   // => undefined
// let words = [
//     'laboratory',
//     'experiment',
//     'flab',
//     'Pans Labyrinth',
//     'elaborate',
//     'polar bear',
//   ];
// function allMatches(words, rgs) {
//   let = results = words.match(rgs);
//   if(results) {
//     console.log(results);
//   }
// }
// function allMatches(words, pattern) {
//   return words.filter((word) => pattern.test(word));
// }
// allMatches(words, /lab/);
// console.log(allMatches(words, /lab/));
// function isNotANumber(Number) {
//   return Number !== Number;
// }
// console.log(isNotANumber(12));
// let ice_cream_taste = 'chocolate';
// let ice_cream_density = 10;
// while(ice_cream_density > 0) {
//     console.log('Drip...');
//     ice_cream_density -= 1;
// };
// console.log('The '+ ice_cream_taste +' ice cream melted.');
// let speedLimit = 60;
// let currentSpeed = 80;
// if (currentSpeed > speedLimit);
//   if ((currentSpeed - speedLimit) > 5) {
//         console.log(`"People are so bad at driving cars that computers don't have to be that good to be much better." -- Marc Andreessen`);
//   };
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   };
// console.log("Launch!");
// let greeting = 'Aloha!';
// for(count = 1; count < 101; count++) {
//   let multiplyByTwo = count * 2;
//   console.log(multiplyByTwo);
// }
// for(count = 1; count < 101; count++) {
//   console.log(count * 2);
//  }
// let array = [1, 2, 3, 4];
// let index = 0;
// while (index < array.length) {
//   index++;
//   console.log(index)
// }
//let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
// for (let city = 0; city < cities.length; city++) {
//   if ( cities[city] === null) {
//        continue;
//   } else {
//      console.log(cities[city]);
//   }
// }
// for (let city of cities) {
//   if (!city) continue;
//   console.log(city);
// }
//}
// let num = 1;
// while ( num < 40) {
//   if(num % 2 !== 0) {
//     console.log(num);
//   }
//   num++;
// }
// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
// for( let index = 0; index < fish.length; index++) {
//   if(index === 'Nemo') {
//     break;
//   }
//   console.log(index);
//let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
// for(let index = 0; index < fish.length; index++) {
//     console.log(fish[index]);
//     if(index === 'Nemo') {
//        break;
//     } 
// }
// for (let index in fish) {
//   console.log(fish[index]);
//   if(fish[index] === 'Nemo') {
//     break;
//   }
// }
//let randomNumber = Math.round(Math.random());
// if(randomNumber === 0) {
//     console.log('No.')
// }else {
//    console.log('Yes!');
// }
//randomNumber === 0 ?  console.log('No.') : console.log('Yes!')
// let weather = 'blather';
// if(weather === 'sunny') {
//     console.log('It\'s a beautiful day!');
// } else if(weather === 'rainy') {
//     console.log('Grab your umbrella.');
// }else {
//     console.log('Let\'s stay inside');
// };
// let animal = 'horse';
// switch (animal) {
//   case 'duck':
//     console.log('quack');
//     break;
//   case 'horse':
//     console.log('neigh');
//     break;
//   case 'bird':
//     console.log('tweet tweet');
//     break;
//   default:
//     console.log('*crickets*');
// }
//
// let weather = 'Blather';
// switch (weather) {
//     case 'rain':
//        console.log('Grap the Umbrella :umbrella:');
//        break;
//     case 'thunderstorm':
//        console.log(`Don't go outside!:eyes:`);
//        break;
//     case 'snow':
//        console.log(`Wear a Glove  let's go for :ski:`);
//        break;
//     case 'sunny':
//        console.log(`Let's go out for a walk :city_sunrise: Enjoy the Weather :sunny:`);
//        break;
//   default:
//       console.log(`Let's do some coding :heart_eyes:`);
// }
// let weather = 'Blather';
// switch (weather) {
//     case 'rain':
//        console.log(`Grap the Umbrella`);
//        break;
//     case 'thunderstorm':
//        console.log(`Don't go outside!`);
//        break;
//     case 'snow':
//        console.log(`Wear a Glove!`);
//        break;
//     case 'sunny':
//     case 'Spring':
//        console.log(`Enjoy the Weather`);
//        break;
//   default:
//       console.log(`Let's do some coding :)`);
// }
// function sum(param_a, param_b ) {
//     return param_a + param_b;
// }
// console.log(sum(22, 10))
// function brendanEichQuote() {
//    console.log("Always bet on JavaScript.");
// } 
// function cite(author, qoute) {
//   console.log(`${author} said: "${qoute}"`);
//  } 
//  cite('Brendan Eich', 'Always bet on JavaScript.');  //Brendan Eich said: "Always bet on JavaScript."
// function squaredNumber(num) {
//  return num ** 2;
// }
// squaredNumber(3); // 9
// function compareByLength(firstStr, secondStr) {
//   if (firstStr.length < secondStr.length) {
//       return -1;
//   } else if (firstStr.length > secondStr.length) {
//       return 1;
//   } else {
//       return 0;
//   }
// }
// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');  
//  0
// 'Captain Ruby'.replace('Ruby','Javascript');
// function greet(greetings) {
//     switch (greetings) {
//         case 'en':
//             console.log('Hi');
//             break;
//         case 'fr':
//             console.log('Salute');
//             break;
//         case 'pt':
//         case 'es':
//             console.log('Olá');
//             break;
//         case 'sv':
//             console.log('Hej');
//             break;
//         case 'af':
//             console.log('Haai');
//             break;
//         default:
//             console.log("Sorry, We don't speak this unique language.!");
//     }
// }
// greet('pt');  //Olá
// greet('af'); //Haai
// let region = 'ko_KR.UTF-16';
// function extractRegion(region) {
//  return region.substring(3, 5);
//  }
// console.log(extractRegion(region));
// let locale = 'en_US.UTF-8';
// function localGreet(locale) {
//   function extractRegion(region) {
//     function extractRegion(region) {
//        function greet(lanCode) {
//     locale.substring(0, 6);
//     switch (locale) {    
//        case 'en_US.UTF-8': return 'Hey!';
//        case 'en_GB.UTF-8': return 'Hello!';
//        case 'en_AU.UTF-8': return 'Howdy!';
//        default:
//            return `Selam :) Sorry, We don't speak this unique language.!`;
//     } 
// }
//  console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
// function greet(lanCode) {
//     switch (lanCode) {
//          case 'en': return 'Howdy!';
//          case 'en': return 'Hello!';
//          case 'pt': return 'Olá!'; 
//          case 'af': return 'Haai!';
//          case 'sv': return 'Hej!';    
//       }
//     }
// let locale = 'en_US.UTF-8';
// function greet(greetings) {
//     switch (greetings) {
//         case 'en': return 'Hi';
//         case 'fr': return 'Salute';
//         case 'pt':
//         case 'es': return 'Olá';
//         case 'sv': return 'Hej';
//         case 'af': return 'Haai';
//         default: return "Sorry, We don't speak this unique language!";
//     }
// }
// function localGreet(locale) {
//     locale.substring(0, 6);
//     switch (locale) {    
//         case 'en_US.UTF-8': return 'Hey!';
//         case 'en_GB.UTF-8': return 'Hello!';
//         case 'en_AU.UTF-8': return 'Howdy!';
//         default: return greet(locale);
//     } 
// }
// console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'  
// console.log(localGreet('en_US.UTF-8')); // 'Hey!'
// console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
// console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
// console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
// let string = "These aren't the droids you're looking for.";
// console.log(string.length);  // 43
// console.log('confetti floating everywhere'.toLocaleUpperCase());
// function echo(String) {
//     return String * 2;
// }
// console.log(echo('ha'));
//let string = 'ha';
// function echo (string, times) {
//     let repword = "";
//     for(let word = 1; word < string.length; word++) {
//                     //repword += string[word];
//                     // return echo(string[word * 2]);
//                    echo(string, times -1);
//                    // times --;
//         return repword;                 
//         }
//     }
// function newFunction(word) {
//     let repword = word * 2;
//     console.log(repword);
// }
// }      
//return console.log(`I'm afraid this is not string :) `);
//  let string = 'ha';
//  function echo(string) {
//      let strArr = string.split("");
//      return strArr;
//  }
// console.log(echo(string));
// let strArr = (echo(string));
// console.log(strArr);
// for(let word = 0; word < strArr.length; word++) {
//     console.log(strArr[::2]);
//     }
// //console.log(rep(string))
// const repeat = (x, str) => {
//     let result = "";
//     for (let i = 0; i < x; i += 1) {
//       result += str;
//     }
//     return result;
//   };
// console.log(repeat(4, 'ha'));
// let str = `A pirate I was meant to be!\nTrim the sails and roam the sea!`
// console.log(str);
// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';
// console.log(string1.toLowerCase() === string2.toLowerCase());
// console.log(string2.toLowerCase() === string3.toLowerCase());
// function checkChar(string, word) {
//   for (char = 0; char < string.length; char++) {    
//     if (string[char] === word) {
//       return true;
//     }     
//   }
//   return false;
// }
// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(checkChar(byteSequence, 'x'));
// function isBlank(param) {
//   if(param.trim() === "") {
//     return true;
//   } else {
//     return false;
//   }   
// }
// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // true
// console.log(isBlank(''));     // true
// let myFavoSchool = 'launch school tech & talk';
// function capitalize(string) {  
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// myFavoSchool.split(' ').map(capitalize).join(' ');
// console.log(capitalize(myFavoSchool)); // Launch school tech & talk
// function first(arr) {
//   return arr[0];
// }
// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
// function last(arr) {
//   return arr[arr.length -1];
// }
// console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
//  //console.log(energy);
// // energy.shift(); 
// // console.log(energy);
// // energy.push('geothermal');
// // console.log(energy);
// energy = energy.slice(1);
// console.log(energy);
// energy.splice(0, 1);
// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// alphabet.split('');
//Count the number of elements in scores that are 100 or above.
// function above99(arr) {
//   return arr >= 100;
// }
let scores = [96, 47, 113, 89, 100, 102];
// let count = scores.filter(above99).length;
// console.log(count);

let count = 0;
for(i = 0; i < scores.length; i++) {
    if(scores[i] > 99) {
        count+= 1;
    }   
}
console.log(count);