/* eslint-disable no-plusplus */
const Ship = require('./ship')
const { row, column } = require('./conversions');

const Gameboard = () => {
  const board = [];
  (function createBoard() {
    for (let i = 0; i < 10; i++) {
      const newRow = [];
      for (let j = 0; j < 10; j++) {
        newRow.push(" ");
      }
      board.push(newRow);
    }
  })();

  const readBoard = () => board;

  function placeShip(ship, x, y, orientation) {
    let length;
    let colIndex = column(x);
    let rowIndex = row(y);

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

    (function checkForCollision() {
      const shipSlot = [];
      let colCheck = column(x);
      let rowCheck = row(y);

      if(orientation === 'vertical') {
        for (let i = 1; i <= newShip.readShipLength(); i++) {
          shipSlot.push(board[rowCheck][colCheck]);
          rowCheck++;
        }
      } else {
        for (let i = 1; i <= newShip.readShipLength(); i++) {
          shipSlot.push(board[rowCheck][colCheck]);
          colCheck++;
        }
      }

      if (shipSlot.find(collision)) throw new Error ('Ship Collision!');
    })()

    
    if(orientation === 'vertical') {
      for (let i = 1; i <= newShip.readShipLength(); i++) {
        board[rowIndex][colIndex] = newShip;
        rowIndex++;
      }
    } else {
      for (let i = 1; i <= newShip.readShipLength(); i++) {
        board[rowIndex][colIndex] = newShip;
        colIndex++;
      }
    }
  }

  function receiveAttack(x, y) {
    board[row(y)][column(x)] = "O";
    return ` attacked with ${board[row(y)][column(x)]}.`;
  }

  return { readBoard, receiveAttack, placeShip };
};

function collision(cell) {
  if(cell !== ' ') return true;
}

module.exports = Gameboard;