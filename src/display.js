const {
  renderBoard,
  renderCells,
  addToLog,
  changeMarquee,
  createShip,
} = require("./display-helpers");

const marquee = document.querySelector(".marquee");
const p1Container = document.getElementById("p1Container");
const p2Container = document.getElementById("p2Container");
const p1Header = document.getElementById("p1Header");
const p2Header = document.getElementById("p2Header");
const gamelog = document.querySelector(".log");
const shipsContainer = document.querySelector(".ships-container");
let p1Board;
let p2Board;

const Display = {
  renderBoards() {
    while (p1Container.contains(document.getElementById("p1"))) {
      p1Container.removeChild(document.getElementById("p1"));
    }
    p1Container.appendChild(renderBoard("p1"));
    while (p2Container.contains(document.getElementById("p2"))) {
      p2Container.removeChild(document.getElementById("p2"));
    }
    p2Container.appendChild(renderBoard("p2"));
    p1Header.textContent = "You";
    p2Header.textContent = "Computer";
    gamelog.textContent = "";
    p1Board = document.getElementById("p1");
    p2Board = document.getElementById("p2");
  },

  startGame() {
    this.renderBoards();
    this.renderShips();
    this.updateMarquee("Place your ships by dragging them onto your board (press R to rotate).", 20);
  },

  renderShips() {
    const ships = [
      createShip("Carrier", 5),
      createShip("Battleship", 4),
      createShip("Cruiser", 3),
      createShip("Submarine", 3),
      createShip("Destroyer", 2),
    ];
    while (shipsContainer.firstChild)
      shipsContainer.removeChild(shipsContainer.lastChild);
    shipsContainer.style.display = 'flex';
    ships.forEach((ship) => shipsContainer.appendChild(ship));
  },

  p1UpdateBoard(board) {
    renderCells(board, p1Board);
  },
  p2UpdateBoard(board) {
    renderCells(board, p2Board, false);
  },
  updateDisplay(player, cell, opponent, oppBoard, shipSunk) {
    setTimeout(() => {
      this.updateMarquee(`${opponent.getPossessive()} turn`, 28);
      addToLog(player, cell, opponent, oppBoard, shipSunk, gamelog);
    }, 200);
  },
  updateMarquee(text, size, color) {
    if (!color) color = '#fefefe';
    changeMarquee(text, marquee, size, color);
  },
  gameOver(winner) {
    let color;
    if (winner.isComputer()) color = 'rgb(255, 140, 140)'
    else color = 'rgb(180, 235, 180'
    changeMarquee(`Winner: ${winner.getName()}`, marquee, 30, color);
  },
};

module.exports = Display;
