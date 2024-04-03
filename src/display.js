const { renderBoard, renderCells, addToLog, changeMarquee } = require('./display-helpers');

const Display = {
    p1Container: document.getElementById('p1Board'),
    p2Container: document.getElementById('p2Board'),
    p1Header: document.getElementById('p1Header'),
    p2Header: document.getElementById('p2Header'),
    marquee: document.querySelector('.marquee'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    gamelog: document.querySelector('.log'),
    
    getUserInput () {
        const oppCells = document.querySelectorAll(`#p2 > .cell`)
        const input = oppCells.forEach(cell => cell.addEventListener('click', () =>
            [cell.dataset.column, cell.dataset.row]));
        return input;
    },
    

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
