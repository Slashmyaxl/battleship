const Player = require('./player');
const Display = require('./display');

let players = [];
let activePlayer;

const getOpponent = () => {
    if (activePlayer === players[0]) return players[1];
    return players[0];
}

function isGameOver() {
    return getOpponent().getBoard().allShipsSunk() || activePlayer.getBoard().allShipsSunk();
}

function Game() {
  players = [Player('You'), Player('Computer', true)];
  [activePlayer] = players;
  Display.renderBoards(players);
  placeAllShips();     
  Display.updateBoard(activePlayer);
  Display.updateBoard(getOpponent());
  gameLoop();

  function gameLoop () {
    const userInput = activePlayer.getInput();

    userInput.then(coords => {
      const cellAttacked = activePlayer.attack(coords[0], coords[1], getOpponent());
      Display.updateDisplay(activePlayer, cellAttacked.cell, getOpponent(), cellAttacked.shipSunk);
      activePlayer = getOpponent();
    }).then(() => {
      if (isGameOver()) return Display.gameOver(getOpponent());
      setTimeout(() => {
        const randomCell = activePlayer.randomAttack(getOpponent());
            Display.updateDisplay(activePlayer, randomCell.chosenCell, getOpponent(), randomCell.shipSunk);
            if (isGameOver()) return Display.gameOver(activePlayer);
            activePlayer = getOpponent();
        }, 600)     
    }).finally(() => gameLoop())
  }
}

function placeAllShips() {
    activePlayer.getBoard().placeShip('Destroyer', 'B', 2);
    activePlayer.getBoard().placeShip('Carrier', 'C', 9);
    activePlayer.getBoard().placeShip('Cruiser', 'A', 3, 'vertical');
    activePlayer.getBoard().placeShip('Battleship', 'F', 4, 'vertical');
    activePlayer.getBoard().placeShip('Submarine', 'H', 1, 'vertical');
    getOpponent().getBoard().placeShip('Destroyer', 'A', 2);
    getOpponent().getBoard().placeShip('Carrier', 'B', 10);
    getOpponent().getBoard().placeShip('Cruiser', 'J', 1, 'vertical');
    getOpponent().getBoard().placeShip('Battleship', 'E', 5, 'vertical');
    getOpponent().getBoard().placeShip('Submarine', 'H', 1, 'vertical');
};

module.exports = Game;
