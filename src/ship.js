const Ship = (name, length) => {
    const shipLength = length;
    let hits = 0;

    const readHits = () => hits;
    const getShipLength = () => shipLength;
    const isSunk = () => hits === shipLength;
    const hit = () => { 
      if (!isSunk()) hits += 1;
    }

    return { name, readHits, getShipLength, hit, isSunk }
}

module.exports = Ship;
