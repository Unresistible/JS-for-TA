const circle = require('./calcCircle');

test('Checking getCircleLength value', () => {
    expect(circle.getCircleLength(22).toFixed(1)).toBe("138.2");
});

test('Checking getCircleArea value', () => {
    expect(circle.getCircleArea(9).toFixed(2)).toBe("254.47");
});

test('Checking getCircleLength is NaN', () => {
    expect(circle.getCircleLength()).toBeNaN();
});

test('Checking getCircleArea is NaN', () => {
    expect(circle.getCircleArea()).toBeNaN();
});