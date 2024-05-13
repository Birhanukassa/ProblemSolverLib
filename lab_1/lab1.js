const readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
const scoreCache = {Player: 0, Computer: 0};
const WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],[1, 5, 9], [3, 5, 7]];

// function emptySquares(board) {
//     return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
// }

// function initializeBoard() {
//     let board = {};
  
//     for (let square = 1; square <= 9; square++) {
//       board[String(square)] = INITIAL_MARKER;
//     }
  
//     return board;
// }
//function isMovesLeft( board) {
    // let res;
    // for (const square in board) {
    //     if (Object.hasOwnProperty.call(board, square)) {
    //        if (square[board] === INITIAL_MARKER) {  
    //          res = true;
    //        } else {
    //           res = false;  
    //        }
    //     }
    //  return res;
    // } 
  // let keys = Object.keys(board);
  // //let res = false;
  //   for (key = 0; key < keys.length; key++) {
  //       let isSame = keys[0];
  //       console.log(isSame);
  //     isSame === '1'? true: false;
  //     //      res = true;
  //     //  } else { 
  //     //      res = false;
  //     //  }
  //   //}  
  //   return res
//} 


//let board = initializeBoard();

// function isMovesLeft( board) {

//   for(square in board) {
//     console.log(board[square]);
//     return board[square] === INITIAL_MARKER ? true: false; 
//   }
//   //console.log(board);
// }  
// let board = { '1': ' ',2: 'O',3: 'X',4: 'X',5: 'O',6: 'X',7: 'X',8: 'O',9: 'X' };
//console.log(!!emptySquares(board).length);
//console.log(isMovesLeft(board));

function initializeDecks() {
  let count = 0;
  const deck = [];
  const suits = ['Hearts','Diamonds','Clubs','Spades'];
  const values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
  
  for (suit in suits) {  
    for (value in values) {
      let currentSuit = suits[suit];
      let currentValue = values[value];
      count++;
      deck.push(` ${currentValue} of ${currentSuit}`);
    }
  }
  console.log(count);
  return deck;
}

let humanDeck = initializeDecks();
console.log(humanDeck);