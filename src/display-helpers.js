const { isOccupied } = require('./helpers');
const { cols } = require('./conversions');
const Gameboard = require('./gameboard');

function createDOMElement (element, classes, id) {
    const newElement = document.createElement(element);
    if (classes) [...classes].forEach(value => newElement.classList.add(value))
    if (id) newElement.setAttribute('id', id);

    return newElement;
}

const renderBoard = (id) => {
    const board = Gameboard().readBoard();
    const domBoard = createDOMElement('div', ['board'], id);
    board.forEach(row => row.forEach(() => {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        domBoard.appendChild(newCell);
    }));
    return domBoard
}

const renderCells = (player, domBoard) => {
    const board = player.getBoard().readBoard();
    while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
    board.forEach(row => row.forEach((cell, index) => {
        const newCell = createDOMElement('div', ['cell'])
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(row) + 1;
        if (isOccupied(cell)) newCell.style.backgroundColor = '#777';
        if (cell === 'X') newCell.style.backgroundColor = 'red';
        if (cell === 'O') newCell.style.backgroundColor = 'lightgreen'
        domBoard.appendChild(newCell);
    }));
}

const renderLog = (player, domLog) => {
    const newLine = createDOMElement('p', ['log-line']);
    newLine.textContent = `${player.displayName()} played... `;
    domLog.appendChild(newLine);
}

module.exports = { createDOMElement, renderBoard, renderCells, renderLog }