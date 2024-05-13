
// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid;

//   while (low < high) {
//     mid = high + low;    //
//     let currentValue = arr[mid];  

//     if (currentValue === target) {
//       return mid;  
//     } else if (currentValue > target) {
//       high = mid - 1; 
//     } else {
//       low = mid + 1;
//     }
//   }
//   return null;
// }

// function checkVote() {
//   let voted = {};
//   function TODO(name) { 
//   if (voted[name]) {
//     console.log('Kick them out!');
//   } else {
//     voted[name] = true;
//     console.log('Let them vote!');
//   }
//  }
//  console.log();

//  TODO('tom');
//  TODO('mike');
//  TODO('tom');

// }

// checkVote();

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));


let map = new Map();

map.set('apple', 0.67);
map.set('milk', 1.49);
map.set('avocado', 0);

//console.log(map);

// console.log(
  //   map.get('avocado')
  //   );
  
  if (map.get('avocado')) {
    console.log(map.get('avocado'));
  }
