const Player = require('./player');
const Display = require('./display');

let players = [];
let activePlayer;

const getInactivePlayer = () => {
    if (activePlayer === players[0]) return players[1];
    return players[0];
}

function playerTurn(player) {
    const defender = getInactivePlayer();
    if (!player.isComputer() && !isGameOver()) {
        const oppCells = document.querySelectorAll('#p2 > .cell');
        oppCells.forEach(cell => cell.addEventListener('click', () => {
            player.attack(cell.dataset.column, cell.dataset.row, defender);
            Display.updateDisplay(defender);
            console.log(isGameOver());
            
            activePlayer = defender
            playerTurn(activePlayer);      
        }))
    } else if (player.isComputer() && !isGameOver()) {
        player.randomAttack(defender);
        Display.updateDisplay(defender);
        activePlayer = defender;
        playerTurn(activePlayer);
    } else Display.gameOver(activePlayer);
}

function placeAllShips() { 
    activePlayer.getBoard().placeShip('Destroyer', 'B', 2);
    activePlayer.getBoard().placeShip('Carrier', 'C', 9);
    activePlayer.getBoard().placeShip('Cruiser', 'A', 3, 'vertical');
    activePlayer.getBoard().placeShip('Battleship', 'F', 4, 'vertical');
    activePlayer.getBoard().placeShip('Submarine', 'H', 1, 'vertical');
    getInactivePlayer().getBoard().placeShip('Destroyer', 'A', 2);
    getInactivePlayer().getBoard().placeShip('Carrier', 'B', 10);
    getInactivePlayer().getBoard().placeShip('Cruiser', 'J', 1, 'vertical');
    getInactivePlayer().getBoard().placeShip('Battleship', 'E', 5, 'vertical');
    getInactivePlayer().getBoard().placeShip('Submarine', 'H', 1, 'vertical');
};

function isGameOver() {
    return getInactivePlayer().getBoard().allShipsSunk();
}

function gameplay() {
  players = [Player('You'), Player('Computer', true)];
  activePlayer = players[0];
  Display.renderDisplay();
  placeAllShips();     
  Display.updateDisplay(activePlayer);
  Display.updateDisplay(getInactivePlayer());
  playerTurn(activePlayer);

}

module.exports = gameplay;