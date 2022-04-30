// =====================================================
// Variables accessible across game rounds
// =====================================================
let computerCards = [];
let playerCards = [];
let cardDeck = [];
let playerWin = "";
let blackjackWin = "";
let computerBust = "";
let playerBust = "";
let computerTotalRank = 0;
let playerTotalRank = 0;
const strComputer = "Computer";
const strPlayer = "Player";

const modeCreateShuffleDeck = "create_shuffle_deck";
const modeDrawTwoCards = "draw_two_cards";
const modePlayerChoice = "player_choice";
const modeEvaluateFinalResults = "evaluate_final_results";
const modeWantToPlayGameAgain = "want_to_play_game_again";
const modeGoodbye = "goodbye";
const gameModes = [
  modeCreateShuffleDeck,
  modeDrawTwoCards,
  modePlayerChoice,
  modeEvaluateFinalResults,
  modeWantToPlayGameAgain,
  modeGoodbye
];
const playerChoices = ["hit", "stand"]; //hit = draw a card; stand = end a turn
const dealerThreshold = 17;
const blackjackThreshold = 21;

// =====================================================
// Create, shuffle deck
// =====================================================
var makeDeck = function () {
  let aSuits = ["clubs", "spades", "hearts", "diamonds"];
  let aCardDeck = [];

  let iCounterSuits = 0;
  let currentCardName = "";
  let currentCardRank = -1;
  let currentCardSuit = "";

  // for each suit
  while (iCounterSuits < aSuits.length) {
    currentCardSuit = aSuits[iCounterSuits];

    let iCounterPerSuit = 1;
    //create each card
    // 1-10, J K Q Ace => 14 types of cards
    while (iCounterPerSuit < 15) {
      // Jack, Queen, King are rank 10
      // Ace can be rank 1 or 11
      if (iCounterPerSuit === 11) {
        currentCardName = "Jack";
        currentCardRank = 10;
      } else if (iCounterPerSuit === 12) {
        currentCardName = "Queen";
        currentCardRank = 10;
      } else if (iCounterPerSuit === 13) {
        currentCardName = "King";
        currentCardRank = 10;
      } else if (iCounterPerSuit === 1) {
        currentCardName = "Ace";
        currentCardRank = 11; //how to show 1 or 11?
      }
      // else if (iCounterPerSuit === 14) {
      //   currentCardName = "Ace";
      //   currentCardRank = 11; //how to show 1 or 11?
      // }
      // else assign the current counter number to rank (already adjusted for the 0-index in iCounterPerSuit)
      else {
        currentCardName = iCounterPerSuit;
        currentCardRank = iCounterPerSuit;
      }

      let currentCardAttributes = {
        rank: currentCardRank,
        suit: currentCardSuit,
        name: currentCardName
      };

      // Add the current card's object/dictionary of attributes to the deck of card attributes
      aCardDeck.push(currentCardAttributes);

      iCounterPerSuit += 1;
    }
    iCounterSuits += 1;
  }

  return aCardDeck;
};

var shuffleCards = function (cardDeck) {
  let currentIndex = cardDeck.length;
  let randomIndex = 0;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex = currentIndex - 1;

    // Swap random card and current card
    [cardDeck[currentIndex], cardDeck[randomIndex]] = [
      cardDeck[randomIndex],
      cardDeck[currentIndex]
    ];
  }
  return cardDeck;
};

// Create Deck > Shuffle Cards
let currentGameMode = modeCreateShuffleDeck;
var createAndShuffleDeck = function () {
  cardDeck = makeDeck();
  cardDeck = shuffleCards(cardDeck);
  return cardDeck;
};

// =====================================================
// Check Total Rank, Blackjack Win, Tie/Bust/Normal Win
// =====================================================
var checkTotalRank = function (anyPlayerCards) {
  // Input anyPlayerCards: an array of any player's cards drawn so far
  let counterCards = 0;
  let totalRank = 0;
  let encounteredAceBefore = 0;

  while (counterCards < anyPlayerCards.length) {
    let temp_card = anyPlayerCards[counterCards];

    if (temp_card.name === "Ace") {
      encounteredAceBefore += 1;
    }
    if (encounteredAceBefore === 2) {
      temp_card.rank = 1; //set second Ace card to have a rank of 1 instead of 11
    }
    totalRank += temp_card.rank;
    counterCards += 1;
  }

  return totalRank;
};

