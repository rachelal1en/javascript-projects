const checkFive = require('../checkFive.js');

describe("checkFive", function () {

    test("should return as less than 5 when passed a number less than 5", function () {
        expect(checkFive(2)).toBe("2 is less than 5.");
    });

    test("should return as greather than 5 when passed a number greater than 5", function () {
        expect(checkFive(6)).toBe("6 is greater than 5.");
    });

    test("should return as equal to 5 when passed a number equal to 5", function () {
        expect(checkFive(5)).toBe("5 is equal to 5.");
    });
});