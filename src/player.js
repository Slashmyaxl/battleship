const { isOccupied } = require('./helpers');
const { cols } = require('./conversions');
const Gameboard = require('./gameboard');

function Player(name, computer = false, board = Gameboard()) {
    const getName = () => name;
    const getPossessive = () => name === 'You' ? 'Your' : `${name}'s`;
    const getBoard = () => board;
    const isComputer = () => computer === true;
    
    function getInput() {
        return new Promise(resolve => {
          const oppCells = document.querySelectorAll('#p2 > .cell');
          oppCells.forEach(cell => cell.addEventListener('click', () => {
              console.log(`clicked ${[cell.dataset.column, cell.dataset.row]}`);
              resolve([cell.dataset.column, cell.dataset.row])
          }))
        })
      }

    const attack = (x, y, opponent) => {
        const cell = [x, y];
        const shipSunk = opponent.getBoard().receiveAttack(x, y);
        return { cell, shipSunk }
    }

    const randomAttack = (opponent) => {
        const oppBoard = opponent.getBoard().readBoard();
        const attackableCells = [];

        oppBoard.forEach(oppRow => oppRow.forEach((cell, index) => {
            if(isOccupied(cell) || cell === ' ') attackableCells.push([cols[index], oppBoard.indexOf(oppRow) + 1])
        }));

        const chosenCell = attackableCells[Math.floor(Math.random() * attackableCells.length)]
        const shipSunk = opponent.getBoard().receiveAttack(chosenCell[0], chosenCell[1])

        return { chosenCell, shipSunk };
    }

    return { getName, getPossessive, getBoard, getInput, isComputer, attack, randomAttack }
}

module.exports = Player
