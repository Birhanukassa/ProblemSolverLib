/* eslint-disable vars-on-top */
/* eslint-disable id-length */
/* eslint-disable max-len */
// const readline = require('readline-sync');
/*
Write a function, evenOrOdd, that determines whether its argument
is an even number.If it is, the function should log 'even' to the console;
otherwise, it should log 'odd'. For now, assume that the argument is always
an integer.
Add a validation check to ensure that the argument is an integer. If it isn't,
the function should issue an error message and return.

P
- determine if the given num is even or odd
e
- 3 => odd
- 4 => even
d
- num
a
- if the given num divided by 2 results 0, its an even num.
- else its an odd num
 function evenOdd (num) {
  if (!Number.isInteger(num)) {
    return console.log('Please inter the valid num');
  } else {
    return num % 2 === 0 ? console.log('even') : console.log('odd');
  }
}
evenOdd(3);
evenOdd(4);
evenOdd(NaN);
*/
/* Refactor this statement to use an if statement instead.
return foo() ? 'bar' : qux();

if (foo()) {
  return 'bar';
} else {
  qux();
} */
/* 6. What does this code output to the console?
function isArrayEmpty(arr) {
  if (arr.length) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}
isArrayEmpty([]);
*/
/* 7. Write a function that takes a string as an argument and returns
   an all-caps version of the string when the string is longer than
   10 characters. Otherwise, it should return the original string.
   Example: change 'hello world'to 'HELLO WORLD', but don't change 'goodbye'.
   P
   - input string
   - output string in caps
     Rules
      - explicit
        - change to caps if only the given string length is longer than 10
        - if the string length is less than 10 return the original string
  e
  - 'hello world' => 'HELLO WORLD'
  - 'goodbye' => 'goodbye'
  d
  - string -> string
  a
  # Given the string
  1. - measure the string length
  2. - if the measure value is more than 10
       - return the string in all caps
  3. - else
       - return the original string value

function isCapital(str) {
  return str.length > 10 ? console.log(str.toUpperCase()) : console.log(str);
}
isCapital('hello world');
isCapital('goodbye');
*/
/*
 Write a function that logs whether a number is between 0 and 50 (inclusive),
 between 51 and 100 (inclusive), greater than 100, or less than 0.

 p
  - input number
  - output string
  -Rule
    -log the value if its under 50 or over upto 100 inclusive
e
  -1 --> 'The given number is less than 0'
  45 --> 'The given number is less between 0 and 50'
  55 --> 'The given number is between 51 and 100'
  100 --> The given number is getter than 100'
d
  - number --> string
a
# Given the number
  1. if the number is more than 100
    - log 'the given number is more than 100'
  2. if the given number is between 51 - 100
    - log 'the given number is between 51 - 100'
  3. if the given number is between 0 and 50
   - log 'the given number is between 0 and 50'


const numberRange = (num) => {
  if (num > 100) {
    console.log(`${num} is greater than 100`);
  } else if (num > 51 && num < 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num >= 0 && num < 51) {
    console.log(`${num} is between 0 and 50`);
  } else {
    console.log(`${num} is less than 0`);
  }
};

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25); */
/*
function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();
function double(number) {
  console.log(number);
  if (number > 50) return number;
  return double(number * 2);
}

console.log(double(5));

function fibonacci(num) {
  console.log(num);
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(20));
let age = readline.question('How old are you ? ');
age = parseInt(age, 10);
console.log(`You are ${age} years old`);


for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}

How old are you? 22
You are 22 years old.
In 10 years, you will be 32 years old.
In 20 years, you will be 42 years old.
In 30 years, you will be 52 years old.
In 40 years, you will be 62 years old.

function factorial(num) {
  let result = 1;
  for (let counter = num; 1 <= counter; counter--) {
    result *= counter;
  }
  return result;
}
console.log(factorial(7));

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * ((max - min + 1) + min));
}

let tries = 0;
let result;
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

/*
 Reimplement the factorial function from exercise 2 using recursion. Once again,
 you may assume that the argument is always a positive integer.
 P
 - Given the number; get the factorial of that number using recursion
 - input -> number
 - output -> number
 E
  1 -> 1
  2 -> 2
  3 -> 6
  5 -> 120
 D
 - input number
 - output number
 A
 # Given the number
 1. copy the given number with another variable to compute each other f
 2. return the base value if the result equal or less than 2
 3. return the given number minus 1 times the copied variable

 const factorial = (num) => {
  let count = num;
  c++;
  if (num < 2) return num;
  return factorial(num - 1) * count;
};

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
*/
// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log('Outer loops: ' + x + '<---');
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log('Inner loops: ' + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

//let i = 0;
// let j = 10;
// while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj:
//   while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if ((j % 2) === 0) {
//       continue checkj;
//     }
//     console.log(j + ' is odd.');
//   }
//   console.log('i = ' + i);
//   console.log('j = ' + j);
// }

// const arr = [3, 5, 7];
// arr.foo = 'hello';

// console.log(arr);
// for (let i in arr) {
//   console.log(i); // logs "0", "1", "2", "foo"
// }

// for (let i of arr) {
//   console.log(i); // logs 3, 5, 7
// }
// let strings = ['a', 'b', 'c', 'd'];
// let str = strings.reduce((accumulator, element) => {
//   return accumulator + element.toUpperCase();
// }, '');

//console.log(str);
//'ABCD'

// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// myArray.forEach(odd => {
//   if (odd % 2 === 1) console.log(odd);
// });

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach(idx => idx.forEach(even => {
//   if (even % 2 === 0) console.log(even);
// }));

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let evenOrOdd = myArray.map(num => {
//   return num % 2 === 0 ? 'Even' : 'Odd';
// });

// console.log(evenOrOdd);

// const findIntegers = numbers => numbers.filter(num => Number.isInteger(num));

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
/**Use map and filter to first determine the lengths of all the elements
 in an array of string values, then discard the even values (keep the odd values).


function oddLengths(param) {
  let length = param.map(string => string.length);
  return length.filter(even => even % 2 === 1);

}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
 */

/* 7. Use reduce to compute the sum of the squares of all of the numbers in an array:
function sumOfSquares(nums) {
  return nums.reduce((acc, num) => {
    return acc + (num * num);
  }, 0);
}
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
*/

/**
 * Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter.
 * Instead, try to use the reduce method.
function oddLengths(array) {
  return array.reduce((acc, str) => {
    let length = str.length;
    if (length % 2 === 1) acc.push(length);
    return acc;
  },[]);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3] */
/* Write some code to replace the value 6 in the following array with 606:

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

console.log(arr); */
//          **Objects**        \\
/*
let person = {
  munsters: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy'],
};

let key = 'munsters';
console.log(person[key]); // no need a cots on the 'key'

console.log('-----------------------------');

person.height = '5 fit';
person['gender'] = 'female';
console.log(person);

console.log('-----------------------------');

delete person.age;
delete person['gender'];
delete person['hobbies'];

console.log(person); */
// const MyObj = { foo: 'bar', qux: 'xyz'};
// console.log(MyObj);
// console.log('-----------------------------');
// MyObj.qux = 'hey there';
// MyObj.pi = 3.1415;
// console.log(MyObj);
// console.log('-----------------------------');
// let newObj = {};
// console.log(newObj);
// newObj = MyObj;
// console.log('-----------------------------');
// console.log(newObj);
// MyObj = newObj;
// console.log('-----------------------------');
// console.log(newObj);

// const MyObj = Object.freeze({foo: 'bar', qux: 'xyz'});
// MyObj.qux = 'hey there';
// console.log(MyObj); // { foo: 'bar', qux: 'xyz' }

// let bob = { munsters: 'Bob', age: 22};
// console.log(bob);
// console.log('--------------------------------');
// let student = Object.create(bob);
// console.log(student);
// console.log('--------------------------------');
// console.log(student.munsters);
/*let person = {
  munsters: 'Bob',
  age: 30,
  height: '6 ft',
};

for (let prop in person) {
  //console.log(person[prop]);
}

let obj1 = {a: 1, b: 2};
let obj2 = Object.create(obj1);
console.log(obj1);

console.log('------------------');
obj2.c = 3;
obj2.d = 4;
console.log(obj2);

console.log('------------------');
for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
} let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let objKeys = Object.keys(obj);
let arr = objKeys.map(key => key.toUpperCase());
console.log(arr);*/
/*Create a function that creates and returns a copy of an object. The function
  should take two arguments: the object to copy and an array of the keys that
  you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function.
If you do omit the argument, the function should copy all of the existing keys from the
object.

Here are some examples for your reference:

Copy Code
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);

//**PEDAC
P
- input -> object and array
- output - object
rules:
   - the given object should not be mutated
   - the function should have 2 arguments
   - if the second argument omitted; copy and return all key-values from give object
E/D/A
# Given the object and array od keys
1. check if the elements of given array match the given object key
2. creat empty object
3. if you got match key; take the identical object key and push it to number 2
4. if there is no match; cope all the given object to number 2
5. return number 2

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


function copyObj(obj, arr = 0) {
  let newObj = {};
  if (arr.length > 0) {
    arr.forEach(ele => {
      if (obj[ele]) newObj[ele] = obj[ele];
    });
  } else {
    // let objKeys = Object.keys(obj);
    // objKeys.forEach(key => {
    //   newObj[key] = obj[key];
    // });
    Object.assign(newObj, obj);
  }
  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

function showProps(obj, objName) {
  var result = ``;
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

console.log(showProps(myCar, 'myCar')); function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}

Car.prototype.color = null;

function displayCar() {
  let result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  return result;
}

let myCar = new Car('VW', 'polo', 2007);
myCar.color = 'Blue';
myCar.owner = 'Mine';
console.log(myCar);

let herCar = new Car('Chevy', 'cruz', 2014);
herCar.color = 'Black';
herCar.owner = 'Her';
console.log(herCar.color);

console.log('-----------------------');
console.log(myCar);
console.log(herCar);*/

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);

// console.log(foo.a);
// console.log(qux);

// let list1 = [1, 6, 3, 2];
// let list2 = [-1, -6, -3, -2];
// let list3 = [2, 2];

// function largestNum(arr) {
//   let res = arr[0];
//   arr.forEach(ele => {
//     if (ele > res) res = ele;
//   });
//   return res;
// }


// console.log(largestNum(list1));
// console.log(largestNum(list2));
// console.log(largestNum(list3));

/**Write a function that searches an array of strings for every element
 * that matches the regular expression given by its argument. The function
 * should return all matching elements in an array.
P
- search every element in given array that matches the given regex
Rules:
- (words, /lab/) => ['laboratory', 'flab', 'elaborate']
E
- (words, /lab/) // => ['laboratory', 'flab', 'elaborate']
D
- input - arr, regex
- array
A
# Given the array
-1 declare empty array variable
-2 loop the array and cesses each elements
-3 if each element has regex char; push that element to num 1
-4 return num 1
function allMatches(message, regex) {
  return message.filter(ele => ele.match(regex));
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /p/)); // => ['laboratory', 'flab', 'elaborate']
*/

/* 8. Without using either of those methods, write a function named isNotANumber
that returns true if the value passed to it as an argument is NaN, false if it is not.
P
- make a function that return true if the given value is NaN
E
- NaN -> true
D/A
# Given the value
if the given value is not an object and its value strictly equal to there identical value return false
function isNotANumber(value) {
  // return value !== value;
  if (typeof value === 'number') {
    if (!(value !== value)) return true;
  }
  return false;
}

console.log(isNotANumber({1: 'a'}));
console.log(isNotANumber(1));
console.log(isNotANumber('a'));
console.log(isNotANumber(undefined));
console.log(isNotANumber(Infinity));
console.log(isNotANumber(NaN));
*/

/* There are other ways to detect a -0 value. Without using Object.is,
   write a function that will return true if the argument is -0, and false
   if it is 0 or any other number.

   P
   - return true if the given number is 0 or false if its '- 0'

   - input number --> bool

   E/D input - number
       output - bool
  A
  - if the given number divided 1 results negative infinity return true else false
   */

// function isNegativeZero(num) {
//   return 1 / num === -Infinity;
// }
// console.log(isNegativeZero(0));
// console.log(isNegativeZero(-0));

/**
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let onlyVegetables = {};
//let productKeys = Object.keys(produce);
let productKeyValues = Object.entries(produce);

// productKeys.forEach(key => {
//   if (produce[key] === 'Vegetable') onlyVegetables[key] = produce[key];
// });
//console.log(onlyVegetables);

productKeyValues.forEach(keyValue => {
  let [key, value] = keyValue;
  if (value === 'Vegetable') onlyVegetables[key] = value;
}) */
//console.log(onlyVegetables);

// debug.js

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   debugger;
//   counter += 1;
// }


// let product = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };


// function selectFruit(obj) {
//   let keys = Object.keys(obj);
//   let counter = 0;
//   let fruits = {};
//   while (counter < keys.length) {
//     let currentCounter = keys[counter];
//     if (obj[currentCounter] === 'Fruit') {
//       let product = obj[currentCounter];
//       console.log(product);
//       fruits[currentCounter] = product;
//     }
//     counter++;
//   }
//   return fruits;
// }


// console.log(selectFruit(product)); // => { apple: 'Fruit', pear: 'Fruit' }

// function doubleOddIndices(nums) {
//   let counter = 0;
//   let doubleElementOfOddIdx = [];
//   while (counter < nums.length) {
//     let currentEle = nums[counter];
//     let idx = nums.indexOf(currentEle);
//     if (idx % 2 === 1) {
//       doubleElementOfOddIdx.push(idx * 2);
//     } else {
//       doubleElementOfOddIdx.push(idx);
//     }
//     counter++;
//   }
//   return doubleElementOfOddIdx;
// }


// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddIndices(myNumbers));

/**function selectType(obj, item) {
  const keys = Object.keys(obj);
  let selectedItems = {};
  let counter = 0;

  while (counter < keys.length) {
    let currentKey = keys[counter];
    let currentValue = obj[currentKey];

    if (currentValue === item) {
      selectedItems[currentKey] = currentValue;
    }
    counter++;
  }
  return console.log(selectedItems);
}


produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectType(produce, 'Fruit');     // => {apple: 'Fruit', pear: 'Fruit'}
selectType(produce, 'Vegetable'); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
selectType(produce, 'Meat');      // => {}

function multiply(arr, num) {
  let multiplied = [];
  for (let item = 0; item < arr.length; item++) {
    let currentItem = arr[item];
    multiplied.push(currentItem * num);
  }
  return console.log(multiplied);
}
let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 10); // => [3, 12, 9, 21, 6, 18]

let arr = [2, 11, 9, 4, 107, 21, 1]; // sorted result: [ 1, 2, 4, 9, 11, 21, 107 ]
console.log(arr);

// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

//console.log(arr);
// console.log(arr.sort());
arr.sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

console.log(arr);
// How would you sort the following array by the lengths of each element?

let words = ['go', 'ahead', 'and', 'jump'];
console.log(words);
/*
 * Given the unsorted array
 - call sort method with a - b argument with a.length - b.length
words.sort((a, b)  =>  (a.length - b.length));
console.log(words);*/

/*scores is an array of subarrays that each contain three elements.
Suppose this is an array that represents the scores for three players
in a game of three rounds. We want to sort the players in ascending order
of their total score. In effect, we want to get the following return value:
// Let's give it a shot:
**PEDAC
P
- sum each obj array and adjust the upper dimension array elements based on the result of the sum of the obj arrays
input - array
output - array
Rules :
- the return value should be the input array within order of the sum of obj array elements
- E?D?A
# Given the 2 dimensional array
1 - loop the array and access each obj array
2 - loop the obj array & sum all the elements and save it
3 - sort the array elements based on the sum of obj arrays value
4 - return the sorted array
*/

//console.log(result);
/**function sortArr(arr) {
  let result = arr.sort((a, b) => {
    let sumOfA = a.reduce((acc, ele) => acc + ele);
    let sumOfB = b.reduce((acc, ele) => acc + ele);
    return sumOfA - sumOfB;
  });
  return result;
}

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];
//console.log(sortArr(scores));


[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

let result = [[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
}); */

/**function repeat (n, action) {
  for (let i = 1; i <= n; i++) {
    action(i);
  }
}

// repeat(13, console.log); */
/**let res = [];
repeat(4, i => {
  res.push(`This is a higher order function ${i}`);
});

//console.log(res);
//repeat(10, console.log);


function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(2));

function noisy(f) {
  return (...args) => {
    // console.log("calling with", args);
    let result = f(...args);
    // console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(10);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

let script = {
  munsters: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
};

script.ranges.reduce((count, [from, to]) => {
  return count + (to - from);
}, 0);

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe.charCodeAt(0));

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let munsters = groupName(item);
    let known = counts.findIndex(c => c.munsters == munsters);
    if (known == -1) {
      counts.push({munsters, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{munsters: false, count: 2}, {munsters: true, count: 3}]
 */
/*function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i]));
  }
  return newArray;
}

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

const lenArray = mapForEach(strArray, function(item) {
  return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
// console.log(lenArray); */


/**Exercises

Flattening

Use the reduce method in combination with the concat method to
“flatten” an array of arrays into a single array that has all
the elements of the original arrays.

PEDAC
P
- input -> two dimensional array
- output -> one dimensional array
Rules:
 - the solution must use reduce and concat builtin method
 - the return value must be 1 dimensional array

E
-input -> [[1],[2],[3]]
-output -> [1, 2, 3]
D
- Array
A
# Given the array
- call the reduce method on the given array
  - concat the obj array to the acc
  - return the accumulated array  /

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

function flatteningArray(arr) {
  return arr.reduce((acc, obj) => obj.concat(acc),[]);
}
*

// console.log(flatteningArray(arrays));

/*
*Your own loop

Write a higher-order function loop that provides something like a for
loop statement. It takes a value, a test function, an update function,
and a body function. Each iteration, it first runs the test function on
the current loop value and stops if that returns false. Then it calls
the body function, giving it the current value. Finally, it calls the
update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
 PEDAC
 P
 - make a custom for loop
 - 3 inputs
   1. a value
   2. a test function
   3. update function
// Your code here.

function loop(num, test, update, print) {
  if (test(num)) {
    num = update(num);
    print(num);
  } else {
    return num;
  }
  return loop(num, test, update, print);
}

loop(10, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
 */

/*
*Practice Problem 1
How would you order the following array of number strings
by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];
console.log(arr.sort((a, b) => Number(b) - Number(a)));
*/

/*
*Practice Problem 2
How would you order the following array of objects based on
the year of publication of each book, from the earliest to the latest?


let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let result = books.sort((a, b) => Number(a.published) - Number(b.published));

console.log(result);
*/

/*
* Practice Problem 3
For each of these collection objects, demonstrate how you would access the letter g.


let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [
  {
    first: [ 'a', 'b', 'c'], second: ['d', 'e', 'f'] },
  { third: ['g', 'h', 'i']
  }
];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

console.log(arr1[2][1][3]);
console.log(arr2[1].third[0]);
console.log(arr3[2].third[0][0]);
console.log(obj1['b'][1]);
console.log(Object.keys(obj2.third)[0]);*/

/*
*Practice Problem 4
For each of these collection objects, demonstrate how you would
change the value 3 to 4.

let arr1 = [1, [2, 3], 4];
let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
let obj1 = { first: [1, 2, [3]] };
let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };


arr1[1][1] = 4;
arr2[2] = 4;
obj1.first[2][0] = 4;
obj2['a']['a'][2] = 4;

console.log(arr1);
console.log(arr2);
console.log(obj1);
console.log(obj2);*/

/*
*Practice Problem 5
Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//Compute and display the total age of the male members of the family.

let total = 0;
Object.keys(munsters).forEach(name => {
  if (munsters[name]['gender'] === 'male') {
    total += munsters[name]['age'];
    console.log(munsters[name]['gender']); //total += name['age'];
  }

});

console.log(total);
*/

/*
*Practice Problem 6
One of the most frequently used real-world string operations
is that of "string substitution," where we take a hard-coded
string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age,
and gender of each family member:


let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:
//(Name) is a (age)-year-old (male or female).

for (let name in munsters) {
  //console.log(`${name} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}`);
}

Object.entries(munsters).forEach(names => {
  let name = names[0];
  let age = names[1]['age'];
  let gender = names[1]['gender'];
  console.log(`${name} is ${age}-year-old ${gender}`);
}); */

/*
* Practice Problem 7
Given the following code, what will the final values
of a and b be? Try to answer without running the code

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2; // 4
arr[1][0] -= a; // 3.*/

/*
*Practice Problem 8
Using the forEach method, write some code to output all vowels
from the strings in the arrays. Don't use a for or while loop.

PEDAC
P- log all voices in the given object
input - object
output - string
Rules:
 - use for each method
E?D - input -> object
    - output -> string
A # Given the object
1 declare a variable and assign to be multi dimensional array
2 loop number 1 with for each method to obj array of the element
3 loop the obj array with for each to get the obj array each element
4 check if any of the char is a vowel; if it is log it to the console


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// Object.entries(obj).forEach(subArr => {
//   subArr[1].join('').split('').forEach(ele => {
//     if ('aeiou'.includes(ele)) console.log(ele);
//   });
 */

/*
*Practice Problem 9
Given the following data structure, return a new array with the same structure,
but with the values in each subarray ordered -- alphabetically or numerically
as appropriate -- in ascending order
PEDAC
P
- return the given array elements with ascending order
  Rules: it has to be sorted ascending order
  (alphabetically or numerically)
E?D input -> array
    output -> sorted array
A
# Given the multi dimensional array
1 loop the outer array
2 loop the inner array & sort the item ascending order


let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(obj => obj.slice().sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }

}));

let sortedArr = arr.map(obj => {
  if (obj[0] === 'string') {
    return  obj.slice().sort();
  } else {
    return obj.slice().sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) return -1;
    });
  }
});
console.log(arr);
console.log(sortedArr);*/

/*
* Practice Problem 10
Perform the same transformation of sorting the subarrays
we did in the previous exercise with one difference;
sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sorted = arr.map(obj => {
  return obj.slice().sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    }
  });
});

console.log(arr);
console.log(sorted);*/

/*
* Practice Problem 11
Given the following data structure, use the map method to return
a new array identical in structure to the original but, with each
number incremented by 1. Do not modify the original data structure
P
- whit out modifying the original array, increment the number elements by 1
Rule:
- don't mutate the original array
E?D input -> array
    output -> array
A
1 declare a variable and assign it to empty array
2 loop the given array and access object elements
3 access the object values
4 increment each value by 1
5 push it to number 1


let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let sortedArray = [];
//console.log(sortedArray);

arr.slice().forEach(obj => {
  Object.keys(obj).forEach(key => {
    obj[key] += 1;
  });
  sortedArray.push(obj);
});

console.log(sortedArray);
// [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }]

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let result = arr.map(obj => {
  let newObj = {};
  Object.keys(obj).forEach(key => {
    newObj[key] = obj[key] + 1;
  });
  return newObj;
});

console.log(result);

console.log(arr);
*/

/*
*Practice Problem 12
Given the following data structure, use a combination of methods,
including filter, to return a new array identical in structure to the original,
but containing only the numbers that are multiples of 3.


let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let result = arr.map((sub) => {
  return sub.filter(num => num % 3 === 0);
});

console.log(result);
// => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]
 */

/*
*Practice Problem 13
Given the following data structure, sort the array so that the sub-arrays are ordered
based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let result = arr.sort((a, b) => {
  let oddA = a.filter(num => num % 2 === 1).reduce((acc, num) => acc + num);
  let oddB = b.filter(num => num % 2 === 1).reduce((acc, num) => acc + num);
  return  oddA - oddB;
});

console.log(result);*/

/*
* Practice Problem 14
Given the following data structure write some code to return an array containing
the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase,
and the colors should be capitalized.
]/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// The return value should look like this:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//console.log(Object.entries(obj));

let capitalized = txt => txt.charAt(0).toUpperCase() + txt.slice(1);

let res = Object.values(obj).map(plant => {
  if (plant.type === 'fruit') {
    let color = plant.colors;
    return color.map(item => capitalized(item));
  } else if (plant.type === 'vegetable') {
    let capitalSize = plant.size;
    return capitalSize.toUpperCase();
  }
  return false;
});

console.log(res);

console.log(Object.values(obj));// keep it up with it !
console.log(Object.entries(obj));// bad idea
console.log(obj);*/

/*
*Practice Problem 15
Given the following data structure, write some code to return an array
which contains only the objects where all the numbers are even.
PEDAC
P
- input -> array
          - elements are objects
- output -> array

Rules: the return value must be array
       the return value of elements are even numbers
E?D?A
# Given the array

1 declare empty array
2 iterate the given array to access the element of objects in the array
2 get the value of the current element
3 iterate the value to find even number
  - if find even number push it to number 1
4 return number 1
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


let res = arr.filter(obj => {
  return Object.values(obj).every(value => {
    return value.every(num => num % 2 === 0);
  });
});

//console.log(res);
// console.log();
// console.log(arr);
function wrapValue(n) {
  let local = n;
  return () => local;
}
//console.log(wrapValue(1));

let wrap1 = wrapValue(1);
//console.log(wrap1());

let wrap10 = wrapValue(10);
//console.log(wrap10());

function multiplier(factor) {
  return number => number * factor;
}

//console.log(multiplier());

let tenTimes  = multiplier(10);

//console.log(tenTimes(10));

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

//console.log(power(2, 3));


function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

//console.log(findSolution(13));
// → (((1 * 3) + 5) * 3)

function recursion(n, txt = 1) {
  if (n === 1) return txt;
  //console.log(n, txt);
  return recursion(n - 1, `(${txt} + 1)`);
}

//console.log(recursion(5));

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
//printFarmInventory(7, 11);

function min(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else if (num1 < num2) {
    return num1;
  } else {
    return num1;
  }
}

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10
// console.log(min(10, 10));

/*
*Recursion
We’ve seen that % (the remainder operator) can be used to
test whether a number is even or odd by using % 2 to see
whether it’s divisible by two. Here’s another way to define
whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.


Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

function isEven(num) {
  if (num === 0 || (num < 0 && num == -0)) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??
*/
// Your code here.

function countChar(str, letter) {
  let ac = 1;
  // str.split('').reduce((ac, char) => {
  //   if (char === char.toUpperCase()) {
  //     ac += 1;
  // });
  return str.split('').reduce((acc, char) => {
    let result = char === letter ? acc += 1 : acc += 0;
    return result;
  },0);
}

//console.log(countBs("BBC"));
// → 2
// console.log(countChar("kakkerlak", "k"));
// → 4
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
  "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
  "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
  "beer"], true);

//console.log(journal);

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

//console.log(tableFor("pizza", journal));
// → [76, 9, 4, 1]
// for (let entry of 'string') {
//   console.log( entry);
// }

/*
 P
 * - the function has to have 2 arguments
 * - the return value is an array of the range of the 2 arguments
 * - the array range is inclusive
 E
  range(1, 10) → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 D
 input number/s
 output array
 A
 # Given the numbers
 1 declare a variable and assign it to empty array
 2 iterate from first argument to the second
 3 push to number 1 the current num of iteration value
 4 return number 1
 */

function range(first, second, step = 1) {
  let list = [];
  if (first < second) {
    while (first <= second) {
      list.push(first);
      first += step;
    }
    return list;
  } else if (first > second) {
    if (step === 1) step = -1;
    while (first >= second) {
      list.push(first);
      first += step;
    }
    return list;
  }
  return null;
}

function sum(arr) {
  //return arr.reduce((acc, num) => acc + num);
  let sum = 0;
  let count = 0;
  while (count < arr.length) {
    sum += arr[count];
    count++;
  }
  return sum;
}
// console.log(range(1, 10));
// console.log(range(1, 10, 2));
// console.log(sum(range(1, 10)));
// console.log(range(10, 2, -2));


// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the reverse method does: it modifies the array given
// as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter,
// which variant do you expect to be useful in more situations? Which one runs faster?


// function reverseArray(array) {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//     res.unshift(array[i]);
//   }
//   return res;
// }

function reverseArrayInPlace(array) {
  let half = Math.floor(array.length / 2);

  for (let i = 0; i <= half; i++) {
    let front = array[i];
    let back = array.length - 1 - i;
    array[i] = array[back];
    array[back] = front;
  }
  return array;
}

//console.log(reverseArray(["A", "B", "C"]));
//→ ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
//console.log(arrayValue);

// for (let i = 0; i < arrayValue.length; i++) {
//   let back = arrayValue[arrayValue.length - 1 - i];
//   console.log(back);
// }


/*
* A list
*https://eloquentjavascript.net/04_data.html

Objects, as generic blobs of values, can be used to build all sorts of data structures.
A common data structure is the list (not to be confused with array). A list is a nested
set of objects, with the first object holding a reference to the second, the second to
the third, and so on.
*/
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

/*
A nice thing about lists is that they can share parts of their structure. For example,
if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with
list referring to the binding defined earlier), they are both independent lists, but
they share the structure that makes up their last three elements. The original list is
also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when
given [1, 2, 3] as argument. Also write a listToArray function that produces an array
from a list. Then add a helper function prepend, which takes an element and a list and
creates a new list that adds the element to the front of the input list, and nth, which \
takes a list and a number and returns the element at the given position in the list
(with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

PEDAC
P
- with a given array; change the array to list
- Rules: all object in list should linked one another
E
- [10, 20] → {value: 10, rest: {value: 20, rest: null}}
D
- input array
- output list
A
#  Given the array input
1. declare a variable & assign it with empty object
2. iterate the given array
3. creat an object & give 'value' keyword and pass the current element as a value
4. go to the next element of the given array and creat a new object & assign it as a
   value of the 2 num object with 'value' property name
5. ones the loop finishes; push the created nested object to num 1
6 return the number 1
*/


// Your code here.

// function arrayToList(array) {
//   let list = null;
//   for (let ele = array.length - 1; ele >= 0; ele--) {
//     list = {value: array[ele], rest: list};

//   }

//   return list;
// }

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

//console.log(arrayToList([10, 20, 30, 40, 50, 60]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 2


/*
*Practice Problem 16
Given the following data structure, write some code that returns an object where
the key is the first item in each subarray, and the value is the second.

PEDAC
**A**
# Given the array
1 create empty object
2 loop the array & access the current sub array
3 assign the first ele on sub array to the object property name & the
  second element  to the property value
4 return number 1
*/

let Arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

Arr.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];
  obj[key] = value;
});

