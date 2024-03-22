const Gameboard = require("./gameboard");

const p1Board = Gameboard();

beforeEach(() => p1Board.createBoard());
afterEach(() => console.log(p1Board.readBoard()))

test('ship extends full length', () => {
  p1Board.placeShip('Carrier', 'D', 2);

  expect(p1Board.readBoard()[1][3]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[1][4]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[1][5]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[1][6]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[1][7]).toHaveProperty('name', 'Carrier')
})

test('ship extends only its length', () => {
  p1Board.placeShip('Battleship', 'A', 3);

  expect(p1Board.readBoard()[2][0]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[2][1]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[2][2]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[2][3]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[2][4]).toBe(' ')
})

test('works with multiple ships', () => {
  p1Board.placeShip('Destroyer', 'G', 7);
  p1Board.placeShip('Submarine', 'H', 1);

  expect(p1Board.readBoard()[6][6]).toHaveProperty('name', 'Destroyer')
  expect(p1Board.readBoard()[6][7]).toHaveProperty('name', 'Destroyer')
  expect(p1Board.readBoard()[0][7]).toHaveProperty('name', 'Submarine')
  expect(p1Board.readBoard()[0][8]).toHaveProperty('name', 'Submarine')
  expect(p1Board.readBoard()[0][9]).toHaveProperty('name', 'Submarine')
})
