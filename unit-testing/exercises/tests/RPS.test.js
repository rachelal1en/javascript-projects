const whoWon = require('../RPS.js');

describe("RPS", function () {

    test("should return as tie if player 1 and player 2 make the same choice", function () {
        expect(whoWon("rock", "rock")).toBe("TIE!");
    });

    test("should return paper beats rock", function () {
        expect(whoWon("rock", "paper")).toBe('Player 2 wins!');
    });

    test("should return scissors beats paper", function () {
        expect(whoWon("paper", "scissors")).toBe('Player 2 wins!');
    });

    test("should return rock beats scissors", function () {
        expect(whoWon("scissors", "rock")).toBe('Player 2 wins!');
    });

    test("should return scissors beats paper", function () {
        expect(whoWon("scissors", "paper")).toBe('Player 1 wins!');
    });

    test("should return incorrect entry", function () {
        expect(whoWon("apple", "paper")).toBe(`Incorrect entry. Please choose "rock", "paper", or "scissors".`);
    });
});