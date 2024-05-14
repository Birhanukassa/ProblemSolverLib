// 1. Initialize deck                   // 2. Deal cards to player and dealer
// 3. Player turn: hit or stay          //    - repeat until bust or stay
// 4. If player bust, dealer wins.      // 5. Dealer turn: hit or stay
//    - repeat until total >= 17        // 6. If dealer busts, player wins.
// 7. Compare cards and declare winner
const readline = require("readline-sync"),PLAYER_WINNING_GOAL = 21, DEALER_WINNING_GOAL = 17;
let DEALER = [], PlAYER = []; 
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}
function busted(activePlayer) {
  if (activePlayer > 21) return 'isBusted';
}
function initializeDeck() {
  const deck = [];
  const suits = ['Heart','Diamond','Club','Spade'];
  const cards = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

  for (let suit in suits) {
    for (let card in cards) {
      let currentSuit = suits[suit];
      let currentCard = cards[card];
      deck.push(`${currentCard} of ${currentSuit}`);
    }
  }

  return deck;
}
function dealingCards(deck, reciver = []) {
  let firistCard = null;
  let secondCard = null;
  // [firistCard, secondCard, ...restOfCards] = deck;
  // let deck = [[firistCard], [secondCard], [restOfCards]];
  firistCard = deck.shift();
  secondCard = deck.shift();
  reciver = [firistCard, secondCard];
  return reciver;
}
function isSumOfCards(currentPlayer) {
  let suits = ['J','Q','K','A'];
  let sumOfCards = 0;

  currentPlayer.forEach(card => {
    if (suits.includes(card[0])) card = 10;
    card = parseInt(card, 10);
    sumOfCards += card;
  });

  return sumOfCards;
}
function hitCard(deck, currentPlayer) {
  let firistCard = deck[0];
  currentPlayer.push(firistCard);
  return currentPlayer;
}
function playerTurn(deck) {
  let playerCurrentValue = isSumOfCards(PlAYER);
  console.log(playerCurrentValue);

  while (playerCurrentValue < PLAYER_WINNING_GOAL) {
    console.log("hit or stay?");
    let answer = readline.question();
    if (answer === 'hit') hitCard(deck, PlAYER);
    console.log(PlAYER);
    playerCurrentValue = isSumOfCards(PlAYER);
  }
  return playerCurrentValue;
}
function dealerTurn(deck) {
  let dealerCurrentValue = isSumOfCards(DEALER);
  while (dealerCurrentValue < DEALER_WINNING_GOAL) {
    console.log("hit or stay?");

    let answer = readline.question();
    if (answer === 'hit') hitCard(deck, DEALER);

    dealerCurrentValue = isSumOfCards(DEALER);
    console.log(dealerCurrentValue);
    if (answer === 'stay' || busted(dealerCurrentValue)) break;
  }
}
function isDeclareWinner(dealerCurrentValue, playerCurrentValue) {
  let winner = 0;
  if (dealerCurrentValue > 17 || playerCurrentValue === PLAYER_WINNING_GOAL) winner = 'player won!';
  if (playerCurrentValue > 21 || dealerCurrentValue === DEALER_WINNING_GOAL) winner = 'Dealer won!';
  return winner;
}
console.clear();
console.log("___ Wellcome To Twenty One ___");
while (true) {
  let deck = shuffle(initializeDeck());         // 1.Initialize deck & shuffle the deck 
  DEALER = dealingCards(deck, DEALER);          // 2.Deal deck to dealer
  PlAYER = dealingCards(deck, PlAYER);          // 2.1Deal deck to player                                                
  let playerCurrentValue = isSumOfCards(PlAYER);
  let dealerCurrentValue = dealerTurn(deck);

    isDeclareWinner(dealerCurrentValue, playerCurrentValue);
}
 
// 3.3 - Otherwise, go to #3.1.
// 3.4 - repeat until bust or stay
//  4.  If player bust, dealer wins.
//  5.  Dealer turn: hit orcards

// if (busted(playerCurrentValue, dealerCurrentValue)) {
//   // probably end the game? or ask the user to play again?
// } else {  // if player didn't bust, must have stayed to get here
//   console.log("You chose to stay!");
// }
// //6.  If dealer busts, player win
// while (true) {        // 5.1 - repeat until total >= 17
//   console.log("hit or stay?");
//   let answer = readline.question(); // 3.1 - Ask player to hit or stay.
//   if (answer === 'stay' || busted(playerCurrentValue, dealerCurrentValue)) break;   // 3.2 - If stay, stop asking.
// }
