

// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1





function solution(string, pattern) {
  let allSubStr = [];

  for (let outIdx = 0; outIdx < string.length; outIdx++) {
    for (let innerIdx = 0; innerIdx < string.length; innerIdx++) {
      allSubStr.push(string.slice(outIdx, innerIdx + 1))
    }
  }
   console.log(allSubStr);
  let count = allSubStr.filter(subStr => subStr === pattern);
  return count.length;
}






console.log(solution('abcdeb','b')) // 2
console.log(solution('abc','b'))    // 1
console.log(solution('abbc','bb'))  // 1



