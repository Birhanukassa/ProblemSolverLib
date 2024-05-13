/*
5 kyu
Primes in numbers

Given a positive number n > 1 find the prime factor decomposition of n.
The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.
*/
function primeFactors(n) {
  let res = [];

  for (let i = 2; i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      n /= i;
      count++;
    }
    if (count === 1) {
      res.push('(' + i + ')');
    } else if (count > 1) {
      res.push('(' + i, '**', count + ')');
    }
  }
  return res.join('');
}

console.log(primeFactors(86240));
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

