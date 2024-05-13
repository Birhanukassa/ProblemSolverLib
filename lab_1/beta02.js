// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner
const readline = require("readline-sync");
const PLAYER_WINNING_GOAL = 21;
const DEALER_WINNING_GOAL = 17;
const BUSTED_VALUE = 21;

function prompt(print = ' ') {
  return console.log('=> ', print);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
  return array;
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

function dealingCards(deck, receiver) {
  let [firstCard, secondCard] = shuffle(deck);
  receiver = [firstCard, secondCard];
  return receiver;
}

function sumOfCards(currentPlayer) {
  let suits = ['J','Q','K'];
  let totalCardValue = 0;

  currentPlayer.forEach(card => {
    if (suits.includes(card[0])) card = 10;
    if (card[0] === 'A') {
      if (totalCardValue > BUSTED_VALUE) {
        card = 1;
      } else if (totalCardValue < BUSTED_VALUE) {
        card = 11;
      }
    }
    card = parseInt(card, 10);
    totalCardValue += card;

  });

  return totalCardValue;
}

function hitCard(deck, currentPlayer) {
  currentPlayer.push(shuffle(deck)[0]);
  return currentPlayer;
}

function validatingStayOrHit() {
  prompt(
    "Type 'h' if you want to hit or 's' if you you wish to stay."
  );

  let input = readline.question().toLowerCase();
  while (!['h', 's'].includes(input)) {
    prompt("Please type the correct word.");
    input = readline.question().toLowerCase();
  }

  return input;
}

function playerTurn(deck, player, playerValue) {
  while (true) {
    let input = validatingStayOrHit();
    if (input === 's') console.log("                  You choose to stay!");

    if (input === 'h') {
      console.log("              You choose to Hit!");
      player = hitCard(deck, player);
      playerValue = sumOfCards(player);
      prompt(`Your current Cards are: ${joinWithAnd(player)}`);
      prompt(`Your current value is ${playerValue}.`);
    }

    if (input === 's' || playerValue >= PLAYER_WINNING_GOAL) break;
  }

  return playerValue;
}

function dealerTurn(deck, dealer, dealerValue) {
  prompt(`Dealer's current cards are: ${joinWithAnd(dealer)}`);

  while (true) {
    if (dealerValue < DEALER_WINNING_GOAL) {
      console.log("                    Dealer Hits!");
      dealer = hitCard(deck, dealer);
      let updatedDealerValue = sumOfCards(dealer);
      dealerValue = updatedDealerValue;
      prompt(`Now Dealer's cards becomes: ${joinWithAnd(dealer)}`);
      prompt(`Dealer current card value is: ${dealerValue}`);
    }

    if (dealerValue >= DEALER_WINNING_GOAL) {
      console.log("                 Dealer choose to stay!");
      break;
    }

    if (isBusted(dealerValue)) break;
  }

  return dealerValue;
}

function finalResult(playerValue, dealerValue) {
  if (isBusted(playerValue)) return prompt("                  Player BUSTED! Dealer Win!");
  if (isBusted(dealerValue)) return prompt("                  Dealer BUSTED! Player Win!");

  if ((playerValue === PLAYER_WINNING_GOAL) || (playerValue > dealerValue)) {
    return prompt("                  Player is a Winner!");
  } else if (
    (dealerValue === DEALER_WINNING_GOAL) || (dealerValue > playerValue)
  ) {
    return prompt("              Dealer is a Winner!");
  } else {
    return prompt("              The game is a Tie!");
  }
}

function  displayResult(player, playerValue, dealer, dealerValue) {
  prompt(`Player has: ${joinWithAnd(player)} with ${playerValue} value`);
  prompt(`Dealer have: ${joinWithAnd(dealer)} with ${dealerValue} value`);
  console.log();
  finalResult(playerValue, dealerValue);
  console.log("                  <<<<<<<<<<<<<<>>>>>>>>>>>");
  console.log();
}

function isBusted(currentPayerValue) {
  return currentPayerValue > BUSTED_VALUE;
}

function joinWithAnd(cards, joinWith = ' and ') {
  let copyOfCards = [...cards];
  let isLastCard = copyOfCards.splice(-1);
  switch (cards.length) {
    case 0:
      return '';
    case 1:
      return cards[0];
    case 2:
      return cards.join(joinWith);
    default:
      return `${copyOfCards.join(', ')}${joinWith + isLastCard}`;
  }
}

function hideDealerCard(dealer) {
  let coveredCard = [...dealer];
  coveredCard[1] = 'Unknown Card';
  return coveredCard;
}

function displayGivenCards(player, dealer, value) {
  let hasHidenCard = hideDealerCard(dealer);
  prompt(`You have: ${joinWithAnd(player)} with a value of ${value}`);
  prompt(`Dealer has: ${joinWithAnd(hasHidenCard)}`);
  console.log();
}

function isGameOne() {
  prompt('Play again? (yes or no)');
  let response = readline.prompt().toLocaleLowerCase();
  let choices = ['y','n','yes','no'];

  while (!choices.includes(response)) {
    prompt("Please type the valid choice");
    response = readline.prompt().toLocaleLowerCase();
  }
  return response[0] === 'y';
}

const displayWelcomeTo21 = function () {
  console.clear();
  console.log();
  console.log("               ___ Welcome To Twenty One ___" );
  console.log();
};

do {
  displayWelcomeTo21();
  let DEALER = [];
  let PLAYER = [];
  let deck = initializeDeck();

  PLAYER = dealingCards(deck, PLAYER);
  DEALER = dealingCards(deck, DEALER);
  let playerValue = sumOfCards(PLAYER);
  let dealerValue = sumOfCards(DEALER);

  displayGivenCards(PLAYER, DEALER, playerValue);

  console.log("                   .... Your turn ....");
  playerValue = playerTurn(deck, PLAYER, playerValue);

  if (playerValue < PLAYER_WINNING_GOAL) {
    console.log("                 .... Dealer turn ....");
    dealerValue = dealerTurn(deck, DEALER, dealerValue);
  }

  displayResult(PLAYER, playerValue, DEALER, dealerValue);
}  while (isGameOne());

