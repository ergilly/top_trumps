const Player = require('../player');

describe('Player', () => {

  let player1;
  let player2;

  beforeEach(() => {
    player1 = new Player(1, []);
    player2 = new Player(2, []);
  });

  test('Player should have a number', () => {
    expect(player1.number).toBe(1);
  })
  test('Player should have a hand', () => {
    expect(player2.hand).toEqual([]);
  })

  xtest('player should be able play the top card from their hand', () => {

  });
  xtest('player should be able to pick an attribute to play', () => {

  });

})
