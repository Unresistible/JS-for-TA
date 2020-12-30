const sum = require('./task1');

describe("sum tests", () => {
    test('sum 2 and 3 is 5', () => {
        expect(sum(2, 3)).toBe(5);
    });
})
