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
// let numbers = [3, 5, 7];
// let sumOfSquares = (accumulator, currentValue) => accumulator * currentValue;
// const sumOfSquares = (accumulator, currentValue) => accumulator * currentValue;
// numbers.reduce((accumulator, element) => accumulator * element, 1)
// const value = 0;
// const numbers = [5, 10, 15];
// for(let i = 0; i < numbers.length; i++) {
//   value += numbers[i];
// }
// // //
// // //
// /* this is our initial value i.e. the starting point*/
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
// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
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
// }
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
// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
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
// let randomNumber = Math.round(Math.random());
// if(randomNumber === 0) {
//     console.log('No.')
// }else {
//    console.log('Yes!');
// }
// randomNumber === 0 ?  console.log('No.') : console.log('Yes!')
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
let name = addis;
function sum(param_a, param_b) {
  if(param_b && param_a === !Number) {
      console.log("please add only numbers!");
    } else {
       console.log( param_a + param_b);
      }
}
     

