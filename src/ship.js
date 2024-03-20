const Ship = (length) => {
    const shipLength = length;
    let hits = 0;
    let sunk = false

    const hit = () => {
        hits += 1;
        return `${this} has taken ${hits} hits.`
    }

    const isSunk = () => {
        if (hits === shipLength) sunk = true;
        return sunk;
    }

    return { hit, isSunk }
}

module.exports = Ship;