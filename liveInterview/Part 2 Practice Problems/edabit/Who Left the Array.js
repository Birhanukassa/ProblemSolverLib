/*
# Who Left the Array? // Edabit

You are given two arrays. The elements in `arr1` threw a party and started to mix around. However, one of the elements got lost! Your task is to return the element which was lost.

### Examples

```
missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2

missing([true, true, false, false, true], [false, true, false, true]) ➞ true

missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) ➞ "ugly"
```

### Notes

-   Assume that the first array always contains 1 or more elements.
-   Elements are always lost.
-   An element can also have duplicates.


rules
  - explicit
    - input: array 
    - output: boolean 
    - find the element that has not available to the second array 
    
ds: array 

# Given 2 arrays 
  - iterate the first array 
    - check if the element is in the second array 
      - if its not available, return that element.


*/

// function missing(arr1, arr2) {
//   return arr1.find((v, i) => arr2.indexOf(v) !== i);
// }

// console.log(
//   missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8])
// );

// console.log(
//   missing([true, true, false, false, true], [false, true, false, true])
// ) 
// // true



function getFrequencies(arr) {
	return arr.reduce((obj, v) => (obj[v]? obj[v]++ : obj[v] = 1, obj),{});
}

console.log(getFrequencies(['A', 'A']));

console.log(getFrequencies(['A', 'B', 'A', 'A', 'A'] ));
// {A: 4, B: 1


function getBestStudent(grades) {
	return Object.keys(grades).find(
   
}