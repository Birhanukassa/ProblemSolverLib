

/*
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/





function findShort(s){
  return s.split(' ').reduce((shortest, current) => shortest < current.length ? shortest: current.length, Infinity)
}

function findShort(s){
  return Math.min(...s.split(' ').map(word => word.length))
}

// mine
function findShort(s){
  return s.split(' ').map(w => w.length).reduce((shortest, curr) => shortest < curr ? shortest: curr)
}

console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"));  //3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2