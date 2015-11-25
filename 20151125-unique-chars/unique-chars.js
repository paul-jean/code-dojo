/**
 * Return true if the given string has no repeated characters. Otherwise return
 * false.
 * @param {string} s - input string to check for unique characters
 * @return {boolean} - true if the string has all unique characters, otherwise
 * false
 */
var uniqueChars = function(s) {
    var len = s.length;
    var chars = {};
    for (var i = 0; i < len; i++) {
        if (chars[s[i]]) return false;
        else {
            chars[s[i]] = 1;
        }
    }
    return true;
}

var strings = [
    '',
    'a',
    'aa',
    'ab',
    'abcdefg',
    'abcdefga'
];

for (var i = 0; i < strings.length; i++) {
    console.log(strings[i] + ': ' + uniqueChars(strings[i]));
}
