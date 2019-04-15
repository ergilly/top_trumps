const Player = require('../player');
const Card = require('../card');
const Game = require('../game');

describe('Player', () => {

  let player1;
  let player2;
  let superman;
  let top_trumps;
  let deck = [];

  beforeEach(() => {
    top_trumps = new Game(deck)
    player1 = new Player(1, []);
    player2 = new Player(2, []);
    superman = new Card('Superman', 6, 9, 7)
  });

  test('Player should have a number', () => {
    expect(player1.number).toBe(1);
  })
  test('Player should have a hand', () => {
    expect(player2.hand).toEqual([]);
  })

  test('player should be able to add cards to hand', () => {
    player1.addCardToHand(superman);
    expect(player1.hand.length).toBe(1);
  })
  test('player should be able to remove top card from hand', () => {
    player1.addCardToHand(superman);
    player1.removeCardFromHand();
  })

  test('player should be able play the top card from their hand', () => {
    player1.playCard(top_trumps);
  });
  test('player should be able to pick an attribute to play', () => {
    expect(player1.pickAttribute('strength')).toBe(2);


  });

})