// check blackjack win
var checkBlackjackwin = function (anyPlayerCards) {
  // Input anyPlayerCards: an array of any player's cards drawn so far
  let card1 = anyPlayerCards[0];
  let card2 = anyPlayerCards[1];
  if (
    (card1.name === 10 && card2.name === "Ace") ||
    (card1.name === "Ace" && card2.name === 10)
  ) {
    return 1;
  } else {
    return 0;
  }
};

// Check against winning conditions
var checkWin = function (computerTotalRank, playerTotalRank) {
  // scenario 1 - tie
  if (computerTotalRank === playerTotalRank) {
    playerWin = 0.5; //set win to 0.5 if it is a tie/draw between computer and player
  }
  // scenario 2 - any player gets blackjack (ace + 10)
  // already checked in the new main fn
  else if (
    computerTotalRank === blackjackThreshold ||
    playerTotalRank === blackjackThreshold
  ) {
    return [playerWin, 0, 0];
  }
  //scenario 3 - any player gets more than 21
  else if (
    computerTotalRank > blackjackThreshold ||
    playerTotalRank > blackjackThreshold
  ) {
    if (computerTotalRank > blackjackThreshold) {
      playerWin = 1;
      computerBust = 1;
    } else {
      playerWin = 0;
      playerBust = 1;
    }
  } //scenario 4 - normal win
  else if (
    computerTotalRank > playerTotalRank ||
    computerTotalRank < playerTotalRank
  ) {
    if (computerTotalRank > playerTotalRank) {
      playerWin = 0;
    } else {
      playerWin = 1;
    }
  }

  return [playerWin, computerBust, playerBust];
};

// =====================================================
// Display Cards
// =====================================================
// display player cards to player
var displayPlayerCards = function (strWhichPlayer, anyPlayerCards) {
  let outputMsg = `${strWhichPlayer} drew: `;
  let cardCounter = 0;

  while (cardCounter < anyPlayerCards.length) {
    let temp_card = anyPlayerCards[cardCounter];
    // for cards before the last card
    if (cardCounter != anyPlayerCards.length - 1) {
      outputMsg += `${temp_card.name} of ${temp_card.suit}, `;
    }
    // for the last card
    else {
      outputMsg += `${temp_card.name} of ${temp_card.suit}.<br>`;
    }
    cardCounter += 1;
  }

  return outputMsg;
};

// keep track # cards drawn globally across rounds
let numCardsDrawnFromDeck = 4;

