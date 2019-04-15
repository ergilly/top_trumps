class Player {
  constructor(num, hand) {
    this.number = num;
    this.hand = [];
  }

  addCardToHand(card){
    this.hand.push(card)
  }

  removeCardFromHand(){
    return this.hand.shift();
  }

  playCard(game){
    game.addCard(this.removeCardFromHand());
  }

  pickAttribute(attribute){
    if(attribute == 'intelligence'){
      return 1;
    } else if (attribute == 'strength') {
      return 2;
    } else {
      return 3;
    }
  }
}

module.exports = Player;
