const Player = require('./player');
const { renderBoard } = require('./display-helpers');
const { p1Board, p2Board } = require ('./display')

function gameplay() {
    const players = [Player('You'), Player('Computer', true)]
    let activePlayer = players[0];

    renderBoard(players[0].getBoard().readBoard(), p1Board);
    renderBoard(players[1].getBoard().readBoard(), p2Board);

    const getPlayers = () => players;

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
        renderBoard(players[0].getBoard().readBoard(), p1Board);
        renderBoard(players[1].getBoard().readBoard(), p2Board); 
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