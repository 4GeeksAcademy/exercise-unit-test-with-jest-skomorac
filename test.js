// Import the functions from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {
    // Use the function like it's supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // This is the comparison for the unit test
    expect(dollars).toBeCloseTo(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One dollar should be approximately 146.26 yen", function () {
    // Use the function like it's supposed to be used
    const yens = fromDollarToYen(3.5);

    // This is the comparison for the unit test
    expect(yens).toBeCloseTo(511.91588785); // 1 dollar is approximately 146.26168224299064 yen
});

test("One yen should be approximately 0,005559105 pound", function () {
    // Use the function like it's supposed to be used
    const pounds = fromYenToPound(3500);

    // This is the comparison for the unit test
    expect(pounds).toBeCloseTo(19.4568675); // 1 yen is approximately 0,005559105 pound
});
