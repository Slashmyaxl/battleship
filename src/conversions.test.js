const { row, column } = require('./conversions');

test('proper row index', () => {
    expect(row(2)).toBe(1)
})

test('do not allow row OOB', () => {
    expect(() => {
        row(11);
    }).toThrow(new Error('Out of bounds!'))
})

test('proper column index', () => {
    expect(column('D')).toBe(3)
})

test('do not allow column OOB', () => {
    expect(() => {
        column('K');
    }).toThrow(new Error('Out of bounds!'))
})