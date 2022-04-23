// Variables accessible across game rounds
let computerCard1 = "";
let computerCard2 = "";
let computerCard3 = "";
let playerCard1 = "";
let playerCard2 = "";
let playerCard3 = "";
let playerWin = "";
let blackjackWin = "";
let computerBust = "";
let playerBust = "";

const gameModes = ["create_shuffle_deck", "draw_two_cards", "player_choice"];
const playerChoices = ["hit", "stand"]; //hit = draw a card; stand = end a turn
const dealerThreshold = 17;
const blackjackThreshold = 21;

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
let currentGameMode = "create_shuffle_deck";
var createAndShuffleDeck = function () {
  let cardDeck = makeDeck();
  cardDeck = shuffleCards(cardDeck);
  return cardDeck;
};
let cardDeck = createAndShuffleDeck();

// second ACE is a '1' instead of '11'
var secondAceOne = function (card1, card2) {
  if ((card1.rank === 11) & (card2.rank === 11)) {
    card2.rank = 1;
  }
  return [card1, card2];
};

// Deal 2 cards per player -> computer and player
var dealTwoCardsPerPlayer = function (cardDeck) {
  let computerCard1 = cardDeck.slice(-1)[0];
  let playerCard1 = cardDeck.slice(-2, -1)[0];
  let computerCard2 = cardDeck.slice(-3, -2)[0];
  let playerCard2 = cardDeck.slice(-4, -3)[0];

  // second ACE is a '1' instead of '11'
  [computerCard1, computerCard2] = secondAceOne(computerCard1, computerCard2);
  [playerCard1, playerCard2] = secondAceOne(playerCard1, playerCard2);

  return [computerCard1, computerCard2, playerCard1, playerCard2];
};

var checkTotalRank = function (card1, card2) {
  const totalRank = card1.rank + card2.rank;
  return totalRank;
};

// Analyse blackjack winning conditions
var checkBlackjackWin = function (
  computerCard1,
  computerCard2,
  playerCard1,
  playerCard2
) {
  const computerTotalRank = checkTotalRank(computerCard1, computerCard2);
  const playerTotalRank = checkTotalRank(playerCard1, playerCard2);
  let playerWin = "";
  let blackjackWin = 0;
  let computerBust = 0;
  let playerBust = 0;

  // scenario 1 - tie
  if (computerTotalRank === playerTotalRank) {
    playerWin = 0.5; //set win to 0.5 if it is a tie/draw between computer and player
  } // scenario 2 - any player gets blackjack/21
  else if (
    computerTotalRank === blackjackThreshold ||
    playerTotalRank === blackjackThreshold
  ) {
    blackjackWin = 1;

    if (computerTotalRank === blackjackThreshold) {
      playerWin = 0;
    } else {
      playerWin = 1;
    }
  } //scenario 3 - any player gets more than 21
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

  return [playerWin, blackjackWin, computerBust, playerBust];
};

// display player cards to player
var displayPlayerCards = function (playerCard1, playerCard2) {
  const totalRank = checkTotalRank(playerCard1, playerCard2);

  let outputMsg =
    "You drew " +
    `${playerCard1.name} of ${playerCard1.suit} and ${playerCard2.name} of ${playerCard2.suit}. <br>` +
    `Points so far ${totalRank}. <br>` +
    "Would you like to 'hit' or 'stand'? Enter your choice and click submit.";

  return outputMsg;
};

// display computer, player cards
var displayComputerPlayerCards = function (
  computerCard1,
  computerCard2,
  playerCard1,
  playerCard2
) {
  const totalRankcomputer = checkTotalRank(computerCard1, computerCard2);
  const totalRankPlayer = checkTotalRank(playerCard1, playerCard2);

  let outputMsg =
    "Computer hand : " +
    `${computerCard1.name} of ${computerCard1.suit} and ${computerCard2.name} of ${computerCard2.suit}. <br>` +
    `Computer points so far ${totalRankcomputer}. <br>` +
    "Player hand : " +
    `${playerCard1.name} of ${playerCard1.suit} and ${playerCard2.name} of ${playerCard2.suit}. <br>` +
    `Player points so far ${totalRankPlayer}. <br>`;

  return outputMsg;
};

var winMsg = function (
  playerWin,
  blackjackWin,
  computerBust,
  playerBust,
  computerCard1,
  computerCard2,
  playerCard1,
  playerCard2
) {
  let outputMsg = displayComputerPlayerCards(
    computerCard1,
    computerCard2,
    playerCard1,
    playerCard2
  );

  // player did not win
  if (playerWin === 0) {
    // computer black jack win
    if (blackjackWin === 1) {
      outputMsg += "Computer wins by black jack!";
      return outputMsg;
    }
    // player bust
    else if (playerBust === 1) {
      outputMsg += "Player busted. Computer wins!";
      return outputMsg;
    }
    // computer normal win => just show the hands of computer and player
    else {
      return outputMsg;
    }
  }
  // player won
  else if (playerWin === 1) {
    // player black jack win
    if (blackjackWin === 1) {
      outputMsg += "Player wins by black jack!";
      return outputMsg;
    }
    // computer bust
    else if (computerBust === 1) {
      outputMsg += "Computer busted. Player wins!";
      return outputMsg;
    }
    // player normal win => just show the hands of computer and player
    else {
      return outputMsg;
    }
  }
  // tie
  else if (playerWin === 0.5) {
    outputMsg += "It is a draw!";
    return outputMsg;
  }
};

