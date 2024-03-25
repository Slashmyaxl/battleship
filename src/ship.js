const Ship = (name, length) => {
    const shipLength = length;
    let hits = 0;
    let sunk = false

    const readShipLength = () => shipLength;

    const isSunk = () => {
        if (hits === shipLength) sunk = true;
        return sunk;
    }

    const hit = () => { 
        if (!isSunk()) {
        hits += 1;
        isSunk();
        }
    }

    return { name, readShipLength, hit, isSunk }
}

module.exports = Ship;
