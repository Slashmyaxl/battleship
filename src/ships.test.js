const Ship = require('./ship');

const cruiser = Ship('Cruiser', 3);
const destroyer = Ship('Destroyer', 2);

beforeAll(() => {
    destroyer.hit();
    destroyer.hit();
    cruiser.hit();
    cruiser.hit();
})

test('ship sunk once length === hits', () => {
    expect(destroyer.isSunk()).toBeTruthy();
})

test('ship not sunk until length === hits', () => {
    expect(cruiser.isSunk()).toBeFalsy();
})

test('hits > length not counted', () => {
    cruiser.hit();
    cruiser.hit();
    expect(cruiser.isSunk()).toBeTruthy();
})