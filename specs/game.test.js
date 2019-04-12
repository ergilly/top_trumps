const Game = require('../game');
const Card = require('../card');

describe ('Game', () => {

  let top_trumps;
  let deck = []
  let superman;
  let scarlet_witch;
  let black_widow;
  let the_flash;
  let wonder_woman;
  let batman;

  beforeEach(() => {
    superman = new Card('Superman', 6, 9, 7)
    scarlet_witch = new Card('Scarlet Witch', 7, 10, 5)
    black_widow = new Card('Black Widow', 8, 6, 9)
    the_flash = new Card('The Flash', 7, 4, 10)
    wonder_woman = new Card('Wonder Woman', 8, 7, 5)
    batman = new Card('Batman', 10, 5, 6)
    top_trumps = new Game(deck)
    top_trumps.addCard(superman);
    top_trumps.addCard(scarlet_witch);
    top_trumps.addCard(black_widow);
    top_trumps.addCard(the_flash);
    top_trumps.addCard(wonder_woman);
    top_trumps.addCard(batman);
  });
  test('game should be able to add cards to deck', () => {
    top_trumps.addCard(superman);
    expect(top_trumps.deck.length).toBe(7);
  })
  test('game should have a deck', () => {
    expect(top_trumps.deck.length).toBe(6);
  })

  xtest('should be able to deal cards evenly to players', () => {

  });
  xtest('should be able to check if one player has all the cards', () => {

  });
  xtest('should be able to compare the attributes chosen by the players', () => {

  });
  xtest('should be able to give both cards to the player that wins the round', () => {

  })

});
