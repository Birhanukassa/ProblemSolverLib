function getGrade(...grades) {
  let amountOfGrade = 0;
  let scores = 0;

  while (amountOfGrade < grades.length) {
    scores += grades[amountOfGrade];
    amountOfGrade++;
  }

  let average = scores / amountOfGrade;
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"