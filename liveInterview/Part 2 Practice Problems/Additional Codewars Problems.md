---
created: 2022-10-01T04:10:39 (UTC -05:00)
tags: []
source: https://launchschool.com/lessons/cdfe3681/assignments/ef7a168b
author: 
---

# Launch School - an online school for Software Engineers

---
## Part 2: Practice Problems

These problems are similar to those you will see in the interview. You should be able to solve each problem in around 25 minutes. We **strongly** recommend using the PEDAC process for all of the problems in this assignment. You should also attempt to use the `forEach`, `filter`, and `map` methods from `Array.prototype` where appropriate.

#### Problem 1

```
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
```

#### Problem 2

```
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".
```

#### Problem 3

```
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".
```

#### Problem 4

```
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
```

#### Problem 5

```
// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".
```

#### Additional Codewars Problems

We've also identified a variety of problems at Codewars that you may find useful when practicing for the assessment. As with the above problems, they are roughly comparable to what you will encounter in the assessment, or will use techniques that may be useful.

1.  [Count letters in string](https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript)
2.  [Find all pairs](https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/javascript)
3.  [Return substring instance count](https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript)
4.  [Longest vowel chain](https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript)
5.  [Non-even substrings](https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript)
6.  [Repeated Substring](https://www.codewars.com/kata/5491689aff74b9b292000334/train/javascript)
7.  [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript)
8.  [Scramblies](https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript)
9.  [Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript)
10.  [Largest product in a series](https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/javascript)
11.  [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)
12.  [Transform To Prime](https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript)
13.  [Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript)
14.  [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript)
15.  [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript)
16.  [Are they the same](https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript)
17.  [Sum of pairs](https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript)
18.  [Grouping and Counting](https://www.codewars.com/kata/53a452dd0064085711001205/train/javascript)
19.  [WeIrD StRiNg CaSe](https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript)
