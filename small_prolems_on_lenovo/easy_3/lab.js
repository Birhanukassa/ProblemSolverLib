console.log(`\n${horizontal}\n| ${stringWrapper(string, width)} |\n${horizontal}\n`);


const getGrade = (...args) => {
  let amountOfArgs = 0;
  let grade = 0;
  while (amountOfArgs < args.length) {
    grade += args[amountOfArgs];
    amountOfArgs++;
  }

  let result;
  let score = grade / amountOfArgs;
  if (90 <= score && score <= 100) {
    result = 'A';
  } else if (80 <= score && score < 90) {
    result = 'B';
  } else if (70 <= score && score < 80) {
    result = 'C';
  } else if (60 <= score && score < 70) {
    result = 'D';
  } else if (0 <= score && score < 60) result = 'F';

  return console.log(result);
};
