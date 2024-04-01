const Player = require('./player');
const { renderCells } = require('./display-helpers');


function gameplay() {
    const players = [Player('You'), Player('Computer', true)];
    const getPlayers = () => players;
    let activePlayer = players[0];

    function inactivePlayer()  {
        if (activePlayer === players[0]) return players[1];
        return players[0];
    }

    function placeAllShips() { 
        activePlayer.getBoard().placeShip('Destroyer', 'B', 2);
        activePlayer.getBoard().placeShip('Carrier', 'C', 9);
        activePlayer.getBoard().placeShip('Cruiser', 'A', 1, 'vertical');
        activePlayer.getBoard().placeShip('Battleship', 'E', 5, 'vertical');
        activePlayer.getBoard().placeShip('Submarine', 'H', 1, 'vertical');
        inactivePlayer().getBoard().placeShip('Destroyer', 'A', 2);
        inactivePlayer().getBoard().placeShip('Carrier', 'B', 9);
        inactivePlayer().getBoard().placeShip('Cruiser', 'J', 1, 'vertical');
        inactivePlayer().getBoard().placeShip('Battleship', 'E', 5, 'vertical');
        inactivePlayer().getBoard().placeShip('Submarine', 'H', 1, 'vertical');
    };

    function startGame() {
        placeAllShips();
        const p1Board = document.querySelector('.board#p1');
        const p2Board = document.querySelector('.board#p2')
        renderCells(players[0], p1Board)
        renderCells(players[1], p2Board)

        
        //while (players[0].getBoard().allShipsSunk() && !players[0].getBoard().allShipsSunk()) {
            const oppCells = document.querySelectorAll('.board#p2 > .cell');
            
            oppCells.forEach(cell => cell.addEventListener('click', () => {
                players[0].attack(cell.dataset.column, cell.dataset.row, players[1]);
                console.log('attacked');
                renderCells(players[1], p2Board)
            }))
            
        //}
    }

    const switchPlayer = () => {
        if (activePlayer === players[0]) activePlayer = players[1];
        else activePlayer = players[0];
    }

    function playerTurn(x, y) {
        if (!activePlayer.isComputer()) activePlayer.attack(x, y, inactivePlayer());
        else activePlayer.randomAttack(inactivePlayer())
    }

    return { getPlayers, startGame }
}

module.exports = gameplay;