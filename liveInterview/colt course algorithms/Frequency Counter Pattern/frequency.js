
function sameFrequency(num1, num2){
  let strNum1 = String(num1);
  let strNum2 = String(num2);

  let fNum1 = {}, fNum2 = {};

  if (strNum1.length !== strNum2.length) return false;
  
  for(let char of strNum1) fNum1[char] = (fNum1[char] || 0) + 1;
  for(let char of strNum2) fNum2[char] = (fNum2[char] || 0) + 1;

  // for (let i = 0; i < strNum1.length; i++) {
  //   let currentChar = strNum1[i];
  //   let currentFNum1Key = fNum1[currentChar];
  //   let currentFNum2Key = fNum2[currentChar];

  //   if (currentFNum1Key in fNum2) {
  //      fNum2[currentFNum1Key]--;
  //      if (fNum2[currentFNum1Key] === 0) {
  //       delete fNum2[currentFNum1Key];
  //      }
  //     }
    
  //     if (currentFNum2Key in fNum1) {
  //       fNum1[currentFNum2Key]--;
  //       if (fNum1[currentFNum2Key] === 0) {
  //        delete fNum1[currentFNum2Key];
  //       }
  //     } else {
  //        return false;
  //      }
  //  }

 return true;
}
  
 console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false