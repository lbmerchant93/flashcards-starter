const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const cards = prototypeQuestions.map(gameCard => {
      const card = new Card(gameCard.id, gameCard.question, gameCard.answers, gameCard.correctAnswer);
      return card;
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  }
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }
  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
