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

/**
 * Implementation without a hash table.
 * Algorithm:
 * - take ith char in string
 * - iterate through string from position i + 1 to look for that char
 * - if not found, then this char was unique
 *
 */
var uniqueCharsNoHash = function (s) {
    var charBeingChecked;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        charBeingChecked = s[i];
        for (var j = i + 1; j < len; j++) {
            if (s[j] === charBeingChecked) return false;
        }
    }
    return true;
}

/*
abca    i   j   s[i]    s[j]    return
^       0       a
 ^          1           b
  ^         2           c
   ^        3           a       false


abcd    i   j   s[i]    s[j]    return
^       0       a
 ^          1           b
  ^         2           c
   ^        3           d
 ^      1       b
            2           c
            3           d
  ^     2       c
            3           d
   ^    3       d
            4           -
                                true

''      i   j   s[i]    s[j]    return
^       0       ''
                                true

a       i   j   s[i]    s[j]    return
^       0       q
            1           -
                                true
 */

console.log();
console.log('no hash ...');
for (var i = 0; i < strings.length; i++) {
    console.log(strings[i] + ': ' + uniqueCharsNoHash(strings[i]));
}

