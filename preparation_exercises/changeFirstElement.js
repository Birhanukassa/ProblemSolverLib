function changeFirstElement(array) {
    array[0] = 9;
  }
  
  let oneToFive = [1, 2, 3, 4, 5];
  changeFirstElement(oneToFive)
  console.log(oneToFive); // logs [9, 2, 3, 4, 5]