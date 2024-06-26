const {
  renderBoard,
  renderCells,
  addToLog,
  changeMarquee,
  createShip,
  createDOMElement,
} = require("./display-helpers");
const { delay } = require("./helpers")

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

  playGame() {
    const startText = createDOMElement('p', ['start-text']);
    startText.textContent = 'Enemy ships sighted!';
    p2Board.appendChild(startText);
    setTimeout(() => {
      startText.classList.add('enlarge-fade');
      setTimeout(() => {
        startText.style.display = 'none';
      }, 2200)
    }, 0);
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
    const randomizer = createDOMElement('button', ['randomize']);
    randomizer.textContent = 'Random';
    shipsContainer.appendChild(randomizer)
  },

  p1UpdateBoard(board) {
    renderCells(board, p1Board);
  },
  p2UpdateBoard(board) {
    renderCells(board, p2Board, false);
  },
  async updateDisplay(player, cell, opponent, oppBoard, shipSunk, displayBoard) {
    let delayTime = 0;
    this.updateMarquee(`${opponent.getPossessive()} turn`, 28);
    this.updateLog(player, cell, opponent, oppBoard, shipSunk);

    if (player.isComputer()) delayTime = 1;
    if (shipSunk) {
      const sunken = createDOMElement('p', ['sunken']);
      sunken.textContent = `Ship SUNK!`
      displayBoard.appendChild(sunken);
      const sunkAnimate = delay(delayTime).then(() => {
        sunken.classList.add('upshift-fade')
      })
      await sunkAnimate;
      delay(600).then(() => {
        sunken.style.display = 'none';
      })
    }
  },
  updateMarquee(text, size, color) {
    if (!color) color = '#fefefe';
    changeMarquee(text, marquee, size, color);
  },
  updateLog(player, cell, opponent, oppBoard, shipSunk) {
    addToLog(player, cell, opponent, oppBoard, shipSunk, gamelog);
  },
  gameOver(winner, displayBoard) {
    let delayTime = 0;
    if (winner.isComputer()) delayTime = 400;
    let color;
    if (winner.isComputer()) color = 'rgb(255, 140, 140)';
    else color = 'rgb(180, 235, 180';
    this.updateMarquee(`Winner: ${winner.getName()}`, 30, color);
    const winText = createDOMElement('p', ['win-text']);
    winText.textContent = 'WINNER';
    displayBoard.appendChild(winText);
    delay(delayTime).then(() => {
      winText.classList.add('enlarge')
    })
  },
};

module.exports = Display;
