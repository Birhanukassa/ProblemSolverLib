// factorial = n * (n - 1)

// iterative factorial
// function iterativeFuc (n) {
//     let count = 1;
//     let product = 1;
//     while (n > 0) {
//         product *= n;
//         n--;
//         count++;
//     }
//     console.log(count);
//     return product;
// }

//console.log('iterativeFuc >', iterativeFuc( 3));

// recursive factorial
// function recursiveFuc(n) {
//   if (n === 1) return n;
//   return n * recursiveFuc(n - 1);
// }

//console.log('recursiveFuc >', recursiveFuc( 3));

// fibonacci = (fibonacci - 1) + (fibonacci - 2)

//iterative fibonacci
function iterativeFib(n) {
  let before = 0, next = 1, sum = 1;

  for (let i = 0; i < n; i++) {
    console.log(next);
    sum = before + next;
    before = next;
    next = sum;
  }  
  return sum ;
}
console.log(`iterativeFib >`, iterativeFib(10));

// let count = 0;
// function recursiveFibonacci(n) {
//   let res = null;
//   count++;
//   if (n < 2) return n;
//   res = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
//  return res;
// }
// console.log(recursiveFibonacci(10));
// console.log(count);

// var fibonacci_series = function (n) {
//   if (n === 1)  return [0, 1]; 
//   let s = fibonacci_series(n - 1);
//   s.push(s[s.length - 1] + s[s.length - 2]);
//   return s;
// };
// console.log(fibonacci_series(8));
//console.log();
// let count2 = 0;
// function fibonacci (n, memo = [0, 1, 1]) {
//   count2++;
//    if (memo[n]) {
//      return memo[n];
//    }else { 
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   }
//   return memo[n]; 
// }
//console.log(fibonacci(50));
//console.log(count2);