const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turns = 0;
  };
  returnCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns];
  };
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.currentCard);
    currentTurn.evaluateGuess();
    return currentTurn.giveFeedback();
  };
};

module.exports = Round;
