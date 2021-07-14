let d =  [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];

function openOrSenior(data) {
  return data.map(person => ((person[0] >= 55 && person[1] > 7) ? 'Senior' : 'Open'));
}

console.log(openOrSenior(d));
