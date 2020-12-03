const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Lucas\'s dog\'s name?', ['Gri', 'Narara', 'Alvin'], 'Narara');
    card2 = new Card(2, 'What is Lucas\'s sprite animal?', ['wolf', 'tiger', 'stag'], 'wolf');
    card3 = new Card(3, 'What is Lucas\'s favorite crystal?', ['amethyst', 'opal', 'smokey quartz'], 'smokey quartz');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of Card objects', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should contain a method that will return how many Cards are in the Deck', () => {
    expect(deck.countCards()).to.deep.equal(3);
  });
});
