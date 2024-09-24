
const { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => { 
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})


test("Five dollars should be 731.31 yen", function() {
    const yen = fromDollarToYen(5);
    const expected = (5 / 1.07) * 156.5; 
    expect(yen).toBeCloseTo(expected); 
});


test("1000 yen should be 5.559 pounds", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87; 
    expect(pounds).toBeCloseTo(expected); 
});