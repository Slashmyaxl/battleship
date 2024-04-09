const { isOccupied } = require("./helpers");
const { placeAllShips, placeRandomShips } = require("./ship-placement");
const { cols } = require("./conversions");

function Player(name, computer = false) {
  const getName = () => name;
  const getPossessive = () => (name === "You" ? "Your" : `${name}'s`);
  const isComputer = () => computer === true;

  const randomAttack = (board) => {
    const oppBoard = board.readBoard();
    const attackableCells = [];
    oppBoard.forEach((oppRow) =>
      oppRow.forEach((cell, index) => {
        if (isOccupied(cell) || cell === " ")
          attackableCells.push([cols[index], oppBoard.indexOf(oppRow) + 1]);
      }),
    );
    const chosenCell =
      attackableCells[Math.floor(Math.random() * attackableCells.length)];

    return chosenCell;
  };

  const placeShips = (board, random = false) => {
    if (!random) placeAllShips(board);
    else placeRandomShips(board);
  };

  return { getName, getPossessive, isComputer, randomAttack, placeShips };
}

module.exports = Player;
