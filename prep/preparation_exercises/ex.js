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

//let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
// for( let index = 0; index < fish.length; index++) { 
//    console.log(fish[index]);
//   if(index === 'Nemo') {
//     break;
//   }
// }
// let fish = ["loop", "this", "array"];
// for (let i = 0; i < fish.length; i++) { // iteration over input
// 	console.log(fish[i]); // logs the elements from the current input
// }
// let array = ["loop", "this", "array"]; // input array variable
// for (let i = 0; i < array.length; i++) { // iteration over input
// 	console.log(array[i]); // logs the elements from the current input
// }
// let array = ["loop", "this", "array"];
// for (let i = 0; i < array.length; i++) {
//  console.log(array[i]);
//  }
// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
// // Your code.
// function shopper(arr) {
//     let shoping = arr.length;
//    for (let wannaBuy = 0; wannaBuy < shoping; wannaBuy += 1) {
//        console.log(arr.shift());
//   }
// }
// // Or
// function shopper(arr) {
//   while (item = arr.shift()) {
//     console.log(item);
//   } 
//}
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus
// groceryList; // [];
//  console.log(shopper(groceryList));
//  console.log(groceryList);
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
// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];
  
//   function contains(element, array) {
//     for (let i = 0; i < array.length; i++) {
//       if (element === array[i]) {
//         return true;
//       }
//     }
//     return false;
//   }

 
// contains('Barcelona', destinations); // true
// contains('Nashville', destinations); // false
//******************************************************/
/*******************************************************/
//Greet 1
/*How can we alter the function definition of greet so that 
  the parameter greeting is assigned a default value of 'Hello' 
when no argument is passed to the function invocation? */

// function greet(greeting) {
//   if( greeting !== undefined) {
//     console.log(greeting + ', world!');
//   } else {
//     console.log(`Hello Word!`)
//   } 
// }
// greet('Addise'); // logs: Salutations, world!
// greet();              // should log: Hello, world!
//                                    // should log: Hello, world!
// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }
// function greet(greeting = 'Hello', greetings = 'world!') {
//   console.log(greeting + ', ' + greetings);
// }
// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }
// function greet() {
//    function greeting() {
//     return 'Good morning';
//   }
//    greeting = greeting();
//   function recipient() {
//     return 'Launch School';
//   }
//    recipient = recipient();

//   console.log(`${greeting}, ${recipient}!`);
// }

// greet();                                // logs: Hello, world!
//greet('Salutations');                   // logs: Salutations, world!
//greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(`${greeting()} , ${recipient()}!`);
// }
// greet();
//bmi = weightInKilograms / heightInMeters**2;
// function calculateBMI(heightInCentimeters, weightInKilograms) {
//   return (weightInKilograms /  (heightInCentimeters / 100) **2).toFixed(2);// }
// console.log(calculateBMI(180, 80)); //24.69
// Calculate Cat Age
//// Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:
//// 
//// The first human year corresponds to 15 cat years.
//// The second human year corresponds to 9 cat years.
//// Every subsequent human year corresponds to 4 cat years.

// function catAge(humanAg) {
//   if(humanAge === 0) {
//     return 0;
//   } else if(humanAge === 1) {
//     return 15;
//   } else if(humanAge === 2) {
//     return 24;
//   } else if(humanAge === 3) {
//       return 24 + 4;
//   } else {
//      return 28 + ((humanAge - 3) * 4);
//   }  
// }
    
// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

/*Remove Last Char
Create a function removeLastChar that takes a string as argument, 
and returns the string without the last character.*/

// function removeLastChar(string) {
//   return string.slice(0, -1);
// }

// console.log(removeLastChar('ciao haaaaaaaaaaaaaaaleluyaaaaaa!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'

// const template = 'I VERB NOUN.';

// // logs: I like birds.

// const sentence = (verb, noun) => {
//   return template
//   .replace('VERB', verb)
//   .replace('NOUN', noun);
// }

// console.log(sentence('like', 'birds'));
//****************************************** */
/* Arrow Functions (Part 2)
The function initGame below returns an object. 
Refactor it using arrow function syntax. */ 

// let initGame = () => {
//   return ({
//     level: 1,
//     score: 0
//   })
// };

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

// Retrieve a Value (Part 1)
// Write the code necessary to retrieve the value of the courses property of our student object.
// 
// Copy Code
// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };
// let hasCourses = student.courses
// console.log(hasCourses);
// //
// console.log(`${student.name}, have complited ${student.courses} courses.`);
/* Retrieve a Value (Part 2)
Given the below object jane, write code that retrieves the country in 
which Jane is located. */

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };
// jane.location.country // 'Denmark'
/*Add a Property
Below is a simple object representing our dog, Fido.
s 8 and 9, write code to add properties 'age' and
 'favorite food' to the fido object.*/

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };
// console.log(fido.age = 1) // Add property 'age'.
// console.log (fido['favorite food'] = 'NomNomNow') // Add property 'favorite food'.
// console.log(fido);
//
/* Greetings From Jane
Add a property to the below object, jane, 
so that the code on line 13 logs 'Hej, Bobby!' to the console. */
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   // add code here
//   greet: function (friend) {
//     console.log(`Hej, ${friend}!`);
//   }
// };
// jane.greet('Bobby'); // Hej, Bobby!
//
/*Is it true?
We are experimenting with some code to get more comfortable
 working with objects. Run the snippet below and explain why 
 "It's true!" is never output*/

// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };
// //console.log(obj.fun());

// for (let prop in obj) {
//   if (prop === "true") {
//     console.log("It's true!");
//   }
// }

// for (let prop in obj) {
//   console.log(`${prop} (${typeof prop})`);
// }
/* Car Keys
Write code that stores all of the vehicle property 
names in an array called keys.*/
// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// let keys = Object.keys(vehicle);
// console.log(keys);

/* Convert an object to a nested array
Convert the person object into a nested array 
nestedPerson, containing the same key-value pairs.*/
// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// // Expected output:
// // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// console.log(person);
// console.log();
// let nestedPerson = Object.entries(person);
// console.log(nestedPerson);
//
/*..and vice versa 
Write code that does the reverse, starting from a nested 
array of pairs and building an object.
*/

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// // Expected output:
// // { title: 'Duke', name: 'Nukem', age: 33 }
// Hide Solution & Discussion
// Solution
// Copy Code
// let person = {};

// for (let i = 0; i < nestedArray.length; i++) {
//   let pair = nestedArray[i];

//   person[pair[0]] = pair[1];
// }

// console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }

/* Cloning a Person
Write a function clone that takes an object as argument
and returns a shallow copy of that argument. Shallow copy 
means that it returns a new object that has the same key/value 
pairs, but that you don't need to worry about cloning the values as well. The code below demonstrates the expected behaviour.
Copy Code
 */

function clone(obj) {
    // TODO
    return Object.assign({}, obj);
  }
  
  let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
  };
  
  let clonedPerson = clone(person);
  person.age = 34;
  
  console.log(person.age);       // 34
  console.log(clonedPerson.age); // 33
  