// keep track # cards drawn
let numCardsDrawnFromDeck = 4;
// draw additional card
var drawAdditionalCard = function (cardDeck) {
  let additionalCard = cardDeck.slice(
    -numCardsDrawnFromDeck - 1,
    -numCardsDrawnFromDeck
  )[0];
  numCardsDrawnFromDeck += 1;
  return [additionalCard, numCardsDrawnFromDeck];
};

var main = function (input) {
  // from shuffling deck to drawing 2 cards
  if (currentGameMode === "create_shuffle_deck") {
    // deal 2 cards per player
    currentGameMode = "draw_two_cards";
    [
      computerCard1,
      computerCard2,
      playerCard1,
      playerCard2
    ] = dealTwoCardsPerPlayer(cardDeck);

    // check against winning conditions
    [playerWin, blackjackWin, computerBust, playerBust] = checkBlackjackWin(
      computerCard1,
      computerCard2,
      playerCard1,
      playerCard2
    );

    // display player cards or win message to player
    return winMsg(
      playerWin,
      blackjackWin,
      computerBust,
      playerBust,
      computerCard1,
      computerCard2,
      playerCard1,
      playerCard2
    ); //outputMsg
  }

  // from drawing 2 cards to player hit/stand
  else if (currentGameMode === "draw_two_cards") {
    let additionalCard = "";
    // input validation
    if (input != "hit" || input != "stand") {
      return "Please input 'hit' or 'stand'";
    }
    // after input validation
    else {
      currentGameMode = "player_choice";

      if (input === "stand") {
        // Computer/Dealer decides whether to hit/stand

        // Player Stand, Computer hit if computer total rank < 17
        if (computerCard1.rank + computerCard2.rank < dealerThreshold) {
          [computerCard3, numCardsDrawnFromDeck] = drawAdditionalCard(cardDeck);
        }
        // Otherwise, Player Stand and Computer stand if computer total rank >= 17
        // Since both players stand => dont draw additional card
      }
      // Player's input === "hit"
      else {
        // Player hit first
        [playerCard3, numCardsDrawnFromDeck] = drawAdditionalCard(cardDeck);
        // Player hit, then computer hit
        // draw additional card for computer
        if (computerCard1.rank + computerCard2.rank < dealerThreshold) {
          [computerCard3, numCardsDrawnFromDeck] = drawAdditionalCard(cardDeck);
        }
        // Player hit, BUT computer stand
        // dont draw additional card for computer
      }

      // check against winning conditions
    }
  }

  // return outputMsg;
};

