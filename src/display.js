const { renderBoard, renderCells, addToLog, changeMarquee } = require('./display-helpers');

const Display = {
    marquee: document.querySelector('.marquee'),
    p1Container: document.getElementById('p1Container'),
    p2Container: document.getElementById('p2Container'),
    p1Header: document.getElementById('p1Header'),
    p2Header: document.getElementById('p2Header'),
    gamelog: document.querySelector('.log'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    
    renderBoards () {
        this.p1Container.appendChild(this.p1Board);
        this.p2Container.appendChild(this.p2Board);
        this.p1Header.textContent = 'You';
        this.p2Header.textContent = 'Computer';
    },

    p1UpdateBoard (board) {
      renderCells(board, this.p1Board);
    },

    p2UpdateBoard (board) {
      renderCells(board, this.p2Board, 'skyblue');
    },

    updateDisplay (player, cell, opponent, oppBoard, shipSunk) {
        console.log(cell);
        console.log(opponent)
        changeMarquee(`${opponent.getPossessive()} turn`, this.marquee);
        setTimeout(() => {
            addToLog(player, cell, opponent, oppBoard, shipSunk, this.gamelog);
        }, 100);
        
    },

    clearLog () {
        this.gamelog.textContent = '';
    },

    //updateLog (player, cell, oppBoard, shipSunk) {
      //  ;
    //},

    gameOver (winner) {
        this.marquee.textContent = `Winner: ${winner.getName()}`
    }
}

module.exports = Display;
