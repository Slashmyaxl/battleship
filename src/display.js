const { renderBoard, renderCells, addToLog, changeMarquee, createShip } = require('./display-helpers');

const marquee = document.querySelector('.marquee')
const p1Container = document.getElementById('p1Container')
const p2Container = document.getElementById('p2Container')
const p1Header = document.getElementById('p1Header')
const p2Header = document.getElementById('p2Header')
const gamelog = document.querySelector('.log')
const shipContainer = document.querySelector('.ship-container')
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
        this.renderShips();
        marquee.textContent = 'Place your ships by dragging them onto your board (press R to rotate).'
        marquee.style.fontSize = '20px';
    },

    renderShips() {
        const ships = [
            createShip('Carrier', 5),
            createShip('Battleship', 4),
            createShip('Cruiser', 3),
            createShip('Submarine', 3),
            createShip('Destroyer', 2)
        ];
        while (shipContainer.firstChild) shipContainer.removeChild(shipContainer.lastChild);
        ships.forEach(ship => shipContainer.appendChild(ship))
    },

    p1UpdateBoard (board) { renderCells(board, p1Board) },
    p2UpdateBoard (board) { renderCells(board, p2Board, false) },
    updateDisplay (player, cell, opponent, oppBoard, shipSunk) {
        this.updateMarquee(`${opponent.getPossessive()} turn`, 26);
        setTimeout(() => {
            addToLog(player, cell, opponent, oppBoard, shipSunk, gamelog);
        }, 100);  
    },
    updateMarquee (text, size) {
        changeMarquee(text, marquee, size);
    },
    gameOver(winner) { marquee.textContent = `Winner: ${winner.getName()}` }
}

module.exports = Display;
