const filterFoodPrice = require('./food');
const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];
const min = 12, max = 40;

test('Checking sorted food length', () => {
    expect(filterFoodPrice(food,min,max)).toHaveLength(3);
});

test('Checking sorted food Properties with pepper for 27', () => {
    expect(filterFoodPrice(food,min,max)).toEqual(expect.arrayContaining([{ kind: 'pepper', price: 27}]));
});

test('Checking sorted food Properties 3 records', () => {
    expect(filterFoodPrice(food,min,max)).toEqual(expect.arrayContaining([food[1],food[2],food[3]]));
});

test('Checking sorted food Properties min price', () => {
    expect((filterFoodPrice(food,min,max))[0].price).toBeGreaterThan(min);
});

test('Checking sorted food Properties max price', () => {
    expect((filterFoodPrice(food,min,max))[2].price).toBeLessThan(max);
});

test('Checking sorted food Properties without lemon for 50', () => {
    expect(filterFoodPrice(food,min,max)).not.toEqual(expect.arrayContaining([{ kind: 'lemon', price: 50 }]));
});

test('Checking sorted food Properties undefined', () => {
    expect((filterFoodPrice(food,min,max))[3]).toBeUndefined;
});

test('Checking sorted food to be object', () => {
    expect(typeof filterFoodPrice(food,min,max)).toBe("object");
});

test('Checking sorted food is not initial food', () => {
    expect(filterFoodPrice(food,min,max)).not.toEqual(expect.arrayContaining(food));
});