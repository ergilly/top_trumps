class Game {
  constructor(deck) {
    this.deck = [];
  }

  addCard(card){
    this.deck.push(card);
  }

}

module.exports = Game;
