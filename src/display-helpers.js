const { isOccupied } = require('./helpers');
const { cols } = require('./conversions')

function createDOMElement (element, classes, id) {
    const newElement = document.createElement(element);
    if (classes) [...classes].forEach(value => newElement.classList.add(value))
    if (id) newElement.setAttribute('id', id);

    return newElement;
}

const renderBoard = (board, domBoard) => {
    while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
    board.forEach(row => row.forEach((cell, index) => {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(row) + 1;
        if (isOccupied(cell)) newCell.style.backgroundColor = '#aaa';
        domBoard.appendChild(newCell);
    }))
}

module.exports = { createDOMElement, renderBoard }