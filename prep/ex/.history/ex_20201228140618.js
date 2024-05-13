// let vocabulary = [
//     ['happy', 'cheerful', 'merry', 'glad'],
//     ['tired', 'sleepy', 'fatigued', 'drained'],
//     ['excited', 'eager', 'enthused', 'animated']
//   ];
  
//   // Expected output:
//   // happy
//   // cheerful
//   // merry
//   // etc...
//   for(let i = 0; i < vocabulary.length; i++) {
//     for(let j = 0; j < vocabulary[i].length; j++) {
//       console.log(vocabulary[i][j]);
//     }
//   }
// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];
// console.log(array1 === array2);
//********************************//
// //Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().
// //For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false
// //let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   //'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//  // 'Marrakesh', 'New York City'];

// function contains(travelingDestination, travelAttractions) {
//     for (let visit = 0; visit < destinations.length; visit++) {
//         if(travelAttractions[visit] === travelingDestination) {
//           return true;
//          }         
//     }  
//   return false;      
// }
 
// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false

//**********************************************************//
// //Vocabulary
// //We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
//************************************************************//
// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// Expected output:
// happy
// cheerful
// merry
// etc...

// for(let i = 0; i < vocabulary.length; i++) {
//   for(let j = 0; j < vocabulary[i].length; j++) {
//      console.log(vocabulary[i][j]);
//    }
//  }
//******************************************************//
// //Type
// //How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

// function filter(input) {
//   // Is input an array?
// }

// You can use the Array.isArray() method. For example:

// Copy Code
// let someValue1 = [0, 1, 0, 0, 1];
// let someValue2 = 'I leave you my Kingdom, take good care of it.';

// Array.isArray(someValue1); // true
// Array.isArray(someValue2); // false
// Discussion
//// Note that the typeof operator returns 'object' for arrays, because arrays are objects. Therefore it does not distinguish between arrays and other objects.
//*************************************************//
// Passcode
// We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// // Write some code here.
// passcode.join('-');
// console.log(passcode.join('-')); // '11-jZ5-hQ3f*-8!7g3-p3Fs'

// //Or
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// let joinedPasscode = '';

// for (let i = 0; i < passcode.length; i += 1) {
//   if (i > 0) {
//     joinedPasscode += '-';
//   }

//   joinedPasscode += passcode[i];
// }

// console.log(joinedPasscode); 
// // Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

////**************************************************** */
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// //passcode.join(); // '11,jZ5,hQ3f*,8!7g3,p3Fs'
// ////How can you join all elements of an array with no separator character?
// passcode.join(''); //'11jZ5hQ3f*8!7g3p3Fs'
// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
// // Your code.
// function shopper(arr) {
//   //let bought = arr.length;
//    for ( let wannaBuy = arr.length; wannaBuy > 0; wannaBuy -= 1) {
//     // let shop = arr.shift();
//        console.log(arr.shift());
//   }
// }
// Or
// function boughtItem(arr) {
//   while ((item = arr.shift()) !== undefined) {
//     console.log(item);
//   } 
// }
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus
// groceryList; // []
 //console.log(boughtItem(groceryList));
// console.log((shopper(groceryList)));
// console.log((groceryList));

// function isOdd(num) {
//   if (num % 2 !== 0){   
//       return true;
//    } else 
//       return false;
//    }
 
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// function extractLanguage(locale) {
//    return locale.slice(0, 2);
//  }


// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'

// let positiveInt = 4;
// let determiner = "s";

// function sum_of_carl_friedrich_gauss(positiveInt) {
//   let sumOfAllNumber = (1 + positiveInt) * (positiveInt / 2);
//   return sumOfAllNumber;
//  }

//  console.log(`The sum of the integers between 1 and ${positiveInt} is ${sum_of_carl_friedrich_gauss(positiveInt)}.`);
// let readlineSync = require("readline-sync");
// const SQMETERS_TO_SQFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = (length * width);
// let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

// console.log(
//   `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
// );
// let positiveInt = 6;

// function factorial(positiveInt) {
//   while(positiveInt > 1) {
//       let facto = positiveInt * (positiveInt - 1);
//       return facto;
//   }
// }

// function factorial(positiveInt) {
//   while(positiveInt > 1) {
//       let facto = positiveInt * (positiveInt - 1);
//       return facto;
//   }
// }

// console.log(`The product of the integers between 1 and ${positiveInt} is ${factorial(positiveInt)}.`)
// console.log(`The product of the integers between 1 and ${positiveInt} is ${factorial(positiveInt)}.`)

// function factorial(positiveInt) {
//   while(positiveInt > 1) {
//       let facto = positiveInt * (positiveInt - 1);
//       return facto;
//   }
// }

// console.log(factorial(5));
///////////////////////////////////////////

function at(arr, i) {
  for(let i = 0; i < arr.length; i++) {
    if(i !== arr[i]) {
      return null;
    } 
  } return arr[i];
 
}

console.log(at([0, 0, 0], 0));

console.log(at([0, 0, 0], 0));
console.log(at([1, 2, 3], 1));
console.log(at([1, 2, 3], 0));
console.log(at(['a'], 0));
console.log(at([1, 2, 3], 3));
console.log(at([1, 2, 3], 5));
console.log(at([], 0));
console.log(at([], 1));
console.log(at([1, 2, 3], -1));
console.log(at([undefined], 0));
