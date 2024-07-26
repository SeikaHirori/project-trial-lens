"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Source for generating random numbers in range within JavaScript/ TypeScript:
 * https://www.freecodecamp.org/news/generate-random-number-within-a-range-in-javascript/
 *
 * Note: JavaScript/ TypeScript does not have a built-in random number
 * generator between ranges.
 */
var getRandom = function (min, max) {
    var floatRandom = Math.random();
    var difference = max - min;
    // random between 0 and the difference
    var random = Math.round(difference * floatRandom);
    var randomWithinRange = random + min;
    return randomWithinRange;
};
exports.default = getRandom;
