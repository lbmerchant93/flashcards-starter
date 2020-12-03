const chai = require('chai');
const expect = chai.expect;

// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should keep track of the currentRound', () => {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
