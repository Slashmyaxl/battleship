const { isOccupied } = require('./helpers');
const { cols } = require('./conversions');
const Gameboard = require('./gameboard');

function Player(name, computer = false, board = Gameboard()) {
    const getName = () => name;
    const getPossessive = () => name === 'You' ? 'Your' : `${name}'s`;

    const getBoard = () => board;

    const isComputer = () => computer === true

    const attack = (x, y, player) => {
        const cell = [x, y];
        const shipSunk = player.getBoard().receiveAttack(x, y);
        return { cell, shipSunk }
    }

    const randomAttack = (player) => {
        const oppBoard = player.getBoard().readBoard();
        const attackableCells = [];

        oppBoard.forEach(oppRow => oppRow.forEach((cell, index) => {
            if(isOccupied(cell) || cell === ' ') attackableCells.push([cols[index], oppBoard.indexOf(oppRow) + 1])
        }));

        const chosenCell = attackableCells[Math.floor(Math.random() * attackableCells.length)]
        const shipSunk = player.getBoard().receiveAttack(chosenCell[0], chosenCell[1])

        return { chosenCell, shipSunk };
    }

    return { getName, getPossessive, getBoard, isComputer, attack, randomAttack }
}

module.exports = Player
