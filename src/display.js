const { renderBoard, renderCells, addToLog, changeMarquee } = require('./display-helpers');

const Display = {
    container: document.querySelector('.board-container'),
    marquee: document.querySelector('.marquee'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    gamelog: document.querySelector('.log'),

    renderBoards () {
        this.container.appendChild(this.p1Board);
        this.container.appendChild(this.p2Board);
    },

    updateBoard (player) {
        if (player.isComputer()) renderCells(player, this.p2Board);
        else renderCells(player, this.p1Board);
    },

    updateDisplay (player, cell, opponent) {
        this.updateBoard(opponent);
        this.updateLog(player, cell, opponent);
        this.updateMarquee(opponent);
    },

    updateLog (player, cell, opponent) {
        addToLog(player, cell, opponent, this.gamelog);
    },

    updateMarquee (player) {
        changeMarquee(`Turn: ${player.displayName()}`, this.marquee)
    },
    
    gameOver (winner) {
        this.marquee.textContent = `Winner: ${winner.displayName()}`
    }
}

module.exports = Display;
