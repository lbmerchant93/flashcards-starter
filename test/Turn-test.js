const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Lucas\'s dog\'s name?', ['Gri', 'Narara', 'Alvin'], 'Narara');
    turn = new Turn('Gri', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should contain a method that will return a user\'s guess', () => {
    expect(turn.returnGuess()).to.deep.equal('Gri');
  });

  it('should contain a method that will return a Card object for the current card in play', () => {
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: 'What is Lucas\'s dog\'s name?',
      answers: ['Gri', 'Narara', 'Alvin'],
      correctAnswer: 'Narara'
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
