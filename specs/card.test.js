const Card = require('../card');

describe('Card', () => {

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
  })

  test('Card should have a name', () => {
    expect(superman.name).toBe('Superman');
  });
  test('Card should have an intelligence', () => {
    expect(scarlet_witch.intelligence).toBe(7);
  });
  test('Card should have a strength', () => {
    expect(black_widow.strength).toBe(6);
  });
  test('Card should have an agility', () => {
    expect(the_flash.agility).toBe(10);
  });

})
