const Player = require("./player");
const { startPlacementPhase, placementPhaseOver } = require("./ship-placement");
const Display = require("./display");
const Gameboard = require("./gameboard");

function Game() {
  Display.startGame();
  const player1 = Player("You");
  const player2 = Player("Computer", true);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  let currentPlayer = player1;
  startPlacementPhase();
  const p1DisplayBoard = document.getElementById("p1");
  const p2DisplayBoard = document.getElementById("p2");
  player1.placeShips(p1Board);
  player2.placeShips(p2Board, "random");
  Display.p2UpdateBoard(p2Board);

  function isGameOver() {
    return p2Board.allShipsSunk() || p1Board.allShipsSunk();
  }

  p2DisplayBoard.addEventListener("click", (e) => {
    if (placementPhaseOver() && currentPlayer === player1 && !isGameOver()) {
      const data = e.target.dataset;
      const cellAttacked = p2Board.receiveAttack(data.column, data.row);
      Display.p2UpdateBoard(p2Board);
      if (isGameOver()) return Display.gameOver(player1, p1DisplayBoard);
      Display.updateDisplay(
        player1,
        cellAttacked.cell,
        player2,
        p2Board,
        cellAttacked.sunkShip,
        p2DisplayBoard
      );
      currentPlayer = player2;
    } else {
      return null;
    }
    const choice = player2.randomAttack(p1Board);
    const computerAttack = p1Board.receiveAttack(choice[0], choice[1]);
    setTimeout(() => {
      Display.p1UpdateBoard(p1Board);
      if (isGameOver()) return Display.gameOver(player2, p2DisplayBoard);
      Display.updateDisplay(
        player2,
        computerAttack.cell,
        player1,
        p1Board,
        computerAttack.sunkShip,
        p1DisplayBoard
      );
      currentPlayer = player1;
    }, 600);
  });
}

module.exports = Game;
