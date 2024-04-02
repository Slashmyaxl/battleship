const { renderBoard, renderCells, renderLog } = require('./display-helpers');

const Display = {
    container: document.querySelector('.board-container'),
    marquee: document.querySelector('.marquee'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    gamelog: document.querySelector('.log'),

    renderDisplay () {
        this.container.appendChild(this.p1Board);
        this.container.appendChild(this.p2Board);
    },

    updateDisplay (player) {
        if (player.isComputer()) renderCells(player, this.p2Board);
        else renderCells(player, this.p1Board);
    },

    updateLog (player) {
        renderLog(player, this.gamelog);
    },
    
    gameOver (winner) {
        this.marquee.textContent = `Winner: ${winner.displayName()}`
    }
}

module.exports = Display;
