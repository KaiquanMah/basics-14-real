// From codingbasics.rocketacademy.co/modules/3-logic-and-control-flow/3.6-creating-objects-with-loops#card-deck-generation-code
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === 1) {
        cardName = "ace";
      } else if (cardName === 11) {
        cardName = "jack";
      } else if (cardName === 12) {
        cardName = "queen";
      } else if (cardName === 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// Make the Deck outside the main function
let inputCardDeck = makeDeck();

// from https://codingbasics.rocketacademy.co/modules/1-data-types-structures-and-manipulations/1.4-objects#card-shuffling
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (inputCardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < inputCardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(inputCardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = inputCardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = inputCardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    inputCardDeck[currentIndex] = randomCard;
    inputCardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return inputCardDeck;
};

// ========================================
// Day 7 Exercise
// var moarCardsSingleCardMain = function (inputCardDeck) {
var moarCardsSingleCardMain = function () {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  // From input cardDeck, shuffle card bojects
  let shuffledCardDeck = shuffleCards(inputCardDeck);
  // choose random card and return to user
  const randomNumPerPlay = getRandomIndex(shuffledCardDeck.length);
  // console.log(randomNumPerPlay);
  return shuffledCardDeck[randomNumPerPlay];
};

var suitNameOutput = function (computerCard, playerCard) {
  // Construct an output string to communicate which cards were drawn
  const myOutputValue =
    "Computer had " +
    computerCard.name +
    " of " +
    computerCard.suit +
    ". Player had " +
    playerCard.name +
    " of " +
    playerCard.suit +
    ". ";

  return myOutputValue;
};

var moarCardsLowCardMain = function () {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  let shuffledCardDeck = shuffleCards(inputCardDeck);
  // Get cards for computer and player
  const computerCard = shuffledCardDeck.slice(-1)[0]; //slice returns an array => use [0] to access the sole string element within the array
  const playerCard = shuffledCardDeck.slice(-2, -1)[0]; //get the 2nd last element only

  // Construct output string
  let myOutputValue = suitNameOutput(computerCard, playerCard);

  // Compare computer and player cards by rank attribute
  // If computer card rank is LOWER than player card rank, computer wins
  if (computerCard.rank < playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.";
    // Else if computer card rank is GREATER than player card rank, player wins
  } else if (computerCard.rank > playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.";
  }

  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function () {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  let shuffledCardDeck = shuffleCards(inputCardDeck);
  // Get cards for computer and player
  const computerCard = shuffledCardDeck.slice(-1)[0]; //slice returns an array => use [0] to access the sole string element within the array
  const playerCard = shuffledCardDeck.slice(-2, -1)[0]; //get the 2nd last element only

  // Construct output string
  let myOutputValue = suitNameOutput(computerCard, playerCard);

  // Compare computer and player cards by rank attribute
  // if either computer or player has the QUEEN card => they win
  if (computerCard.name === "queen" || playerCard.name === "queen") {
    if (computerCard.name === playerCard.name) {
      myOutputValue = myOutputValue + "It's a tie.EXIT_1";
    } else if (computerCard.name === "queen") {
      myOutputValue = myOutputValue + "Computer wins.EXIT_2";
    } else if (playerCard.name === "queen") {
      myOutputValue = myOutputValue + "Player wins!EXIT_3";
    }
  }
  // If computer card rank is LOWER than player card rank
  // OR COMPUTER HAS A QUEEN, computer wins
  else if (computerCard.rank < playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.EXIT_4";
    // Else if computer card rank is GREATER than player card rank
    // OR PLAYER HAS A QUEEN, player wins
  } else if (computerCard.rank > playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!EXIT_5";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.EXIT_6";
  }

  return myOutputValue;
};
// unit test
// Computer had queen of spades. Player had 10 of spades. Computer wins.EXIT_2
// Computer had 6 of clubs. Player had jack of spades. Computer wins.EXIT_4
// Computer had 7 of clubs. Player had 4 of diamonds. Player wins!EXIT_5
// let numCardsUserWants = 1;

// Helper function to output 1/more cards drawn by a player
var outputPlayerDeck = function (deck) {
  let strOutput = `<br>You drew ${deck.length} cards : `;
  for (i = 0; i < deck.length; i++) {
    let temp_card = deck[i];
    strOutput += `${temp_card.name} of ${temp_card.suit}, `;
  }
  return strOutput;
};

var moarCardsLowCardHandsMain = function (numCardsUserWants) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  let shuffledCardDeck = shuffleCards(inputCardDeck);
  // test output => return numCardsUserWants; 3 => if a user inputs 3 in the inputbox

  // input validation
  if (numCardsUserWants === "") {
    numCardsUserWants = 1;
  } else if (isNaN(numCardsUserWants) || numCardsUserWants < 1) {
    return "Please input a positive number of cards starting from 1.";
  }

  // Get cards for computer and player
  const computerCard = shuffledCardDeck.slice(-1)[0]; //slice returns an array => use [0] to access the sole string element within the array
  let playerDeck = shuffledCardDeck.slice(-Number(numCardsUserWants) - 1, -1); //get the 2nd last 'numCardsUserWants' elements only (just before the last card)
  // return playerCard; //=> 1 => [object Object]
  // => 2 => [object Object],[object Object]
  // => blank => [object Object]
  const outputPlayer = outputPlayerDeck(playerDeck);

  // find the player card with the lowest rank
  let counterPlayerCard = 0;
  let lowestRankSoFar = 99; // set some impossibly high 'rank' number
  let lowestCardSoFar = "";
  let temp_card = "";
  while (counterPlayerCard < numCardsUserWants) {
    temp_card = playerDeck[counterPlayerCard];
    if (counterPlayerCard === 0) {
      lowestRankSoFar = temp_card.rank;
      lowestCardSoFar = temp_card;
      // Iterate through player's cards to update the lowest ranked card so far
    } else if (temp_card.rank < lowestRankSoFar) {
      lowestRankSoFar = temp_card.rank;
      lowestCardSoFar = temp_card;
    }
    // make no updates if evaluated player's card rank is higher than previous cards
    counterPlayerCard += 1;
  }

  // update playerCard from an array of cards to the sole player card with the lowest rank
  let playerCard = temp_card;
  // Construct output string
  let myOutputValue = suitNameOutput(computerCard, playerCard);

  // Compare computer and player cards by rank attribute
  // if either computer or player has the QUEEN card => they win
  if (computerCard.name === "queen" || playerCard.name === "queen") {
    if (computerCard.name === playerCard.name) {
      myOutputValue = myOutputValue + "It's a tie.EXIT_1" + outputPlayer;
    } else if (computerCard.name === "queen") {
      myOutputValue = myOutputValue + "Computer wins.EXIT_2" + outputPlayer;
    } else if (playerCard.name === "queen") {
      myOutputValue = myOutputValue + "Player wins!EXIT_3" + outputPlayer;
    }
  }
  // If computer card rank is LOWER than player card rank
  // OR COMPUTER HAS A QUEEN, computer wins
  else if (computerCard.rank < playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "Computer wins.EXIT_4" + outputPlayer;
    // Else if computer card rank is GREATER than player card rank
    // OR PLAYER HAS A QUEEN, player wins
  } else if (computerCard.rank > playerCard.rank) {
    myOutputValue = myOutputValue + "Player wins!EXIT_5" + outputPlayer;
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "It's a tie.EXIT_6" + outputPlayer;
  }

  return myOutputValue;
};
// Computer had king of clubs. Player had queen of spades. Player wins!EXIT_3
// You drew 1 cards : queen of spades,
// Computer had 7 of hearts. Player had 10 of clubs. Computer wins.EXIT_4
// You drew 6 cards : king of spades, jack of spades, 8 of clubs, 5 of diamonds, 4 of clubs, 10 of clubs,
// Computer had 4 of clubs. Player had ace of diamonds. Player wins!EXIT_5
// You drew 2 cards : 2 of diamonds, ace of diamonds,
// Computer had king of clubs. Player had king of spades. It's a tie.EXIT_6
// You drew 3 cards : ace of hearts, ace of diamonds, king of spades,

var suitStringToEmoji = function (suitString) {
  let suitEmoji = "";
  if (suitString === "hearts") {
    suitEmoji = "❤";
  } else if (suitString === "diamonds") {
    suitEmoji = "💎";
  } else if (suitString === "clubs") {
    suitEmoji = "♣️";
  } else if (suitString === "spades") {
    suitEmoji = "♠️";
  }

  return suitEmoji;
};

var nicerSuitNameOutput = function (computerCard, playerCard) {
  // update suit from string to emoji
  const computerSuit = suitStringToEmoji(computerCard.suit);
  const playerSuit = suitStringToEmoji(playerCard.suit);

  // Construct an output string to communicate which cards were drawn
  const myOutputValue =
    "Computer drew : <br>" +
    computerCard.name +
    " of " +
    computerSuit +
    ". <br><br>Player drew: <br>" +
    playerCard.name +
    " of " +
    playerSuit +
    ". <br><br>";

  return myOutputValue;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.

  // using 'moarCardsLowCardMain' function as a base
  //before beautifying the output
  let shuffledCardDeck = shuffleCards(inputCardDeck);
  // Get cards for computer and player
  const computerCard = shuffledCardDeck.slice(-1)[0]; //slice returns an array => use [0] to access the sole string element within the array
  const playerCard = shuffledCardDeck.slice(-2, -1)[0]; //get the 2nd last element only

  // Construct output string
  let myOutputValue = nicerSuitNameOutput(computerCard, playerCard);

  // Compare computer and player cards by rank attribute
  // If computer card rank is LOWER than player card rank, computer wins
  if (computerCard.rank < playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue =
      myOutputValue +
      `${computerCard.rank} of ${computerCard.suit}️ beats ${playerCard.rank} of ${playerCard.suit}! Computer wins.`;
    // Else if computer card rank is GREATER than player card rank, player wins
  } else if (computerCard.rank > playerCard.rank) {
    myOutputValue =
      myOutputValue +
      `${playerCard.rank} of ${playerCard.suit}️ beats ${computerCard.rank} of ${computerCard.suit}! Player wins!`;
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue =
      myOutputValue +
      `It's a tie between ${computerCard.rank} of ${computerCard.suit}️ and ${playerCard.rank} of ${playerCard.suit}.`;
  }

  return myOutputValue;
};

// Computer drew :
// jack of ❤.

// Player drew:
// 9 of 💎.

// 9 of diamonds️ beats 11 of hearts! Player wins!

// =================MORE COMFORTABLE======================
var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// =================CHATBOT====================
var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
// ========================================
