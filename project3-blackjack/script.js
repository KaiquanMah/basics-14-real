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
      } else if (iCounterPerSuit === 14) {
        currentCardName = "Ace";
        currentCardRank = 11; //how to show 1 or 11?
      }
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

var main = function (input) {
  // Create Deck > Shuffle Cards
  let objs = makeDeck();
  objs = shuffleCards(objs);

  return objs;
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
