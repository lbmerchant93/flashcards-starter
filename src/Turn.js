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
    if(this.guess === this.card.correctAnswer) {
      return this.guessEvaluation = true;
    } else {
      return this.guessEvaluation = false;
    };
  };
  giveFeedback() {
    if(this.guessEvaluation === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    };
  };
};

module.exports = Turn;
