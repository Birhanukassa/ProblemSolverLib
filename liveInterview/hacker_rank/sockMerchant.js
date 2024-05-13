/**
Practice Interview Preparation KitWarm-up ChallengesSales by Match
There is a large pile of socks that must be paired by color.
Given an array of integers representing the color of each sock,
 determine how many pairs of socks with matching colors there are.

Example
n = 7
ar = [1, 2, 1, 2, 1, 3 ,2]

There is one pair of color  and one of color . There are three odd socks
left, one of each color. The number of pairs is 2.

Function Description
Complete the sockMerchant function in the editor below.
sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock

Returns
int: the number of pairs

Input Format
The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the
socks in the pile.


/** */
function sockMerchant(n, ar) {
  let socks = {};
  for (let i = 0; i < n; i++) {
    let curEle = ar[i];
    if (socks[curEle]) {
      socks[curEle]++;
    } else {
      socks[curEle] = 1;
    }
  }
  let pairs = 0;
  for (let key in socks) {
    pairs += Math.floor(socks[key] / 2);
  }
  return pairs;
}

function sortAndCount( n, arr ) {
  let sorted = arr.sort( (a,b) => a - b); // [1, 1, 1, 2, 2, 2, 3]
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if ( sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }

  return pairs;
}

function sockMerchant2(n, ar) {
  const colors = {};
  let pairs = 0;
  for (const color of ar) pairs += !(colors[color] = !colors[color]);

  return pairs;
}

function sockMerchant3(n, ar) {
  const colors = {};
  let pairs = 0;
  for (const color of ar) if (colors[color]) {
    colors[color] = 0;
    pairs += 1;
  } else {
    colors[color] = 1;
  }

  return pairs;
}

let array = [1, 2, 1, 2 , 1, 3, 2];

// console.log(sockMerchant(7, array));
// console.log(sortAndCount(7, array));
// console.log(sockMerchant2(7, array));
console.log(sockMerchant3(7, array));