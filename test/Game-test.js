const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game, round, deck, card1, card2;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    deck = new Deck([card1, card2]);
    round1 = new Round(deck);
    game = new Game(round1);
  });

  it('should keep track of the currentRound', () => {
    console.log(game.currentRound);
    expect(game.currentRound).to.equal(round1);
  });
});
