const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should contain a method that returns the current card being played', () => {
    expect(round.deck).to.deep.equal(deck);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('when a guess is made a new Turn instance is created and should return feedback whether the guess is incorrect or correct', () => {

    expect(round.turns).to.equal(0);
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('when a turn is taken the turns count should increase by one whether it is correct or incorrect', () => {

    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter');

    expect(round.turns).to.equal(1);

    round.takeTurn('spleen');

    expect(round.turns).to.equal(2);
  });

  it('when a turn is taken the next card in the deck becomes the current card', () => {

    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('sea otter');

    expect(round.returnCurrentCard()).to.equal(card2);

    round.takeTurn('spleen');

    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('if the guess is incorrect, it should be stored (via the id) in an array of incorrectGuesses', () => {
    expect(round.incorrectGuesses).to.have.lengthOf(0);

    round.takeTurn('pug');

    expect(round.incorrectGuesses).to.have.lengthOf(1);

    round.takeTurn('gallbladder');

    expect(round.incorrectGuesses).to.have.lengthOf(1);

    round.takeTurn('watching Netflix');

    expect(round.incorrectGuesses).to.have.lengthOf(2);
  });

  it('should contain a method that calculates and returns the percentage of correct guesses', () => {
    expect(round.percentageCorrect).to.equal(0);

    round.takeTurn('sea otter');
    round.calculatePercentCorrect();

    expect(round.percentageCorrect).to.equal(100);

    round.takeTurn('spleen');
    round.calculatePercentCorrect();

    expect(round.percentageCorrect).to.equal(50);

    round.takeTurn('playing with bubble wrap');
    round.calculatePercentCorrect();

    expect(round.percentageCorrect).to.equal(66);
  });

  it('should contain a method that prints \'**Round over!** You answered <>% of the questions correctly!\'', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('playing with bubble wrap');
    round.calculatePercentCorrect();

    expect(round.endRound()).to.equal('**Round over!** You answered 66% of the questions correctly!');
  });
});
