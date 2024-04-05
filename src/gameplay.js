const Player = require('./player');
const Display = require('./display');
const Gameboard = require('./gameboard');

function Game() {
  Display.startGame();
  const player1 = Player('You');
  const player2 = Player('Computer', true);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  let currentPlayer = player1;
  

  const p1DisplayBoard = document.getElementById('p1');
  const p2DisplayBoard = document.getElementById('p2')
  
  placeAllShips();   
  
  
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

  function placeAllShips() {
    p1Board.placeShip('Destroyer', 'B', 2);
    p1Board.placeShip('Carrier', 'C', 9);
    p1Board.placeShip('Cruiser', 'A', 3, 'vertical');
    p1Board.placeShip('Battleship', 'F', 4, 'vertical');
    p1Board.placeShip('Submarine', 'H', 1, 'vertical');
    p2Board.placeShip('Destroyer', 'A', 2);
    p2Board.placeShip('Carrier', 'B', 10);
    p2Board.placeShip('Cruiser', 'J', 1, 'vertical');
    p2Board.placeShip('Battleship', 'E', 5, 'vertical');
    p2Board.placeShip('Submarine', 'H', 1, 'vertical'); */
  };
}

module.exports = Game;
