const { renderBoard, renderCells, addToLog, changeMarquee } = require('./display-helpers');

const marquee = document.querySelector('.marquee')
const p1Container = document.getElementById('p1Container')
const p2Container = document.getElementById('p2Container')
const p1Header = document.getElementById('p1Header')
const p2Header = document.getElementById('p2Header')
const gamelog = document.querySelector('.log')
let p1Board;
let p2Board;

const Display = {  
    renderBoards () {
        while (p1Container.contains(document.getElementById('p1'))) {
            p1Container.removeChild(document.getElementById('p1'));
        }
        p1Container.appendChild(renderBoard('p1'));
        while (p2Container.contains(document.getElementById('p2'))) {
            p2Container.removeChild(document.getElementById('p2'));
        }
        p2Container.appendChild(renderBoard('p2'));
        p1Header.textContent = 'You';
        p2Header.textContent = 'Computer';
        gamelog.textContent = '';
        p1Board = document.getElementById('p1');
        p2Board = document.getElementById('p2');
    },
    
    startGame () {
        this.renderBoards();
        marquee.style.fontSize = '22px';
        marquee.textContent = 'You\'re up, Admiral! Position your fleet on desired cells.'
    },

    p1UpdateBoard (board) { renderCells(board, p1Board) },
    p2UpdateBoard (board) { renderCells(board, p2Board, 'skyblue') },
    updateDisplay (player, cell, opponent, oppBoard, shipSunk) {
        changeMarquee(`${opponent.getPossessive()} turn`, marquee);
        setTimeout(() => {
            addToLog(player, cell, opponent, oppBoard, shipSunk, gamelog);
        }, 100);  
    },

    gameOver(winner) { marquee.textContent = `Winner: ${winner.getName()}` }
}

module.exports = Display;
