const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card(1, 'What is Lucas\'s dog\'s name?', ['Gri', 'Narara', 'Alvin'], 'Narara');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', () => {
    expect(card.question).to.equal('What is Lucas\'s dog\'s name?');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['Gri', 'Narara', 'Alvin']);
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('Narara');
  });
});
