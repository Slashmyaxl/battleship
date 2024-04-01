const { createDOMElement } = require('./display-helpers')

const p1Board = createDOMElement('div', ['board'], 'p1')
const p2Board = createDOMElement('div', ['board'], 'p2')

const renderDisplay = () => {
    const container = document.querySelector('.board-container');
    container.appendChild(p1Board);
    container.appendChild(p2Board);
}

module.exports = { renderDisplay, p1Board, p2Board };
