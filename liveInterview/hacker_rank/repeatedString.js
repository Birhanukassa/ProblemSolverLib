function repeatedString(s, n) {
  let repeat = n / s.length;
  let remain = n % s.length;
  let a_s = 0;
  for (let i = 0; i < s.length; i++) if (s[i] === 'a')  a_s++;
  let total = a_s * Math.floor(repeat) + s.slice(0, remain).split('').filter(char => char === 'a').length;
  return total;
}

//repeatedString('aba', 10);
// aba * 10  -->  7as
//
console.log(repeatedString('bab', 725261545450)); //241753848483
console.log(repeatedString('abcac', 10));
console.log(repeatedString('a', 1000000000000));

