const Ship = (name, length) => {
    const shipLength = length;
    let hits = 0;

    const getShipLength = () => shipLength;
    const isSunk = () => hits === shipLength;
    const hit = () => { 
      if (!isSunk()) hits += 1;
    }

    return { name, getShipLength, hit, isSunk }
}

module.exports = Ship;
