function palindrome(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {  // abcde
    let numChar = 2; 
    while (numChar <= str.length - i) {
      result.push(str.slice(i, numChar + i)); // ab
      numChar++;
    }
  }
  return result;

}

console.log(palindrome('abcde'));
