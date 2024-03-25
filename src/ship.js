const Ship = (name, length) => {
    const shipLength = length;
    let hits = 0;

    const readShipLength = () => shipLength;
    const readHits = () => hits;

    const isSunk = () => hits === shipLength;
    
    const hit = () => { 
      if (!isSunk()) hits += 1;
    }

    return { name, readShipLength, readHits, hit, isSunk }
}

module.exports = Ship;
