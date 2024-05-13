/*

# Diamond Shaped Array // Edabit

Create array function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the lists will be the same as the length of the lists.

### Examples

```
diamond_arrays(1) ➞ [[1]]

diamond_arrays(2) ➞ [[1], [2, 2], [1]]

diamond_arrays(5) ➞ 
[[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
```

Rules
  - explicit
    - input: number
    - output: multidimentional array 
    
DS: array 

# Given the number 
- declare array variable called mdArray and initialize it with empty array 
  - loop from 0 index to the number 
    - construct an array that has the current 
      index size and the current index element 
    - push constructed array to mdArray 
- return mdArray



*/

function diamondArrays(x) {
	let mdArray = [];

  for (let i = 1; i <= x; i++) {
    let currSubArr = Array(i).fill(i);
    mdArray.push(currSubArr);
  }
  
  
  return mdArray.concat(mdArray.slice(0, -1).reverse());
}

// const diamondArrays = n => [...Array(n)].map((_,i) => Array(i+1).fill(i+1))















// function diamondArrays(num, d = 1, array = [], h = true) {
 
//   if (d == 0) return array;
	
//   let temp = [...(d + '').repeat(d)]//.map(Number)
 
// 	array.push(temp)
	
//   if (d == num)  h = false 
	
//   return h ? diamondArrays(num, d + 1, array, h) : diamondArrays(num, d - 1, array, h)
// }












console.log(diamondArrays(1));  // [[1]]
console.log(diamondArrays(2));  // [[1], [2, 2], [1]]
console.log(diamondArrays(3));  // [[1], [2, 2], [3, 3, 3], [2, 2], [1]]
console.log(diamondArrays(5));  
// [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], 
// [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
console.log(diamondArrays(7));  
// [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], 
// [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], 
// [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]