// =====================================================
// Main Gameplay Function
// =====================================================
var main = function (input) {
  // =================================
  // from shuffling deck to drawing 2 cards
  // =================================
  if (currentGameMode === modeCreateShuffleDeck) {
    cardDeck = createAndShuffleDeck();

    // deal 2 cards per player
    currentGameMode = modeDrawTwoCards;
    computerCards.push(cardDeck.pop());
    playerCards.push(cardDeck.pop());
    computerCards.push(cardDeck.pop());
    playerCards.push(cardDeck.pop());

    // check blackjack win
    let computerBlackjack = checkBlackjackwin(computerCards);
    let playerBlackjack = checkBlackjackwin(playerCards);
    if (computerBlackjack || playerBlackjack) {
      blackjackWin = 1;
      if (playerBlackjack) {
        playerWin = 1;
      }
    }

    // get total rank
    computerTotalRank = checkTotalRank(computerCards);
    playerTotalRank = checkTotalRank(playerCards);
    // check against winning conditions
    [playerWin, computerBust, playerBust] = checkWin(
      computerTotalRank,
      playerTotalRank
    );

    // update game mode for later
    // from drawing 2 cards to player hit/stand
    currentGameMode = "player_choice";

    // display player cards or win message to player
    let outputMsg = displayPlayerCards(strComputer, computerCards);
    outputMsg += `Computer points so far: ${computerTotalRank}.<br>`;
    outputMsg += displayPlayerCards(strPlayer, playerCards);
    outputMsg += `Player points so far: ${playerTotalRank}.<br>`;
    outputMsg +=
      "Would you like to 'hit' or 'stand'? Enter your choice and click submit.";
    return outputMsg;
  }

  // =================================
  // player hit/stand
  // =================================
  else if (currentGameMode === modePlayerChoice) {
    // after "input validation"
    if (input === "hit" || input === "stand") {
      // Player "stand"
      if (input === "stand") {
        // Computer/Dealer decides whether to hit/stand
        // Player Stand, Computer hit if computer total rank < 17
        if (computerTotalRank < dealerThreshold) {
          computerCards.push(cardDeck.pop());
          numCardsDrawnFromDeck += 1;
        }
        // Otherwise, Player Stand and Computer stand if computer total rank >= 17
        // Since both players stand => update game mode to evaluate final results later
        currentGameMode = modeEvaluateFinalResults;
      }
      // Player "hit"
      else {
        // Player hit first
        playerCards.push(cardDeck.pop());
        numCardsDrawnFromDeck += 1;

        // Player hit, then computer hit
        // draw additional card for computer
        if (computerTotalRank < dealerThreshold) {
          computerCards.push(cardDeck.pop());
          numCardsDrawnFromDeck += 1;
        }
        // Player hit, BUT computer stand
        // dont draw additional card for computer => no additional code in here
        // evalute results outside later
      }
    } else {
      return "Please input 'hit' or 'stand'";
    }

    // check against winning conditions
    // update total rank
    computerTotalRank = checkTotalRank(computerCards);
    playerTotalRank = checkTotalRank(playerCards);
    // update check against winning conditions
    [playerWin, computerBust, playerBust] = checkWin(
      computerTotalRank,
      playerTotalRank
    );

    // display player cards or win message to player
    let outputMsg = displayPlayerCards(strComputer, computerCards);
    outputMsg += `Computer points so far: ${computerTotalRank}.<br>`;
    outputMsg += displayPlayerCards(strPlayer, playerCards);
    outputMsg += `Player points so far: ${playerTotalRank}.<br>`;

    if (computerBust === 1) {
      currentGameMode = modeEvaluateFinalResults;
      outputMsg += "Player won! Computer busted. Click submit to continue.";
    } else if (playerBust === 1) {
      currentGameMode = modeEvaluateFinalResults;
      outputMsg += "Computer won! Player busted. Click submit to continue.";
    }
    // if player or computer didnt bust, see whether currentGameMode === modeEvaluateFinalResults
    else {
      if (currentGameMode === modeEvaluateFinalResults) {
        // player won
        if (playerWin === 1) {
          currentGameMode = modeEvaluateFinalResults;
          outputMsg += "Player won! Click submit to continue.";
        }
        // player tied
        else if (playerWin === 0.5) {
          currentGameMode = modeEvaluateFinalResults;
          outputMsg += "Player tied with Computer. Click submit to continue.";
        }
        // player lost
        else {
          currentGameMode = modeEvaluateFinalResults;
          outputMsg +=
            "Player lost to Computer. Try harder next time. Click submit to continue.";
        }
      }
      // if the game continues
      else {
        outputMsg +=
          "Would you like to 'hit' or 'stand'? Enter your choice and click submit.";
      }
    }
    return outputMsg;
  }

  // =================================
  // Check whether player wants to play a new round
  // =================================
  else if (currentGameMode === modeEvaluateFinalResults) {
    currentGameMode = modeWantToPlayGameAgain;

    let outputMsg =
      "Do you want to play the game of Blackjack again? Enter 'Yes' and click submit to start a new game.";
    return outputMsg;
  }

  // =================================
  // player wants to play a new round.
  // go back to create and shuffle deck
  // =================================
  else if (currentGameMode === modeWantToPlayGameAgain) {
    if (input === "yes") {
      currentGameMode = modeCreateShuffleDeck;
      numCardsDrawnFromDeck = 4;

      let outputMsg = "Let's play!";
      return outputMsg;
    }
    // if user did not input 'yes', tell user goodbye
    else {
      currentGameMode = modeGoodbye;

      let outputMsg =
        "Goodbye! Refresh the page to restart the game if you suddenly want to play the game again.";
      return outputMsg;
    }
  }
  // =================================
  // if mode persists at 'goodbye', tell user goodbye
  // =================================
  else if (currentGameMode === modeGoodbye) {
    let outputMsg =
      "Goodbye! Refresh the page to restart the game if you suddenly want to play the game again.";
    return outputMsg;
  }
  // =================================
  // safety code block to catch errors and restart the game
  // =================================
  else {
    currentGameMode = modeCreateShuffleDeck;
    numCardsDrawnFromDeck = 4;

    let outputMsg =
      "Error. You did not give me a proper input. I am restarting this game!";
    return outputMsg;
  }
};
