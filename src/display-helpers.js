const { isOccupied } = require("./helpers");
const { cols, row, column } = require("./conversions");
const Gameboard = require("./gameboard");

function createDOMElement(element, classes, id) {
  const newElement = document.createElement(element);
  if (classes) classes.forEach((value) => newElement.classList.add(value));
  if (id) newElement.setAttribute("id", id);

  return newElement;
}

const renderBoard = (id) => {
  const board = Gameboard().readBoard();
  const domBoard = createDOMElement("div", ["board"], id);
  let newCell;
  board.forEach((boardRow) =>
    boardRow.forEach((cell, index) => {
      if (id === "p1") newCell = createDOMElement("div", ["cell", "droppable"]);
      else newCell = createDOMElement("div", ["cell"]);
      newCell.dataset.column = cols[index];
      newCell.dataset.row = board.indexOf(boardRow) + 1;
      domBoard.appendChild(newCell);
    }),
  );
  return domBoard;
};

const createShip = function createShipOnDisplay(id, length) {
  const shipContainer = createDOMElement('div', ["ship-container"], `${id}-container`);
  shipContainer.style.height = '42px';
  shipContainer.style.width = length * 40 + 'px';
  const newShip = createDOMElement("div", ["ship"], id);
  newShip.style.cursor = "grab";
  newShip.style.display = "flex";
  let n = 0;
  while (length > 0) {
    const newCell = createDOMElement("div", ["cell"]);
    if (n < 3)
      newCell.textContent = id
        .toString()
        .substring(n, n + 1)
        .toUpperCase();
    newShip.appendChild(newCell);
    length--;
    n++;
  }
  shipContainer.appendChild(newShip)
  return shipContainer;
};

const renderCells = (gameboard, domBoard, showShips = true) => {
  const board = gameboard.readBoard();
  let newCell;
  while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
  board.forEach((boardRow) =>
    boardRow.forEach((cell, index) => {
      if (domBoard.id === "p2") newCell = createDOMElement("div", ["cell"]);
      else newCell = createDOMElement("div", ["cell", "droppable"]);
      newCell.dataset.column = cols[index];
      newCell.dataset.row = board.indexOf(boardRow) + 1;
      if (isOccupied(cell)) {
        if (showShips) newCell.style.backgroundColor = "#888";
      }
      if (cell === "X") {
        const newMarker = createDOMElement("div", ["marker"]);
        newMarker.dataset.column = cols[index];
        newMarker.dataset.row = board.indexOf(boardRow) + 1;
        newMarker.style.backgroundColor = "rgb(255, 60, 20)";
        newCell.appendChild(newMarker);
      }
      if (cell === "O") {
        const newMarker = createDOMElement("div", ["marker"]);
        newMarker.dataset.column = cols[index];
        newMarker.dataset.row = board.indexOf(boardRow) + 1;
        newMarker.style.backgroundColor = "#eee";
        newCell.appendChild(newMarker);
      }
      domBoard.appendChild(newCell);
    }),
  );
};

const addToLog = (player, cell, opponent, oppBoard, shipSunk, domLog) => {
  const attackedCell = oppBoard.readBoard()[row(cell[1])][column(cell[0])];
  const newLine = createDOMElement("p", ["log-line"]);
  newLine.textContent = `${player.getName()} attacked ${cell.join(", ")} ... it's a `;
  const span = createDOMElement("span", ["log-span"]);
  if (attackedCell === "X") {
    span.textContent = "HIT!";
    span.style.color = "rgb(255, 60, 20)";
  } else if (attackedCell === "O") {
    span.textContent = "MISS!";
    span.style.color = "#eee";
  }
  newLine.appendChild(span);
  domLog.appendChild(newLine);
  if (shipSunk) {
    const sunkLine = createDOMElement("p", ["log-line-sunk"]);
    sunkLine.textContent = `${opponent.getPossessive()} ${shipSunk} has been SUNK!`;
    setTimeout(() => {
      domLog.appendChild(sunkLine);
    }, 150);
  }
};

const changeMarquee = (textContent, domNode, size, color) => {
  const message = textContent.toString();
  const node = domNode;
  if (message.includes("Error")) node.textContent = message + " Try again"
  else node.textContent = message;
  node.style.backgroundColor = color;
  node.style.fontSize = `${size}px`;
  return node;
};

module.exports = {
  createDOMElement,
  renderBoard,
  renderCells,
  addToLog,
  changeMarquee,
  createShip,
};
