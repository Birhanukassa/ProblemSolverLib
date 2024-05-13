// implementation of recursion with memoization
// using fibonacci sequence

let count = 0;

function fibonacci(num, memo = {}) {
  if (num <= 1) return num;
  if (memo[num]) return memo[num];
  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  count++;
  return memo[num];
}

console.log(fibonacci(20));
console.log(count);

// demonstration of how the memo[num]
// saves the result of two function invocations
// let obj = {};
// console.log(obj);
// let num = 0;

// obj[num] = 10 + 20 + 30;
// console.log(obj);