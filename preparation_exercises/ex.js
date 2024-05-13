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

function first() {
    return "foo "
  }
  
function second() {
    return first() + "bar ";
  }
  
function third() {
    return first() + second() + "qux";
  }
  
third(); // => 'foo foo bar qux'