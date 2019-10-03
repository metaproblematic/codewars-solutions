/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(word) {
    let cache = {};
    let finalStr = '';

    word = word.toLowerCase();

    let arr = [...word];

    for (let e of arr) {
        if (cache[e]) {
            cache[e]++;
        } else {
            cache[e] = 1;
        }
    }

    for (let e of arr) {
        if (cache[e] === 1) {
            finalStr += '(';
        }
        if (cache[e] > 1) {
            finalStr += ')';
        }
    }
    return finalStr;
}