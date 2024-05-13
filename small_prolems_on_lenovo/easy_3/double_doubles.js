const twice = (num) => {
  let numberToString = String(num);
  let counter = 0;
  let incrementedString = '';
  let result;
  while (counter <= numberToString.length) {
    incrementedString += numberToString[counter];
    if (counter === numberToString.length) result = num * 2;
    // Here we added 1 to balance the initial incremented value.
    if (incrementedString === numberToString.substring(counter + 1)) {
      result = num;
      break;
    }
    counter++;
  }
  return result;
};

//twice(7676);
//twice(10);
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676