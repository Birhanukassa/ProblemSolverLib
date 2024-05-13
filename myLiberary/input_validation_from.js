//Synthesizing 10/10 solutions (Duplicates hidden)

//=======

while (true) {
    if (!choices.includes(response)) {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
        if (response === 'y') {
      return true;
    } else if (response === 'n') {
      return false;
    }
  }

//=======

while (true) {
    if (!choices.includes(response)) {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
        if (choices.includes(response)) {
      if (response === 'y') {
        return true;
      } else if (response === 'n') {
        return false;
      }
    }
  }

//=======

while (true) {
    if (!choices.includes(response)) {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
        if (choices.includes(response)) {
      if (response === 'y') {
        return true;
      }
      if (response === 'n') {
        return false;
      }
    }
  }

//=======

while (true) {
    if (!choices.includes(response)) {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
        if (response === 'y') {
      return true;
    } else if (response === 'n') {
      return false;
    }
    response = readline.prompt().toLocaleLowerCase();
  }

//=======

while (true) {
    if (!choices.includes(response)) {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
        if (response === 'y') {
      return true;
    } else if (response === 'n') {
      return false;
    } else {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
  }

//=======

while (true) {
    if (!choices.includes(response)) {
      prompt("                  Please type the valid choice");
      response = readline.prompt().toLocaleLowerCase();
    }
        if (response === 'y') {
      resetScores();
      return true;
    } else if (response === 'n') {
      return false;
    }
  }


  //////////////////////////////////////////////////////////////////////////////

//  Synthesizing 10/10 solutions

//=======

function hitCard(deck, player) {
  let card = deck.pop();
  player.push(card);
  return player;
}

//=======

function hitCard(deck, player) {
  let [firstCard, secondCard] = dealingCards(deck);
  player = [firstCard, secondCard].concat(player);
  return player;
}

//=======

function main() {
  displayWelcomeTo21();
  instructions();
  let deck = createDeck();
  let [player, dealer] = dealingCards(deck);
  let playerValue = sumOfCards(player);
  let dealerValue = sumOfCards(dealer);

  if (gameScore.dealer === 0 && gameScore.player === 0) {
    displayGameOver();
    gameScore.dealer = 0;
    gameScore.player = 0;
  }
  prompt("Are you ready to play? Press 'y' or 'n'");
  let input = readline.question().toLowerCase();
  while (input !== 'y') {
    if (input === 'n') {
      displayGameOver();
      process.exit();
    } else {
      prompt("Are you ready to play? Press 'y' or 'n'");
      input = readline.question().toLowerCase();
    }
  }

  displayGameOver();
  console.log("");
  prompt("                   Dealer's turn!");
  console.log("");
  playerValue = playerTurn(deck, player, playerValue);

  if (isBusted(playerValue)) {
    displayFinalResults(player, playerValue, dealer, dealerValue);
    process.exit();
  }

  prompt("                   Dealer's turn!");
  console.log("");
  dealerValue = dealerTurn(deck, dealer);

  if (isBusted(dealerValue)) {
    displayFinalResults(player, playerValue, dealer, dealerValue);
    process.exit();
  }

  if (playerValue > dealerValue) {
    displayFinalResults(player, playerValue, dealer, dealerValue);
  } else if (playerValue === dealerValue) {
    displayFinalResults(player, playerValue, dealer, dealerValue);
  } else if (playerValue < dealerValue) {
    displayFinalResults(dealer, dealerValue, player, playerValue);
  }
}

//=======

function startGame() {
  let deck = createDeck();
  let player = dealingCards(deck);
  let dealer = dealingCards(deck);
  let playerValue = sumOfCards(player);
  let dealerValue = sumOfCards(dealer);

  displayWelcomeTo21();
  instructions();

  while (true) {
    if (playerValue === DEALER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (dealerValue === PLAYER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (playerValue > DEALER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (dealerValue > PLAYER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    let playerTurnValue = playerTurn(deck, player, playerValue);
    let dealerTurnValue = dealerTurn(deck, dealer);

    displayFinalResults(player, playerTurnValue, dealer, dealerTurnValue);
  }

  displayGameOver();
}

//=======

function main() {
  displayWelcomeTo21();
  instructions();
  let deck = createDeck();
  let player = dealtCards(deck);
  let dealer = dealtCards(deck);
  let playerValue = sumOfCards(player);
  let dealerValue = sumOfCards(dealer);
  let gameOver = false;

  while (!gameOver) {
    displayCurrentGame(player, dealer, playerValue, dealerValue);
    playerValue = playerTurn(deck, player, playerValue);
    if (isBusted(playerValue)) {
      gameOver = true;
      displayGameOver();
      break;
    }
    dealerValue = dealerTurn(deck, dealer);
    if (isBusted(dealerValue)) {
      gameOver = true;
      displayGameOver();
      break;
    }
    displayFinalResults(player, playerValue, dealer, dealerValue);
  }
}

//=======

function playGame() {
  displayWelcomeTo21();
  instructions();

  let deck = new Deck();
  deck.shuffle();
  let player = dealingCards(deck);
  let dealer = dealingCards(deck);
  let playerValue = sumOfCards(player);
  let dealerValue = sumOfCards(dealer);

  while (true) {
    if (playerValue > DEALER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (dealerValue > PLAYER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (playerValue === DEALER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (dealerValue === PLAYER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (playerValue === DEALER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    if (dealerValue === PLAYER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      break;
    }

    let input = hitOrStayValidator();
    if (input === 'h') {
      console.log("");
      prompt("                   You choose to Hit!");
      console.log("");
      player = hitCard(deck, player);
      playerValue = sumOfCards(player);
      prompt(`Your current Cards are:   ${joinAnd(objectToString(player))}.`);
      prompt(`Your current points are:  ${playerValue} points.`);
    }

    if (input === 's' || playerValue >= PLAYER_WINNING_GOAL) {
      if (input === 's') prompt("                   You choose to stay!");
      console.log("");
      break;

//=======

startGame() {
  console.clear();
  displayWelcomeTo21();
  instructions();
  let deck = shuffle(createDeck());
  let player = dealingCards(deck);
  let playerValue = sumOfCards(player);
  let dealer = dealingCards(deck);
  let dealerValue = sumOfCards(dealer);

  let isGameOver = false;
  while (!isGameOver) {
    console.log("");
    prompt(`Your current Cards are:   ${joinAnd(objectToString(player))}.`);
    prompt(`Your current points are:  ${playerValue} points.`);
    console.log("");
    prompt(`Dealer has:        ${joinAnd(objectToString(dealer))}`);
    prompt(`Dealer has:        ${dealerValue} points.`);
    console.log(`                  <<<<<<<<<<<<<>>>>>>>>>>>>>>`);
    console.log("");

    playerValue = playerTurn(deck, player, playerValue);
    if (isBusted(playerValue)) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      isGameOver = true;
    } else if (playerValue >= PLAYER_WINNING_GOAL) {
      displayFinalResults(player, playerValue, dealer, dealerValue);
      isGameOver = true;
    }

    if (!isGameOver) {
      dealerValue = hitCard(deck, dealer);
      if (isBusted(dealerValue)) {
        displayFinalResults(player, playerValue, dealer, dealerValue);
        isGameOver = true;
      } else if (dealerValue >= DEALER_WINNING_GOAL) {
        displayFinalResults(player, playerValue, dealer, dealerValue);
        isGameOver = true;
      }
    }
  }

  displayGameOver();
  prompt("Press 'y' to play again or 'n' to quit.");
  let input = readline.question().toLowerCase();
  while (!['y', 'n'].includes(input)) {
    prompt("Please type the correct word."

//=======

function startNewGame() {
  if (gameScore.dealer === 0 && gameScore.player === 0) {
    let player = [],
      dealer = [],
      deck = [],
      playerValue = 0,
      dealerValue = 0;

    displayWelcomeTo21();
    instructions();

    while (playerValue < PLAYER_WINNING_GOAL) {
      deck = shuffle(deck);
      player = dealingCards(deck);
      dealer = dealingCards(deck);
      playerValue = playerTurn(deck, player, playerValue);
      dealerValue = dealerTurn(deck, dealer, dealerValue);
      displayGame(player, playerValue, dealer, dealerValue);
    }

    displayFinalResults(player, playerValue, dealer, dealerValue);
  } else if (gameScore.dealer !== 0 || gameScore.player !== 0) {
    let player = [],
      dealer = [],
      deck = [],
      playerValue = 0,
      dealerValue = 0;

    displayWelcomeTo21();
    instructions();

    while (playerValue < PLAYER_WINNING_GOAL) {
      deck = shuffle(deck);
      player = dealingCards(deck);
      dealer = dealingCards(deck);
      playerValue = playerTurn(deck, player, playerValue);
      dealerValue = dealerTurn(deck, dealer, dealerValue);
      displayGame(player, playerValue, dealer, dealerValue);
    }

    displayFinalResults(player, playerValue, dealer, dealerValue);
  }
}

//=======

function setUpGame() {
  displayWelcomeTo21();
  instructions();

  let deck = setUpDeck();
  let player = dealingCards(deck);
  let dealer = dealingCards(deck);
  let playerValue = sumOfCards(player);
  let dealerValue = sumOfCards(dealer);
  let gameOver = false;

  while (!gameOver) {
    displayGame(player, dealer, playerValue, dealerValue);
    playerValue = playerTurn(deck, player, playerValue);
    dealerValue = sumOfCards(dealer);
    displayFinalResults(player, playerValue, dealer, dealerValue);
    gameOver = isGameOver(playerValue, dealerValue);
  }

  displayGameOver();
}

//=======

function displayWinningScore(player, dealer) {
  console.log(`
    Game Over!
  `);

  if (player === dealer) {
    console.log(`
    It's a tie!
    The final score is ${player} points.
  `);
  } else if (player > dealer) {
    console.log(`
    You are a winner!
    The final score is ${player} points.
  `);
  } else {
    console.log(`
    Dealer is a winner!
    The final score is ${dealer} points.
  `);
  }
}
