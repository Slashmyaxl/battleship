const Ship = (name, length) => {
    const shipLength = length;
    let hits = 0;
    let sunk = false

    const readShipLength = () => shipLength;

    const hit = () => {
        hits += 1;
        return `${this} has taken ${hits} hits.`
    }

    const isSunk = () => {
        if (hits === shipLength) sunk = true;
        return sunk;
    }

    return { name, readShipLength, hit, isSunk }
}

module.exports = Ship;

const carrier = Ship('Carrier', 5);
console.log(carrier.readShipLength())