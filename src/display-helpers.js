const { isOccupied } = require('./helpers');
const { cols, row, column } = require('./conversions');
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
    board.forEach(boardRow => boardRow.forEach(() => {
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

const addToLog = (player, cell, opponent, domLog) => {
    const attackedCell = opponent.getBoard().readBoard()[row(cell[1])][column(cell[0])];
    const newLine = createDOMElement('p', ['log-line']);
    newLine.textContent = `${player.displayName()} attacked ${cell.join(', ')} ... it's a `;
    const span = createDOMElement('span', ['log-span']);
    if (attackedCell === 'X') {
        span.textContent = 'HIT!';
        span.style.color = 'red';
    } else if (attackedCell === 'O') {
        span.textContent = 'MISS!';
        span.style.color = 'white'
    }
    newLine.appendChild(span);
    domLog.appendChild(newLine);
}

const changeMarquee = (textContent, domNode) => {
    const node = domNode;
    node.textContent = textContent;
    return node;
}

module.exports = { createDOMElement, renderBoard, renderCells, addToLog, changeMarquee }