/* Unit Test Results
// makeDeck()
(56) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

0: {rank: 1, suit: 'clubs', name: 1}
1: {rank: 2, suit: 'clubs', name: 2}
2: {rank: 3, suit: 'clubs', name: 3}
3: {rank: 4, suit: 'clubs', name: 4}
4: {rank: 5, suit: 'clubs', name: 5}
5: {rank: 6, suit: 'clubs', name: 6}
6: {rank: 7, suit: 'clubs', name: 7}
7: {rank: 8, suit: 'clubs', name: 8}
8: {rank: 9, suit: 'clubs', name: 9}
9: {rank: 10, suit: 'clubs', name: 10}
10: {rank: 10, suit: 'clubs', name: 'Jack'}
11: {rank: 10, suit: 'clubs', name: 'Queen'}
12: {rank: 10, suit: 'clubs', name: 'King'}
13: {rank: 11, suit: 'clubs', name: 'Ace'}
14: {rank: 1, suit: 'spades', name: 1}
15: {rank: 2, suit: 'spades', name: 2}
16: {rank: 3, suit: 'spades', name: 3}
17: {rank: 4, suit: 'spades', name: 4}
18: {rank: 5, suit: 'spades', name: 5}
19: {rank: 6, suit: 'spades', name: 6}
20: {rank: 7, suit: 'spades', name: 7}
21: {rank: 8, suit: 'spades', name: 8}
22: {rank: 9, suit: 'spades', name: 9}
23: {rank: 10, suit: 'spades', name: 10}
24: {rank: 10, suit: 'spades', name: 'Jack'}
25: {rank: 10, suit: 'spades', name: 'Queen'}
26: {rank: 10, suit: 'spades', name: 'King'}
27: {rank: 11, suit: 'spades', name: 'Ace'}
28: {rank: 1, suit: 'hearts', name: 1}
29: {rank: 2, suit: 'hearts', name: 2}
30: {rank: 3, suit: 'hearts', name: 3}
31: {rank: 4, suit: 'hearts', name: 4}
32: {rank: 5, suit: 'hearts', name: 5}
33: {rank: 6, suit: 'hearts', name: 6}
34: {rank: 7, suit: 'hearts', name: 7}
35: {rank: 8, suit: 'hearts', name: 8}
36: {rank: 9, suit: 'hearts', name: 9}
37: {rank: 10, suit: 'hearts', name: 10}
38: {rank: 10, suit: 'hearts', name: 'Jack'}
39: {rank: 10, suit: 'hearts', name: 'Queen'}
40: {rank: 10, suit: 'hearts', name: 'King'}
41: {rank: 11, suit: 'hearts', name: 'Ace'}
42: {rank: 1, suit: 'diamonds', name: 1}
43: {rank: 2, suit: 'diamonds', name: 2}
44: {rank: 3, suit: 'diamonds', name: 3}
45: {rank: 4, suit: 'diamonds', name: 4}
46: {rank: 5, suit: 'diamonds', name: 5}
47: {rank: 6, suit: 'diamonds', name: 6}
48: {rank: 7, suit: 'diamonds', name: 7}
49: {rank: 8, suit: 'diamonds', name: 8}
50: {rank: 9, suit: 'diamonds', name: 9}
51: {rank: 10, suit: 'diamonds', name: 10}
52: {rank: 10, suit: 'diamonds', name: 'Jack'}
53: {rank: 10, suit: 'diamonds', name: 'Queen'}
54: {rank: 10, suit: 'diamonds', name: 'King'}
55: {rank: 11, suit: 'diamonds', name: 'Ace'}
length: 56
[[Prototype]]: Array(0)





// shuffleCards(cardDeck)
0: {rank: 8, suit: 'spades', name: 8}
1: {rank: 7, suit: 'hearts', name: 7}
2: {rank: 8, suit: 'hearts', name: 8}
3: {rank: 5, suit: 'spades', name: 5}
4: {rank: 3, suit: 'diamonds', name: 3}
5: {rank: 3, suit: 'hearts', name: 3}
6: {rank: 1, suit: 'spades', name: 1}
7: {rank: 10, suit: 'hearts', name: 10}
8: {rank: 11, suit: 'clubs', name: 'Ace'}
9: {rank: 10, suit: 'hearts', name: 'King'}
10: {rank: 6, suit: 'spades', name: 6}
11: {rank: 5, suit: 'clubs', name: 5}
12: {rank: 10, suit: 'clubs', name: 'Jack'}
13: {rank: 2, suit: 'hearts', name: 2}
14: {rank: 10, suit: 'clubs', name: 10}
15: {rank: 9, suit: 'hearts', name: 9}
16: {rank: 4, suit: 'diamonds', name: 4}
17: {rank: 10, suit: 'hearts', name: 'Jack'}
18: {rank: 5, suit: 'diamonds', name: 5}
19: {rank: 10, suit: 'spades', name: 'King'}
20: {rank: 10, suit: 'spades', name: 'Queen'}
21: {rank: 11, suit: 'spades', name: 'Ace'}
22: {rank: 11, suit: 'diamonds', name: 'Ace'}
23: {rank: 6, suit: 'diamonds', name: 6}
24: {rank: 10, suit: 'diamonds', name: 'King'}
25: {rank: 8, suit: 'clubs', name: 8}
26: {rank: 10, suit: 'diamonds', name: 'Jack'}
27: {rank: 4, suit: 'clubs', name: 4}
28: {rank: 3, suit: 'spades', name: 3}
29: {rank: 7, suit: 'diamonds', name: 7}
30: {rank: 5, suit: 'hearts', name: 5}
31: {rank: 10, suit: 'clubs', name: 'King'}
32: {rank: 7, suit: 'spades', name: 7}
33: {rank: 1, suit: 'diamonds', name: 1}
34: {rank: 2, suit: 'diamonds', name: 2}
35: {rank: 9, suit: 'spades', name: 9}
36: {rank: 11, suit: 'hearts', name: 'Ace'}
37: {rank: 10, suit: 'diamonds', name: 'Queen'}
38: {rank: 10, suit: 'spades', name: 10}
39: {rank: 3, suit: 'clubs', name: 3}
40: {rank: 2, suit: 'spades', name: 2}
41: {rank: 10, suit: 'hearts', name: 'Queen'}
42: {rank: 4, suit: 'hearts', name: 4}
43: {rank: 9, suit: 'clubs', name: 9}
44: {rank: 6, suit: 'clubs', name: 6}
45: {rank: 8, suit: 'diamonds', name: 8}
46: {rank: 4, suit: 'spades', name: 4}
47: {rank: 7, suit: 'clubs', name: 7}
48: {rank: 1, suit: 'clubs', name: 1}
49: {rank: 2, suit: 'clubs', name: 2}
50: {rank: 6, suit: 'hearts', name: 6}
51: {rank: 10, suit: 'diamonds', name: 10}
52: {rank: 10, suit: 'clubs', name: 'Queen'}
53: {rank: 1, suit: 'hearts', name: 1}
54: {rank: 9, suit: 'diamonds', name: 9}
55: {rank: 10, suit: 'spades', name: 'Jack'}
length: 56
[[Prototype]]: Array(0)
*/
