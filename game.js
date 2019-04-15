class Game {
  constructor(deck) {
    this.deck = [];
  }

  addCard(card) {
    this.deck.push(card);
  }

  removeCardFromDeck() {
    return this.deck.shift();
  }

  deal(player1, player2) {
    let deckSize = this.deck.length
    for (var i = 0; i < deckSize / 2; i++) {
      player1.addCardToHand(this.removeCardFromDeck());
      player2.addCardToHand(this.removeCardFromDeck());
    };
  };

  checkWinner(player) {
    return (player.hand.length == 6 ? true : false)
  };

  compare(attribute, player1) {
    let attributePicked = player1.pickAttribute(attribute);
    if (attributePicked == 1) {
      if (this.deck[0].intelligence > this.deck[1].intelligence) {
        return 'player1';
      } else {
        return 'player2';
      }
    } else if (attributePicked == 2) {
      if (this.deck[0].strength > this.deck[1].strength) {
        return 'player1';
      } else {
        return 'player2';
      }
    } else {
      if (this.deck[0].agility > this.deck[1].agility) {
        return 'player1';
      } else {
        return 'player2';
      }
    }
  }

  giveCardsToWinner(winner, player1, player2) {
    if (winner == 'player1') {
      player1.addCardToHand(this.removeCardFromDeck());
      player1.addCardToHand(this.removeCardFromDeck());
    } else {
      player2.addCardToHand(this.removeCardFromDeck());
      player2.addCardToHand(this.removeCardFromDeck());

    }
  }
  //player1 is the player who's turn it is
  playgame(attribute, player1, player2) {
    if (this.checkWinner(player1) == true) {
      return 'Player 1 Wins'
    } else if (this.checkWinner(player2) == true) {
      return 'Player 2 Wins'
    } else {
      player1.playCard(this);
      player2.playCard(this);
      console.log(`${this.compare(attribute, player1)} wins the round`);
      this.giveCardsToWinner(this.compare(attribute, player1), player1, player2);

    }
  }
}



module.exports = Game;
