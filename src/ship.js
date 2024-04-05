const Ship = (name, length) => {
    const getName = () => name;
    const shipLength = length;
    let hits = 0;

    const getShipLength = () => shipLength;
    const isSunk = () => hits === shipLength;
    const hit = () => { 
      if (!isSunk()) hits += 1;
    }

    return { getName, getShipLength, hit, isSunk }
}

module.exports = Ship;
