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
        changeMarquee('You\'re up, Admiral! Choose a cell to attack.', this.marquee);
        if (player.isComputer()) renderCells(player, this.p2Board);
        else renderCells(player, this.p1Board);
    },

    updateDisplay (player, cell, opponent, shipSunk) {
        this.updateBoard(opponent);
        this.updateLog(player, cell, opponent, shipSunk);
        this.updateMarquee(opponent);
    },

    updateLog (player, cell, opponent, shipSunk) {
        addToLog(player, cell, opponent, shipSunk, this.gamelog);
    },

    updateMarquee (player) {
        changeMarquee(`${player.getPossessive()} turn`, this.marquee)
    },
    
    gameOver (winner) {
        this.marquee.textContent = `Winner: ${winner.getName()}`
    }
}

module.exports = Display;
