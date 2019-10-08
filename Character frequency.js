/* Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:

  letterFrequency('aaAabb dddDD hhcc')
will return

  [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]*/

function letterFrequency(text) {

    let textArr = text.toLowerCase().match(/[a-z]/gi);

    if (textArr === null) {
        return [];
    }

    let cache = {};

    for (let letter of textArr) {
        if (cache[letter]) {
            cache[letter]++
        } else {
            cache[letter] = 1;
        }
    }

    let entries = Object.entries(cache);

    let sorted = entries.sort((a, b) => {
        if (b[1] > a[1]) {
            return 1;
        }
        if (b[1] < a[1]) {
            return -1;
        }
        if (b[1] === a[1]) {
            if (b[0] > a[0]) {
                return -1;
            }
            if (b[0] < a[0]) {
                return 1;
            }
            if (b[0] === a[0]) {
                return 0;
            }
        }

    });

    return sorted;
}