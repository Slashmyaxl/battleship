const Gameboard = require("./gameboard");
const { row, column } = require('./conversions');


const p1Board = Gameboard();

test('ship extends full length', () => {
  p1Board.placeShip('Carrier', 'D', 2);

  expect(p1Board.readBoard()[row(2)][column('D')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(2)][column('E')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(2)][column('F')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(2)][column('G')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(2)][column('H')]).toHaveProperty('name', 'Carrier')
})

test('vertical placement', () => {
  p1Board.placeShip('Carrier', 'D', 2, 'vertical');

  expect(p1Board.readBoard()[row(2)][column('D')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(3)][column('D')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(4)][column('D')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(5)][column('D')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(6)][column('D')]).toHaveProperty('name', 'Carrier')
})

test('ship extends only its length', () => {
  p1Board.placeShip('Battleship', 'A', 3);

  expect(p1Board.readBoard()[row(3)][column('A')]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[row(3)][column('B')]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[row(3)][column('C')]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[row(3)][column('D')]).toHaveProperty('name', 'Battleship')
  expect(p1Board.readBoard()[row(3)][column('E')]).toBe(' ')
})

test('works with multiple ships', () => {
  p1Board.placeShip('Destroyer', 'G', 7);
  p1Board.placeShip('Submarine', 'H', 1);

  expect(p1Board.readBoard()[row(7)][column('G')]).toHaveProperty('name', 'Destroyer')
  expect(p1Board.readBoard()[row(7)][column('H')]).toHaveProperty('name', 'Destroyer')
  expect(p1Board.readBoard()[row(1)][column('H')]).toHaveProperty('name', 'Submarine')
  expect(p1Board.readBoard()[row(1)][column('I')]).toHaveProperty('name', 'Submarine')
  expect(p1Board.readBoard()[row(1)][column('J')]).toHaveProperty('name', 'Submarine')
})
