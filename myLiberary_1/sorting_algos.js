
// @gpazo Greg Pazo
// www.gregpazo.com
// Published
// May 9, 2019


// Recursion, Sorting in JS
// Calculate the value of factorial (input) using recursion

//factorial = ƒ(number)
function factorial(number) {
  return number < 2 ? 1 : number * factorial(number - 1);
}

factorial(6); // 720

// Sock Merchant Problem
// Find how many pairs of matching socks are in the Array
// sockMerchant = ƒ(n, ar)
function sockMerchant(n, ar) {
  const colors = {};
  let matches = 0;
  for (let i = 0; i < n; i++) {
    if (colors[ar[i]]) {
      matches++;
      colors[ar[i]] = 0;
    } else {
      colors[ar[i]] = 1;
    }
  }
  return matches;

}

sockMerchant(9,[10, 20, 20, 10, 10, 20, 50, 10, 20]); //4

// Fibonacci
// (index) returns value of fibonacci sequence at index
// _fibonacci = ƒ(element)
function _fibonacci(element) {
  const series = [1, 1];

  for (let i = 2; i < element; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }

  return series[element - 1];
}

_fibonacci(3); // 2
_fibonacci(4); // 3
_fibonacci(5); // 5
_fibonacci(15); // 610

// Bubble Sort
// This algorithm is the easiest to understand but is also the most inefficient.
// It compares every item against every other item, swapping the order until the
// bigger ones “bubble” to the top. This algorithm requires quadratic time and
// constant space.

// bubbleSort = ƒ(array)
function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    array.forEach((number, index) => {
      if (number > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swapped = true;
      }
    });
  } while (swapped);
  return array;
}

bubbleSort([1, 3, 6, 83, 29, 20, 11, 10, 13]); // [1, 3, 6, 10, 11, 13, 20, 29, 83]

// Insertion Sort
// Like bubble sort, every item is compared with every other item.
//Instead of swapping,it “splices” in the correct order. In effect,
//it maintains the original order of repeated items.
// This “greedy” algorithm also requires quadratic time and constant space.

//insertionSort = ƒ(array)
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
    }
  }
  return array;
}

insertionSort([1, 3, 6, 83, 29, 20, 11, 10, 13]); // [1, 3, 6, 10, 11, 13, 20, 29, 83]

// Selection Sort
// As the loop iterates through a collection, this algorithm finds
// and “selects” the index with the lowest value and swaps it with
// the beginning index wherever appropriate.
// This algorithm also requires quadratic time and constant space.

// selectionSort = ƒ(array)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < array.length; j++) if (array[j] < array[indexOfMin]) indexOfMin = j;

    if (indexOfMin !== i) {
      let less = array[indexOfMin];
      array[indexOfMin] = array[i];
      array[i] = less;
    }
  }

  return array;
}

selectionSort([1, 3, 6, 83, 29, 20, 11, 10, 13]); // [1, 3, 6, 10, 11, 13, 20, 29, 83]

// Quick Sort
// This algorithm recursively selects an element as the pivot
// and iteratively pushes all the smaller elements to the left
// and all the larger elements to the right until all is sorted.
// This algorithm requires quadratic time and logarithmic space
// such that in practice is often the fastest. As such,
// most programming languages natively implement
// this algorithm for sorting.

// quickSort = ƒ(array)
function quickSort (array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [],
    right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort([1, 3, 6, 83, 29, 20, 11, 10, 13]); // [1, 3, 6, 10, 11, 13, 20, 29, 83]

// Merge Sort
// Though one of the most efficient, this algorithm can be challenging
// to understand.
// It requires a recursive part that splits up a collection into single units,
// and then an iterative part that combines them back together
// in the right order.
// This algorithm takes linearithmic time and linear space.

// _merge = ƒ(left, right)
function _merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

function _mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const center = Math.floor(array.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(center);

  return _merge(_mergeSort(left), _mergeSort(right));
}

_mergeSort([1, 3, 6, 83, 29, 20, 11, 10, 13]); // [1, 3, 6, 10, 11, 13, 20, 29, 83]

// © 2021 Observable, Inc.
// HomeProductTeamsAboutJobsContactTerms
