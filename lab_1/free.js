const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],[1, 5, 9], [3, 5, 7]
];

//var origBoard = {1: 'O', 2: 'X', ' ': 'X',4: ' ',5: ' X',6: 'X',7: 'O',8: ' ', 9: ' '};

var origBoard = ["O",1 ,"X","X",4 ,"X", 6 ,"O","O"];

var huPlayer = "O"; // human
var aiPlayer = "X"; // ai
// keep track of function calls
var fc = 0;
// finding the ultimate play on the game that favors the computer
var bestSpot = minimax(origBoard, aiPlayer);
//loging the results

console.log("index: " + bestSpot.index);
console.log("function calls: " + fc);

// the main minimax function
function minimax(newBoard, player){
  //keep track of function calls;
  fc++;
  var availSpots = emptyIndexies(newBoard);  //available spots
  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, huPlayer)) return {score:-10};
  if (winning(newBoard, aiPlayer)) return {score:10};
  if (availSpots.length === 0)	return {score:0};
// an array to collect all the objects
  var moves = [];  // loop through available spots
  console.log(moves);
  for (var i = 0; i < availSpots.length; i++){
    //create an object for each and store the index of that spot that was stored 
    //as a number in the object's index key
    var move = {};
  	move.index = newBoard[availSpots[i]];  // set the empty spot to the current player
    newBoard[availSpots[i]] = player;
    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player == aiPlayer){
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    }
    else {
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }
    newBoard[availSpots[i]] = move.index; //reset the spot to empty
    moves.push(move); // push the object to the array
  }
  var bestMove;//if it is the computer's turn loop over the moves and choose the move with the highest score
  if(player === aiPlayer){
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{ // else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } console.log(bestMove);
  return moves[bestMove]; // return the chosen move (object) from the array to the higher depth
}

// returns the available spots on the board
function emptyIndexies(board){
  //return  board.filter(s => s != "O" && s != "X");
  return Object.keys(board).filter(key => board[key] === ' ');
}
// function emptySquares(board) {
//     return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
// }
  
// winning combinations using the board indexies for instace the first win could be 3 xes in a row
// function winning(board, player){
//  if (
//         (board[0] == player && board[1] == player && board[2] == player) ||
//         (board[3] == player && board[4] == player && board[5] == player) ||
//         (board[6] == player && board[7] == player && board[8] == player) ||
//         (board[0] == player && board[3] == player && board[6] == player) ||
//         (board[1] == player && board[4] == player && board[7] == player) ||
//         (board[2] == player && board[5] == player && board[8] == player) ||
//         (board[0] == player && board[4] == player && board[8] == player) ||
//         (board[2] == player && board[4] == player && board[6] == player)
//         ) {
//         return true;
//     } else {
//         return false;
//     }
// }

function winning(board, player) {
    for (let line = 0; line < WINNING_LINES.length; line++) {
      let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
  
      if (board[sq1] === player && board[sq2] === player && board[sq3] === player) {
        return true; 
      } else {
          return false;
      }
    }
    return null;
}