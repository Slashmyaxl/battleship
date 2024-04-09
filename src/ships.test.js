const Ship = require("./ship");

const cruiser = Ship("Cruiser");
const destroyer = Ship("Destroyer");

beforeAll(() => {
  destroyer.hit();
  destroyer.hit();
  cruiser.hit();
  cruiser.hit();
});

test("invalid ship name", () => {
  expect(() => {
    Ship("Schooner");
  }).toThrow(new Error("Unexpected ship name."));
});

test("ship sunk once length === hits", () => {
  expect(destroyer.isSunk()).toBeTruthy();
});

test("ship not sunk until length === hits", () => {
  expect(cruiser.isSunk()).toBeFalsy();
});

test("hits > length not counted", () => {
  cruiser.hit();
  cruiser.hit();
  expect(cruiser.isSunk()).toBeTruthy();
});
