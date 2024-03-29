const Player = require('./player')
const { row, column } = require ('./conversions')

const player1 = Player('Nimitz');
const player2 = Player('Computer');

describe('player attacks', () => {

    beforeAll(() => { 
        player2.getBoard().placeShip('Destroyer', 'B', 5);
        player1.attack('B', 4, player2);
        player1.attack('B', 5, player2);
    });

    test('player name', () => {
        expect(player1.displayName()).toBe('Nimitz')
    })

    test('player misses on opponent\'s board', () => {
        expect(player2.getBoard().readBoard()[row(4)][column('B')]).toBe('O');
    })

    test('opponent board registers hit', () => {
        expect(player2.getBoard().readBoard()[row(5)][column('B')]).toBe('X');
    })
})

describe('computer attacks', () => {
    player1.getBoard().receiveAttack('A', 2);
    player1.getBoard().receiveAttack('B', 3);
    player1.getBoard().receiveAttack('A', 8)

    test('random attack', () => {
        player2.randomAttack(player1);
        expect(player1.getBoard().readBoard().find(row => row.includes('O'))).toBeTruthy()
    })

})