const Ship = (name) => {
  let shipLength;

  switch (name) {
    case "Carrier":
      shipLength = 5;
      break;
    case "Battleship":
      shipLength = 4;
      break;
    case "Cruiser":
    case "Submarine":
      shipLength = 3;
      break;
    case "Destroyer":
      shipLength = 2;
      break;
    default:
      throw new Error("Unexpected ship name.");
  }

  let hits = 0;
  const readHits = () => hits;
  const getShipLength = () => shipLength;
  const isSunk = () => hits === shipLength;
  const hit = () => {
    if (!isSunk()) hits += 1;
  };

  return { name, readHits, getShipLength, hit, isSunk };
};

module.exports = Ship;
