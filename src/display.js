const { renderBoard, renderCells, addToLog, changeMarquee } = require('./display-helpers');

const Display = {
    marquee: document.querySelector('.marquee'),
    p1Container: document.getElementById('p1container'),
    p2Container: document.getElementById('p2container'),
    p1Header: document.getElementById('p1Header'),
    p2Header: document.getElementById('p2Header'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    gamelog: document.querySelector('.log'),
    
    renderBoards (players) {
        this.p1Container.appendChild(this.p1Board);
        this.p2Container.appendChild(this.p2Board);
        if (players) {
        this.p1Header.textContent = players[0].getName();
        this.p2Header.textContent = players[1].getName();
        }
        while(this.gamelog.firstChild) this.gamelog.removeChild(this.gamelog.lastChild);
    },

    updateBoard (player) {
        changeMarquee('You\'re up, Admiral! Choose a cell to attack.', this.marquee);
        if (player.isComputer()) renderCells(player, this.p2Board);
        else renderCells(player, this.p1Board);
    },

    updateDisplay (player, cell, opponent, shipSunk) {
        this.updateBoard(opponent);
        changeMarquee(`${opponent.getPossessive()} turn`, this.marquee);
        setTimeout(() => {
            this.updateLog(player, cell, opponent, shipSunk);
        }, 100);
        
    },

    updateLog (player, cell, opponent, shipSunk) {
        addToLog(player, cell, opponent, shipSunk, this.gamelog);
    },

    gameOver (winner) {
        this.marquee.textContent = `Winner: ${winner.getName()}`
    }
}

module.exports = Display;
