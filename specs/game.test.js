const Game = require('../game');
const Card = require('../card');
const Player = require('../player');

describe('Game', () => {

  let top_trumps;
  let deck = []
  let superman;
  let scarlet_witch;
  let black_widow;
  let the_flash;
  let wonder_woman;
  let batman;
  let player1;
  let player2;


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
    player1 = new Player(1, []);
    player2 = new Player(2, []);
  });
  test('game should be able to add cards to deck', () => {
    top_trumps.addCard(superman);
    expect(top_trumps.deck.length).toBe(7);
  })
  test('game should have a deck', () => {
    expect(top_trumps.deck.length).toBe(6);
  })

  test('game should be able to remove card from top of deck', () => {
    top_trumps.removeCardFromDeck();
    expect(top_trumps.deck[0].name).toBe('Scarlet Witch');
  })

  test('should be able to deal cards evenly to players', () => {
    top_trumps.deal(player1, player2)
    expect(top_trumps.deck.length).toBe(0);
    expect(player1.hand.length).toBe(3);
    expect(player2.hand.length).toBe(3);
  });
  test('should be able to check if one player has all the cards', () => {
    top_trumps.deal(player1, player2);
    player1.addCardToHand(superman);
    player1.addCardToHand(wonder_woman);
    player1.addCardToHand(batman);
    expect(top_trumps.checkWinner(player1)).toBe(true);
  });

  test('should be able to compare the attributes chosen by the players', () => {

    top_trumps.deal(player1, player2);

    player1.playCard(top_trumps);

    player2.playCard(top_trumps);

    expect(top_trumps.compare('strength', player1)).toBe('player2')
  });
  test('should be able to give both cards to the player that wins the round', () => {
    top_trumps.deal(player1, player2);

    player1.playCard(top_trumps);

    player2.playCard(top_trumps);

    top_trumps.giveCardsToWinner(top_trumps.compare('strength', player1), player1, player2);
    expect

    expect(player2.hand.length).toBe(4);
    expect(player1.hand.length).toBe(2);

  })

  test('game should play by picking which players turn it is and which attribute they wish to pick', () => {
    top_trumps.deal(player1, player2);

    top_trumps.playgame('strength', player1, player2);
    expect(player2.hand.length).toBe(4);
    expect(player1.hand.length).toBe(2);
  })

});
