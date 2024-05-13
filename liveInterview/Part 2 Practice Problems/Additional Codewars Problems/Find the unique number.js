
/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique


loop the array 
  if the fist element is differ form the second and the second ele is equal to third ele 
    return first ele 
  else 
   if element is not the same as the first element return that element 
   
    






*/




function findUniq(arr) {
  for (let n = 1; n < arr.length; n++) {
    if (arr[0] !== arr[1] && arr[1] === arr[2]) {
      return arr[0];
    } else if (arr[0] !== arr[n]) {
      return arr[n];
    }
  } 
}


function findUniq(arr) {
  return arr.find(ele => arr.indexOf(ele) === arr.lastIndexOf(ele))
}


// console.log(findUniq([ 1, 0, 0 ]))           //  1
// console.log(findUniq([ 0, 1, 0 ]))           //  1
// console.log(findUniq([ 0, 0, 1 ]))           //  1
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))  //  2
// console.log(findUniq([ 1, 1, 2, 1, 1 ]))     //  2
console.log(findUniq([ 3, 10, 3, 3, 3 ]))    //  10 