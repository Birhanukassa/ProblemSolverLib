/*5 kyu
 Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.
*/

function moveZeros(arr) {
  let arrWithOut0 = [];
  let arrForZero = [];
  arr.forEach(el => {
    if (el === 0) {
      arrForZero.push(el);
    } else {
      arrWithOut0.push(el);
    }
  });
  return arrWithOut0.concat(arrForZero);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
// returns[false,1,1,2,1,3,"a",0,0]