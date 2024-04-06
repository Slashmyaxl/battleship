const { row, column } = require('./conversions');
const { checkCollisions, isOccupied } = require ('./helpers')

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
  const allShips = [];
  const getAllShips = () => allShips;

  function allShipsSunk () {
    if (allShips.length < 5) return false;
    return allShips.filter(ship => ship.isSunk()).length === 5; 
  }

  function placeShip(shipObj, x, y, orientation) {
    if (allShips.length > 4) throw new Error ('Ship limit exceeded.')
    let colIndex = column(x);
    let rowIndex = row(y);
   
    try {
      (checkCollisions(board, x, y, orientation, shipObj))
    } catch (error) {
      return error;
    }
   
    allShips.push(shipObj);
    if(orientation === 'vertical') {
      for (let i = 1; i <= shipObj.getShipLength(); i++) {
        board[rowIndex][colIndex] = shipObj;
        rowIndex++;
      }
    } else {
      for (let i = 1; i <= shipObj.getShipLength(); i++) {
        board[rowIndex][colIndex] = shipObj;
        colIndex++;
      }
    }
    return true;
  }

  function receiveAttack(x, y) {
    let sunkShip = null;
    const attackedCell = board[row(y)][column(x)];
    if (attackedCell === "X" || attackedCell === "O") throw new Error('Cell already hit!')
    else if (isOccupied(attackedCell)) {
      attackedCell.hit();
      if (attackedCell.isSunk()) sunkShip = attackedCell.name
      board[row(y)][column(x)] = "X";
    } else board[row(y)][column(x)] = "O";
    
    return { cell: [x, y], sunkShip };
  }

  return { readBoard, receiveAttack, placeShip, allShipsSunk, getAllShips };
};

module.exports = Gameboard;
