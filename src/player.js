const { isOccupied } = require('./helpers');
const { cols } = require('./conversions')

function Player(name) {
    const displayName = () => name;

    const attack = (x, y, oppBoard) => {
        oppBoard.receiveAttack(x, y)
    }

    const randomAttack = (board) => {
        const oppBoard = board.readBoard();
        const attackableCells = [];

        oppBoard.forEach(oppRow => oppRow.forEach((cell, index) => {
            if(isOccupied(cell) || cell === ' ') attackableCells.push([cols[index], oppBoard.indexOf(oppRow) + 1])
        }));

        const chosenCell = attackableCells[Math.floor(Math.random() * attackableCells.length)]
        board.receiveAttack(chosenCell[0], chosenCell[1])
    }

    return { displayName, attack, randomAttack }
}

module.exports = Player
