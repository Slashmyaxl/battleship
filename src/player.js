const { isOccupied } = require('./helpers');
const { row, column, cols } = require('./conversions')

function Player(name) {
    const displayName = () => name;

    const attack = (x, y, oppBoard) => {
        oppBoard.receiveAttack(x, y)
    }

    const randomAttack = (board) => {
        const oppBoard = board.readBoard();
        let chosenX = row(Math.floor(Math.random() * (10 - 1) + 1));
        let chosenY = cols[Math.floor(Math.random() * 10)];
        if(!isOccupied(oppBoard[chosenX][cols.indexOf(chosenY)])) board.receiveAttack(chosenY, chosenX);
        else {
            chosenX = row(Math.floor(Math.random() * 10));
            chosenY = column(Math.floor(Math.random() * 10));
        }
    }

    return { displayName, attack, randomAttack }
}

module.exports = Player
