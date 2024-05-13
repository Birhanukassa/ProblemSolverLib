/*
PEDAC
P?E?D - input - string
      - output - string
A - Given the string, use split method to distinctly separated values
  - separate the districted values to each char
  - convert each char to the number and add to the available next value
  -
*/
function orderWeight(string) {
  let res = [];
  let arrStr = string.split(' ');
  let sum = 0;
  for (let weight = 0; weight < arrStr.length; weight++) {
    let eachWight = arrStr[weight];
    for (let num = 0; num < eachWight.length; num++) {
      sum +=  Number(eachWight[num]);
    }
    res.push([eachWight, sum]);
    //res.push(sum);
    sum = 0;
  }
  console.log(arrStr);
  return res;
}

let str = "56 65 74 100 99 68 86 180 90";
let result = orderWeight(str);
console.log(result);
//console.log('sorted', result.sort((a, b) => a - b));

// !!to be continue ...

