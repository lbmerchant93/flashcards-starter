const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should contain a method that will return a user\'s guess', () => {
    expect(turn.returnGuess()).to.deep.equal('pug');
  });

  it('should contain a method that will return a Card object for the current card in play', () => {
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    });
  });

  it('should contain a method that will compare the guess to correctAnswer and return whether they match or not', () => {
    expect(turn.evaluateGuess()).to.deep.equal(false);
  });

  it('should contain a method that will return either \'incorrect!\' or \'correct!\' based on whether the guess is correct or not', () => {
    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.deep.equal('incorrect!');
  });
});
