const Gameboard = require("./gameboard");
const { row, column } = require('./conversions');

const p1Board = Gameboard();

describe('ship placement', () => {
  beforeAll(() => {
    p1Board.placeShip('Carrier', 'F', 2, 'vertical');
    p1Board.placeShip('Battleship', 'A', 3);
    p1Board.placeShip('Destroyer', 'G', 7);
    p1Board.placeShip('Submarine', 'H', 1);
  });

  test('vertical placement', () => {
    expect(p1Board.readBoard()[row(2)][column('F')]).toHaveProperty('name', 'Carrier')
    expect(p1Board.readBoard()[row(3)][column('F')]).toHaveProperty('name', 'Carrier')
    expect(p1Board.readBoard()[row(4)][column('F')]).toHaveProperty('name', 'Carrier')
    expect(p1Board.readBoard()[row(5)][column('F')]).toHaveProperty('name', 'Carrier')
    expect(p1Board.readBoard()[row(6)][column('F')]).toHaveProperty('name', 'Carrier')
  })

  test('ship extends only its length', () => {
    expect(p1Board.readBoard()[row(3)][column('A')]).toHaveProperty('name', 'Battleship')
    expect(p1Board.readBoard()[row(3)][column('B')]).toHaveProperty('name', 'Battleship')
    expect(p1Board.readBoard()[row(3)][column('C')]).toHaveProperty('name', 'Battleship')
    expect(p1Board.readBoard()[row(3)][column('D')]).toHaveProperty('name', 'Battleship')
    expect(p1Board.readBoard()[row(3)][column('E')]).toBe(' ')
  })


  test('ships not allowed to occupy same cell', () => {
    expect(() => {
      p1Board.placeShip('Cruiser', 'A', 2, 'vertical');
    }).toThrow(new Error('Ship Collision!'));

    expect(p1Board.readBoard()[row(2)][column('A')]).toBe(' ');
    expect(p1Board.readBoard()[row(3)][column('A')]).toHaveProperty('name', 'Battleship');
    expect(p1Board.readBoard()[row(4)][column('A')]).toBe(' ');
  })

})

describe('receiving attacks', () => {

  test('proper cell receives miss', () => {
    p1Board.receiveAttack('A', 1);
    expect(p1Board.readBoard()[row(1)][column('A')]).toBe('O');
  })

  test('hit applied to ship\'s hit count', () => {
    const cell = p1Board.readBoard()[row(4)][column('F')];
    p1Board.receiveAttack('F', 4);
    expect(cell.readHits()).toBe(1)
  })

  test('additive hit count per ship', () => {
    const cell = p1Board.readBoard()[row(2)][column('F')];
    p1Board.receiveAttack('F', 2);
    expect(cell.readHits()).toBe(2)
  })

  test('unable to hit same cell twice', () => {
    expect(() => {
      p1Board.receiveAttack('F', 2);
    }).toThrow(new Error('Cell already hit!'))
  })
})

describe('sinking ships', () => {
  test('ship sinks from board', () => {
    const shipToSink = p1Board.readBoard()[row(6)][column('F')];
    p1Board.receiveAttack('F', 3);
    p1Board.receiveAttack('F', 5);
    p1Board.receiveAttack('F', 6);
    expect(shipToSink.isSunk()).toBeTruthy();
  })

  test('all ships not sunk', () => {
    expect(p1Board.allShipsSunk()).toBeFalsy();
  })

  test('all ships sunk', () => {
    const allShips = p1Board.getAllShips();
    allShips.forEach(ship => {
      ship.hit();
      ship.hit();
      ship.hit();
      ship.hit();
    })
    expect(p1Board.allShipsSunk()).toBeTruthy();
  })
})