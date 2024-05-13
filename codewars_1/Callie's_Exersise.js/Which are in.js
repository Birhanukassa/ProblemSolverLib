
/*

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.


return a sorted array of a1 that are a substring of ar2, 
if there is no any substring, return empty array 

Rules
  Explicit 
    - Input: 2 arrays
    - Output: an array
    - return empty array if no substring match 
  
  - DS: string 

  # Given 2 arrays 
  - declare a variable named match and initialize it with empty array 
  - start loop the ar1
    - access each element 
      - start loop ar2
        - check if the element of ar2 is a substring of ar1 
          - if found, push ar2 element to match array 
    - if match array length is greater than 1 
      - sort the array lexicographical order
  - return match array 


*/

function inArray(ar1, ar2) {
  return ar1.filter(isSub => ar2.find(word => word.includes(isSub))).sort();
}




let a1 = ["xyz", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];


console.log(inArray(a1, a2)); //  ["live", "strong"]

a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2)); //  ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2)); //  []

console.log(inArray(["arp", "live", "strong"], a2)); 
// ["arp", "live", "strong"]

console.log(inArray(["tarp", "mice", "bull"], a2)); //  []