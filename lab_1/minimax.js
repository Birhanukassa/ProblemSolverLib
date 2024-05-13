
// function initializeBoard() {
//   let board = {};

//   for (let square = 1; square <= 9; square++) {
//     board[String(square)] = INITIAL_MARKER;
//   }

//   return board;
// }

// function joinOr(arr, delimeter = ', ', word = 'or') {
//   switch (arr.length) {
//     case 0:
//       return '';
//     case 1:
//       return `${arr[0]}`;
//     case 2:
//       return arr.join(` ${word} `);
//     default:
//       return `${arr.join(delimeter)
//         .replace(/.$/, word)} ${arr[arr.length - 1]}`;
//   }
// }
// function randomComputerChoice(board, square) {
//   let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
//   square = emptySquares(board)[randomIndex];
//   return square;
// }
// function findAtRiskSquare(board, marker) {
//   for (let index = 0; index < WINNING_LINES.length; index++) {
//     let line = WINNING_LINES[index];
//     let markersInLine = line.map(square => board[square]);

//     if (markersInLine.filter(val => val === marker).length === 2) {
//       let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
//       if (unusedSquare !== undefined) {
//         return unusedSquare;
//       }
//     }
//   }

//   return null;
// }
// function choosSquareFive(board) {
//   let square = board[5];
//   if (square !== INITIAL_MARKER) return null;
//   if (square === INITIAL_MARKER) square = '5';
//   return square;
// }

