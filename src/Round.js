class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
  };
  returnCurrentCard() {
    return this.currentCard = this.deck.cards[0];
  };
};

module.exports = Round;
