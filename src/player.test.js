const Player = require("./player");
const Gameboard = require("./gameboard");

const player1 = Player("You");
const p1Board = Gameboard();
const player2 = Player("Computer", true);

describe("player attributes", () => {
  test("player name", () => {
    expect(player1.getName()).toBe("You");
    expect(player2.getName()).toBe("Computer");
  });

  test("player possessive pronoun", () => {
    expect(player2.getPossessive()).toBe("Computer's");
    expect(player1.getPossessive()).toBe("Your");
  });

  test("non-human player correctly determined", () => {
    expect(player1.isComputer()).toBeFalsy();
    expect(player2.isComputer()).toBeTruthy();
  });
});

describe("computer chooses random cell", () => {
  test("cell returned in proper format", () => {
    expect(player2.randomAttack(p1Board)).toEqual(expect.any(Array));
    expect(player2.randomAttack(p1Board)).toHaveLength(2);
  });
});
