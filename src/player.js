const { isOccupied } = require('./helpers');
const { row, column, cols } = require('./conversions')

function Player(name) {
    const displayName = () => name;

    const attack = (x, y, oppBoard) => {
        oppBoard.receiveAttack(x, y)
    }

    const randomAttack = (board) => {
        const oppBoard = board.readBoard();
        const chosenX = row(Math.floor(Math.random() * (10 - 1) + 1));
        const chosenY = cols[Math.floor(Math.random() * 10)];
        const chosenCell = oppBoard[chosenX][cols.indexOf(chosenY)]
        if(isOccupied(chosenCell) || chosenCell === ' ') return board.receiveAttack(chosenY, chosenX);
        return randomAttack(board);
    }

    return { displayName, attack, randomAttack }
}

module.exports = Player
