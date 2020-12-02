class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.guessEvaluation;
  };
  returnGuess() {
    return this.guess;
  };
  returnCard() {
    return this.card;
  };
  evaluateGuess() {
    return (this.guess === this.card.correctAnswer ? this.guessEvaluation = true : false);
  };
  giveFeedback() {
    return (this.guessEvaluation === true ? 'correct!' : 'incorrect!');
  };
};

module.exports = Turn;
