const Player = require('./player')
const Gameboard = require('./gameboard')
const { row, column } = require ('./conversions')

describe('player attacks', () => {
    const player1 = Player('Nimitz');
    const p2Board = Gameboard();

    beforeAll(() => { 
        p2Board.placeShip('Destroyer', 'B', 5);
        player1.attack('B', 4, p2Board);
        player1.attack('B', 5, p2Board);
    });

    test('player name', () => {
        expect(player1.displayName()).toBe('Nimitz')
    })

    test('player misses on opponent\'s board', () => {
        expect(p2Board.readBoard()[row(4)][column('B')]).toBe('O');
    })

    test('opponent board registers hit', () => {
        expect(p2Board.readBoard()[row(5)][column('B')]).toBe('X');
    })
})

describe('computer attacks', () => {
    const player2 = Player('Computer');
    const p1Board = Gameboard();
    p1Board.receiveAttack('A', 2);
    p1Board.receiveAttack('B', 3);
    p1Board.receiveAttack('A', 8)

    test('random attack', () => {
        player2.randomAttack(p1Board);
        expect(p1Board.readBoard().find(row => row.includes('O'))).toBeTruthy()
    })

})