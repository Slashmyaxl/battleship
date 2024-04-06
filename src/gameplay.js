const Player = require('./player');
const Ship = require('./ship')
const Display = require('./display');
const Gameboard = require('./gameboard');

const allShips = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']

function Game() {
  Display.startGame();
  const player1 = Player('You');
  const player2 = Player('Computer', true);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  let currentPlayer = player1;
  

  const p1DisplayBoard = document.getElementById('p1');
  const p2DisplayBoard = document.getElementById('p2')
  
  placePlayerShips();   
  Display.p1UpdateBoard(p1Board);
  placeComputerShips();
  Display.p2UpdateBoard(p2Board);

  function isGameOver() {
    return p2Board.allShipsSunk() || p1Board.allShipsSunk();
  }

  p2DisplayBoard.addEventListener('click', (e) => {
    if (currentPlayer === player1 && !isGameOver()) {
        const cellAttacked = p2Board.receiveAttack(e.target.dataset.column, e.target.dataset.row);
        Display.p2UpdateBoard(p2Board);
        Display.updateDisplay(player1, cellAttacked.cell, player2, p2Board, cellAttacked.sunkShip);
        if (isGameOver()) {
            return Display.gameOver(player1)
        }
        currentPlayer = player2;
    } else {
        return null
    }
    setTimeout(() => {
        const choice = player2.randomAttack(p1Board);
        const computerAttack = p1Board.receiveAttack(choice[0], choice[1]);
        Display.p1UpdateBoard(p1Board);
        Display.updateDisplay(player2, computerAttack.cell, player1, p1Board, computerAttack.sunkShip);
        if (isGameOver()) {
            return Display.gameOver(player2);
        }
        currentPlayer = player1;
    }, 500)
  })

  function placePlayerShips(index = 0) {
    if (index >= allShips.length) return;
    const currentShip = allShips[index];
    Display.updateMarquee(`Place your ${currentShip} (press V to switch orientation).`)
    let orientation = 'vertical';

    window.addEventListener('keydown', (e) => {
      if (e.key === 'v' && orientation === 'vertical') orientation = ''
      else orientation = 'vertical'
    })

    p1DisplayBoard.addEventListener('click', (e) => {
      const data = e.target.dataset;
      const placedShip = p1Board.placeShip(Ship(currentShip), data.column, data.row, orientation);
      if (placedShip === true) {
        Display.p1UpdateBoard(p1Board);
        placePlayerShips(++index)
      } else {
        Display.updateMarquee(placedShip);
        placePlayerShips(index);
      }
    }, { once: true });

    p1DisplayBoard.addEventListener('mouseover', (e) => {
      const data = e.target.dataset
      const adjacentCells = 
      e.target.style.backgroundColor = 'lightgray';
    })

    p1DisplayBoard.addEventListener('mouseout', (e) => {
      e.target.style.backgroundColor = 'inherit';
    })
  }

  function placeComputerShips () {
    p2Board.placeShip(Ship(allShips[0]), 'A', 2);
    p2Board.placeShip(Ship(allShips[1]), 'B', 10);
    p2Board.placeShip(Ship(allShips[2]), 'J', 1, 'vertical');
    p2Board.placeShip(Ship(allShips[3]), 'E', 5, 'vertical');
    p2Board.placeShip(Ship(allShips[4]), 'H', 1, 'vertical');
  }
};


module.exports = Game;
