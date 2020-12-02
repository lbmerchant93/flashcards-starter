const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('should contain a method that returns the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('when a guess is made a new Turn instance is created and should return feedback whether the guess is incorrect or correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.turns).to.equal(0);
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('when a turn is taken the turns count should increase by one whether it is correct or incorrect', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter');

    expect(round.turns).to.equal(1);

    round.takeTurn('spleen');

    expect(round.turns).to.equal(2);
  });

  it('when a turn is taken the next card in the deck becomes the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.currentCard).to.equal(card1);

    round.takeTurn('sea otter');
    round.returnCurrentCard();

    expect(round.currentCard).to.equal(card2);

    round.takeTurn('spleen');
    round.returnCurrentCard();

    expect(round.currentCard).to.equal(card3);
  });

  it('if the guess is incorrect, it should be stored (via the id) in an array of incorrectGuesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.incorrectGuesses).to.have.lengthOf(0);

    round.takeTurn('pug');
    round.returnCurrentCard();

    expect(round.incorrectGuesses).to.have.lengthOf(1);

    round.takeTurn('gallbladder');
    round.returnCurrentCard();

    expect(round.incorrectGuesses).to.have.lengthOf(1);

    round.takeTurn('watching Netflix');

    expect(round.incorrectGuesses).to.have.lengthOf(2);
  });

  it('should contain a method that calculates and returns the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.percentageCorrect).to.equal(0);

    round.takeTurn('sea otter');
    round.returnCurrentCard();
    round.calculatePercentCorrect();

    expect(round.percentageCorrect).to.equal(100);

    round.takeTurn('spleen');
    round.returnCurrentCard();
    round.calculatePercentCorrect();

    expect(round.percentageCorrect).to.equal(50);

    round.takeTurn('playing with bubble wrap');
    round.calculatePercentCorrect();

    expect(round.percentageCorrect).to.equal(66);
  });

  it('should contain a method that prints \'**Round over!** You answered <>% of the questions correctly!\'', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();
    round.takeTurn('sea otter');
    round.returnCurrentCard();
    round.takeTurn('spleen');
    round.returnCurrentCard();
    round.takeTurn('playing with bubble wrap');
    round.calculatePercentCorrect();

    expect(round.endRound()).to.equal('**Round over!** You answered 66% of the questions correctly!');
  });
});
