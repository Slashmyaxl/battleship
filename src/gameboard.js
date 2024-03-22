const Ship = require('./ship')

const Gameboard = () => {
  const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const board = [];
  function createBoard() {
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(" ");
      }
      board.push(row);
    }
  };
  const readBoard = () => board;

  function placeShip(ship, x, y) {
    const coords = [cols.indexOf(x), y - 1];
    let length;

    switch (ship) {
      case 'Carrier':
        length = 5;
        break;
      case 'Battleship':
        length = 4;
        break;
      case 'Destroyer':
        length = 2;
        break;
      default:
        length = 3;
    }
    
    const newShip = Ship(ship, length);

    for (let i = 1; i <= newShip.readShipLength(); i++) {
      board[coords[1]][coords[0]] = newShip;
      coords[0]++
    }
  }

  function receiveAttack(x, y) {
    
    const coords = [cols[x], y + 1];
    board[coords[1][y]] = "O";
    return `${coords} attacked with ${board[coords[1][coords[0]]]}.`;
  }

  return { createBoard, readBoard, receiveAttack, placeShip };
};

module.exports = Gameboard;