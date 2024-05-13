/* eslint-disable max-len */
/*
TODO: complete solution
4 kyu
Range Extraction

A format for expressing an ordered list of integers is to use a comma
separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the
end integer in the range by a dash, '-'. The range includes all integers in
the interval including both endpoints. It is not considered a range unless
it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order
and returns a correctly formatted string += e range format.
*/
function solution(list) {
  let string = '';
  for (let idx = 0; idx < list.length; idx++) {
    if (idx === 0) string += list[idx];

    if (idx > 0) {
      let pre = list[idx - 1];
      let current = list[idx];
      let after = list[idx + 1];
      let before = list[idx - 2];
      if ((pre === current - 1) && (current + 1 === after)) {
        continue;
      } else if ((before === current - 2) && (pre === current - 1) && (current + 1 !== after)) {
        string += '-' + current;
      } else {
        string += ',' +  current;
      }
    }
  }
  return console.log(string);
}
//Example:
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
console.log("-6,-3-1,3-5,7-11,14,15,17-20");
//returns "0,1-3-5,7-11,14,15,17-20"

