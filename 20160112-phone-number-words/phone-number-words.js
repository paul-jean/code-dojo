function populateWords(digits, prefix, foundWords) {
    console.log(prefix);
    if (digits.length === 0) {
        if (isWord(prefix)) {
                foundWords.push(prefix);
        }
    }
    var digit = digits[0];
    var letters = digitLetters(digit);
    for (letter of letters) {
        var newPrefix = prefix + letter;
        populateWords(digits.slice(1), newPrefix, foundWords);
    }
}

function findWords(digits) {
    foundWords = [];
    populateWords(digits, '', foundWords);
    return foundWords;
}

function isWord(prefix) {
    if (prefix === 'cat' || prefix === 'act')
        return true;
    return false;
}

function digitLetters(digit) {
    switch (digit) {
        case '2':
            return ['a', 'b', 'c'];
        case '3':
            return ['d', 'e', 'f'];
        case '4':
            return ['g', 'h', 'i'];
        case '5':
            return ['j', 'k', 'l'];
        case '6':
            return ['m', 'n', 'o'];
        case '7':
            return ['p', 'q', 'r', 's'];
        case '8':
            return ['t', 'u', 'v'];
        case '9':
            return ['w', 'x', 'y', 'z'];
        default:
            return [];
    }
}

console.log(findWords('228'));
