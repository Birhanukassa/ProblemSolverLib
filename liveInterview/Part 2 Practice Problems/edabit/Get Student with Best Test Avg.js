/*


# Get Student with Best Test Avg. // Edabit

Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The `key` will be the student's name and the `value` will be an array of their grades. You will only have to **return the student's name**. You do not need to return their Test Average.


### Notes

All students in an object will have the same amount of test scores. So no student will have taken more tests than another.


*/

/*

Rules
  - explicit  
    - input: object 
    - output: string
DS: array 

# Given the object
- declare a variable called Average and initialize it with []
- extract the keys 
  - retrieve values using the keys
    - sum all the grades 
      - get the average 
        - push it to average array  
- access the index of the maximum average form average array 
- return the key where the index is the accessed index at 


*/


function getBestStudent(obj) {
  let average = [];

  Object.keys(obj).forEach(sub => 
   average.push(obj[sub].reduce((total, curr) => total + curr) / obj[sub].length))  
  
   let index = average.indexOf(
    average.reduce((max, curr) => curr > max ? max = curr : max)) 
   
    return Object.keys(obj)[index];
}


// ### Examples
console.log(getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}));
// ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

console.log(getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
})); 
// ➞ "Mike"
