const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentageCorrect = 0;
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
  calculatePercentCorrect() {
    this.percentageCorrect = Math.floor(((this.turns - this.incorrectGuesses.length) /this.turns) * 100);
  };
};

module.exports = Round;
