const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turns]);
    currentTurn.evaluateGuess();
    currentTurn.evaluateGuess() === false ? this.incorrectGuesses.push(this.deck.cards[this.turns].id) : this.incorrectGuesses;
    this.turns += 1;
    return currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  }
  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Press control + c to exit game.`);
  }
}

module.exports = Round;
