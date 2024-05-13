/*

DESCRIPTION:
Task:
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.



Rules
 - Explicit
   - input: 2D array 
   - output: array of coordinates 
  
   - find the unique value in the matrix and return the coordinate of that value
   - if there are no unique value, or if there are more than 
     1 unique value, return empty array 
  
DS: array 

# Given the matrix 
- declare a variable called frq and initialize it with empty object
- access the key that has one value

- find the index of the colum of the key 
- find the index of the row of the key 


return [colum, row]

if there is no key that has one value return empty array 



*/

const xMarksTheSpot = (input) => {
  let frq = {};
  if (input.length === 0) return [];
  

  input.forEach( row => row.forEach(n => frq[n]? frq[n]++: frq[n] = 1));
  let unique = Object.keys(frq).filter(n => frq[n] === 1);


  if (unique.length === 0) return [];

  let rowN;
  let colum;
  
  input.forEach((row, i)=> row.forEach(n => {
    if (n === unique[0]) {
      rowN = row.indexOf(n);
      colum = i;
    }
  }))

  return [colum, rowN];
}






// Examples
// Input: []

// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]

// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]

// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]

// Return [0,0] when x at top left => [0, 0]

let input = [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'y', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]

console.log(xMarksTheSpot(input));
// Return [4,6] for the example above => [4, 6]

