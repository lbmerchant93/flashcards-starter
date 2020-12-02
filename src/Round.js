const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns];
  };
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.currentCard);
    currentTurn.evaluateGuess();
    currentTurn.evaluateGuess() === false ? this.incorrectGuesses.push(this.currentCard.id) : this.incorrectGuesses;
    this.turns += 1;
    return currentTurn.giveFeedback();
  };
};

module.exports = Round;
