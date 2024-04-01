const { renderBoard } = require('./display-helpers');
const gameplay = require('./gameplay')

function renderDisplay () {
    const container = document.querySelector('.board-container');
    const p1Board = renderBoard(gameplay().getPlayers()[0], 'p1');
    const p2Board = renderBoard(gameplay().getPlayers()[1], 'p2');
    container.appendChild(p1Board);
    container.appendChild(p2Board);
}

module.exports = renderDisplay;