//console.log(obj);
//console.log(Object.fromEntries(Arr));
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

/*
*Practice Problem 17

A UUID is a type of identifier often used to uniquely identify items,
even when some of those items were created on a different server or by a
different application. That is, without any synchronization, two or more
computer systems can create new items and label them with a UUID with
no significant risk of stepping on each other's toes. It accomplishes
this feat through massive randomization. The number of possible UUID values
is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict
is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f)
represented as a string.
- The value is typically broken into 5 sections in an 8-4-4-4-12
- pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.*

**A**
- creat an object that has hexadecimal values
-
*/

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return console.log(uuid);
}

// generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
// generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
// generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'


function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
remove(["a", "b", "c", "d", "e"], 2);
// → ["a", "b", "d", "e"]


var serial_maker = function ( ) {
  // Produce an object that produces unique strings. A
  // unique string is made up of two parts: a prefix
  // and a sequence number. The object comes with
  // methods for setting the prefix and sequence

  // number, and a gensym method that produces unique
  // strings.

  var prefix = '';
  var seq = 0;
  return {
    set_prefix: function (p) {
      prefix = String(p);
    },
    set_seq: function (s) {
      seq = s;
    },
    gensym: function ( ) {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  };
};

var seqer = serial_maker( );
seqer.set_prefix = ('Q');
seqer.set_seq = (1000);
var unique = seqer.gensym( ); // unique is "Q1000"

/************************************/

var fibonacci = function () {
  var memo = [0, 1];

  return function fib(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };

}();

console.log(fibonacci(10)); // 55

/************************************/

let memoizer = function (memo, fundamental) {
  return function shell(n) {
    let result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
};


let fibonacci1 = memoizer([0, 1], function(shell, n)  {
  return  shell(n - 1) + shell(n - 2);
});

console.log(fibonacci1(10)); // 55

let factorial = memoizer([1, 1], function(shell, n) {
  return n * shell(n - 1);
});

console.log(factorial(10)); // 3628800