const readline = require("readline-sync"), INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X', COMPUTER_MARKER = 'O', WINNING_SCORE = 5;
const scoreCache = {Player: 0, Computer: 0};
const WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],[1, 5, 9], [3, 5, 7]];
let prompt = msg => console.log(`=> ${msg}`);
function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function currentPlayer() {
  prompt("Press 'p' if you choose to start the game. Press 'c' if you prefer the computer start the game: ");
  let choose = readline.question().toLocaleLowerCase();
  let gameStart = ['p', 'player', 'c', 'computer'];

  while (!gameStart.includes(choose)) {
    prompt("Please select 'p', 'player', 'c', or 'computer'");
    choose = readline.question().toLocaleLowerCase();
  }

  return choose;
}
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}
function boardFull(board) {
  return emptySquares(board).length === 0;
}
function someoneWon(board) {
  return !!detectWinner(board);
}
function displayCurrentWinner(currentWinner) {
  if (currentWinner === 'Player') {
    scoreCache.Player += 1;
    prompt(`${currentWinner} won!`);
    console.log("   ~~~~~~~~~~~~~");
    console.log(" ");
  } else if (currentWinner === 'Computer') {
    scoreCache.Computer += 1;
    prompt(`${currentWinner} won!`);
    console.log("   ~~~~~~~~~~~~~");
    console.log(" ");
  } else {
    prompt("It's a tie!");
    console.log("   _____________");
    console.log(" ");
  }
}
function resetScore() {
  if (scoreCache.Player >= WINNING_SCORE) scoreCache.Player = 0;
  if (scoreCache.Computer >= WINNING_SCORE) scoreCache.Computer = 0;
}
function displayCurrentScore() {
  console.log(`Player has ${scoreCache.Player} point!`);
  console.log(`Computer has ${scoreCache.Computer} point!`);
}
function displayFinalResults() {
  if (scoreCache.Player >= WINNING_SCORE) {
    console.log(`Congratulations! You won the overall Match!`);
    console.log(`<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log();
  } else if (scoreCache.Computer === WINNING_SCORE) {
    prompt(`COMPUTER  You won the overall Match!`);
    console.log(`<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log();
  }
}
function computerChoosesSquare(board) {
  //let square;
  // let winningSquare = findAtRiskSquare(board, COMPUTER_MARKER);
  // let riskSquare = findAtRiskSquare(board, HUMAN_MARKER);

  // square = winningSquare;
  // if (!square) square = riskSquare;
  // if (!square) square = choosSquareFive(board);
  // if (!square) square = randomComputerChoice(board);
  
  //board[square] = COMPUTER_MARKER;
  bestMove = findBestMove(board);
  board[bestMove];
}
function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
//let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
//square = emptySquares(board)[randomIndex];
 
  board[square] = HUMAN_MARKER;
}
function isGameOn() {
  prompt('Play again? (yes or no)');
  let answer = readline.question().toLowerCase();
  let choices = ['yes','y','no','n'];

  while (!choices.includes(answer)) {
    prompt("That is not a valid choice");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') answer = false;

  return answer;
}
function chooseSquare(board, currentPlayer) {
  let result = '';

  if (currentPlayer === 'player'[0]) {
    playerChoosesSquare(board);
    result = 'player'[0];
  }

  if (currentPlayer === 'computer'[0]) {
    computerChoosesSquare(board);
    result = 'computer'[0];
  }

  return result;
}
function isGameSwitch(board, currentPlayer) {
  let result = '';

  if (currentPlayer === 'player'[0]) {
    computerChoosesSquare(board);
    result = 'computer'[0];
  }
  if (currentPlayer === 'computer'[0]) {
    playerChoosesSquare(board);
    result = 'player'[0];
  }

  return result;
}
function detectWinner(board, player) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    if (board[sq1] === player && board[sq2] === player && board[sq3] === player) {
      return true;
    }
  }
  return null;
}
//************************************************** */
function evaluate(board) {
  if (detectWinner(board, COMPUTER_MARKER)) {	
    return 10;
  }	else if (detectWinner(board, HUMAN_MARKER)) { 
    return -10;
  } else 
  return 0;
} 
function minimax(board, depth, isMax) {
  let score = evaluate(board);
  if (score === 10) return score;
  if (score === -10) return score;
  //if (boardFull(board)) return 0;
  if (isMovesLeft(board) === false) return 0;
  if(isMax) {
    let best = -1000;
    for (square in board) {
      if (board[square] === INITIAL_MARKER) {
        //square = COMPUTER_MARKER;
        best = minimax(board, depth+1, !isMax);
        bestVal = Math.max(bestVal, best)
       // square = INITIAL_MARKER;
      }   
      return best;
    } 
  } else {
    let best = 1000;
    for (square in board) {
      if (board[square] === INITIAL_MARKER) {
       // square = HUMAN_MARKER
        let best = minimax(board, depth+1, true);
        bestVal = Math.min(bestVal, best);
       // square = INITIAL_MARKER;
      }
      return best;
    }
  }
}
function findBestMove(board) {
  let bestMove = -1
  let bestVal = -1000;
  for (square in board) {
    if (board[square] === INITIAL_MARKER) {
      square  = HUMAN_MARKER;
      let moveVal = minimax(board, 0, false);
      square = INITIAL_MARKER;
      if (moveVal > bestVal) {
        bestVal = moveVal;
      }
    }
  }
  return bestMove;
}
function isMovesLeft( board) {
  for(square in board) {
    return board[square] === INITIAL_MARKER ? true: false; 
  }
} 
// ***************************************************** 
do {
  let board = { '1': ' ',2: 'X',3: 'X',4: 'O',5: 'O',6: 'X',7: 'X',8: 'O',9: 'X' };
  //let board = initializeBoard();
  displayBoard(board);
  let currentChoice = currentPlayer(); // 'c' or 'p'
  currentChoice = chooseSquare(board, currentChoice); // 'c' or 'p'
  do {
    displayBoard(board);
    currentChoice = isGameSwitch(board, currentChoice);
  } while (!(someoneWon(board, currentChoice) || boardFull(board)));

  displayBoard(board);
  let currentWinner = detectWinner(board);
  displayCurrentWinner(currentWinner);
  displayCurrentScore();
  displayFinalResults(currentWinner);
  resetScore();
} while (isGameOn());

prompt('Thanks for playing Tic Tac Toe!');
 
