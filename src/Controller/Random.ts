
/**
 * Source for generating random numbers in range within JavaScript/ TypeScript:
 * https://www.freecodecamp.org/news/generate-random-number-within-a-range-in-javascript/
 * 
 * Note: JavaScript/ TypeScript does not have a built-in random number 
 * generator between ranges.
 */
const getRandom = (min, max) => {
    const floatRandom = Math.random()
    const difference = max - min

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom);
    const randomWithinRange = random + min;

    return randomWithinRange;
}

export default getRandom