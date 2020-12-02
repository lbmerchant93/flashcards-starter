const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentageCorrect = 0;
  };
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  };
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turns]);
    currentTurn.evaluateGuess();
    currentTurn.evaluateGuess() === false ? this.incorrectGuesses.push(this.deck.cards[this.turns].id) : this.incorrectGuesses;
    this.turns += 1;
    return currentTurn.giveFeedback();
  };
  calculatePercentCorrect() {
    this.percentageCorrect = Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  };
  endRound() {
    //will need to delete this comment and either the console.log or the return below depending on what is needed later
    console.log(`**Round over!** You answered ${this.percentageCorrect}% of the questions correctly!`);
    return `**Round over!** You answered ${this.percentageCorrect}% of the questions correctly!`;
  };
};

module.exports = Round;
