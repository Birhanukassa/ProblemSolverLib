/*

This time no story, no theory. The examples below show you how to write function accum:

Rules
  - Explicit
    - input: string 
    - output: string 
  - Implicit
    - each input character will be separated by '-'
    - each character will be repeated based on the index there appear 
    - each substrings that made up from repeated characters 
    first char is uppercase 
DS: string, array 

# Given the string 
- construct an array that has all string chars 
- duplicate each char with their index times plus 1
- capitalize each duplicated string first char 
- separate each duplicated string with '-'


*/

function accum(str) {
  return [...str].map((char, i) => char.toUpperCase() + char.repeat(i).toLowerCase()).join('-');
}


// // Examples:
// console.log(accum("abcd"));  //->  "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // ->  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); //  "C-Ww-Aaa-Tttt"


console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")) //"N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU")); //"M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM")); //"E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC")); //"H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"