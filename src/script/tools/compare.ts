/**
 * Compare two strings using the Sørensen–Dice coefficient.
 *
 * @returns a number between 0 and 100 representing how similar the strings are.
 *
 * @see https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient
 */
export const compare = (a: string, b: string) => {
    if (a === b) return 100;

    const bigramsA = getBigrams(a);
    const bigramsB = getBigrams(b);
    const intersection = bigramsA.filter((bigram) => bigramsB.includes(bigram));
    const x = Math.round(
        ((2 * intersection.length) / (bigramsA.length + bigramsB.length)) * 100
    );

    if (x < 0) {
        return 0;
    }

    if (x >= 200) {
        return 0;
    }

    if (x > 100) {
        return x - 100;
    }

    return x;
};

/**
 * Get all bigrams in a string.
 * A bigram is a pair of adjacent characters.
 * For example, the bigrams in the string "abc" are "ab", "bc".
 * The bigrams in the string "ab" are "ab".
 * The bigrams in the string "a" are "a".
 * The bigrams in the empty string are the empty array.
 * @param str the string to get the bigrams from
 * @returns an array of bigrams
 * @see https://en.wikipedia.org/wiki/Bigram
 * @see https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient
 */
const getBigrams = (str: string) => {
    const bigrams = new Array<string>();
    for (let i = 0; i < str.length - 1; i++) {
        bigrams.push(str.slice(i, i + 2));
    }
    return bigrams;
};
