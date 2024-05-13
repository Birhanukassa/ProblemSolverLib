/*



# Number of Boomerangs // Edabit


---
A **boomerang** is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: **sub-array of length 3, with the first and last digits being the same and the middle digit being different**.

Some boomerang examples:

```
[3, 7, 3], [1, -1, 1], [5, 6, 5]
```

Create a function that returns the total number of **boomerangs** in an array.

To illustrate:

```
[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
```

Be aware that boomerangs can overlap, like so:

```
[1, 7, 1, 7, 1, 7, 1]
5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
```

### Examples

```
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
```

### Notes

`[5, 5, 5]` (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.


Rules
  - explicit
    - input: array 
    - output: multidimentional array 
    - each subarray has length of 3
    - the first and the last digits are the same and 
      the middle is always different 
  - implicit
    - the result of index numbers have consecutive property
  
  - ds: array 
  
  
  # Given the array 
  - declare a variable named result and initialize it with empty array

  - loop the array from index 1
    - declare a variable named prev and initialize it with pre element 
    - declare a variable named current and initialize it with current element 
    - declare a variable named next and initialize it with next element 
      - check if prev and next are tye same 
        - if they are the same,
          - check if the current index is different than pre and next 
            - construct an array that has prev, current and next elements
            - push constructed array to result
  return result
      
*/

// function countBoomerangs(arr) {

//   return arr.reduce((result, prv, idx) => {
//     let current = arr[idx + 1];
//     let next = arr[idx + 2];

//     if (prv === next && prv !== current) {
//       result.push([prv, current, next])
//     }

//     return result;

//   },[]).length;
// }

// const countBoomerangs = a => a.filter((_, i) => a[i] == a[i+2] && a[i+1]!= a[i])

function countBoomerangs(arr) {
	return arr.reduce(
    (acc , e , index) => acc + (e === arr[index+2] && e!= arr[index+1]) 
    , 0);
}

console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));