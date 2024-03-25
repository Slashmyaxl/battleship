const Gameboard = require("./gameboard");
const { row, column } = require('./conversions');

const p1Board = Gameboard();

test('vertical placement', () => {
  p1Board.placeShip('Carrier', 'F', 2, 'vertical');

  expect(p1Board.readBoard()[row(2)][column('F')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(3)][column('F')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(4)][column('F')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(5)][column('F')]).toHaveProperty('name', 'Carrier')
  expect(p1Board.readBoard()[row(6)][column('F')]).toHaveProperty('name', 'Carrier')
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

test('ships not allowed to occupy same cell', () => {
  expect(() => {
    p1Board.placeShip('Cruiser', 'A', 2, 'vertical');
  }).toThrow(new Error('Ship Collision!'));

  expect(p1Board.readBoard()[row(2)][column('A')]).toBe(' ');
  expect(p1Board.readBoard()[row(3)][column('A')]).toHaveProperty('name', 'Battleship');
  expect(p1Board.readBoard()[row(4)][column('A')]).toBe(' ');
})
