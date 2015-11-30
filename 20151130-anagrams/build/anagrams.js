'use strict';

var isAnagram = function isAnagram(s1, s2) {
    if (s1.length != s2.length) return false;
    if (s1.length === 0) return true;
    // tally occurences of each char in s1:
    var h1 = {};
    var h2 = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = s1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c1 = _step.value;

            if (!h1[c1]) h1[c1] = 1;else h1[c1]++;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = s2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var c2 = _step2.value;

            if (!h2[c2]) h2[c2] = 1;else h2[c2]++;
        }
        // compare tallies for s1 and s2
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    for (var k1 in h1) {
        if (h1[k1] != h2[k1]) return false;
    }
    for (var k2 in h2) {
        if (h1[k2] != h2[k2]) return false;
    }
    return true;
};

var tests = [['', ''], ['a', 'a'], ['ab', 'ba'], ['ab', 'ac'], // false
['aab', 'aba'], ['aab', 'aac'], // false
['aab', 'aca'] // false
];

for (var i = 0; i < tests.length; i++) {
    var test = tests[i];
    console.log('s1 = ' + test[0] + ' , s2 = ' + test[1] + ' ...');
    console.log(isAnagram(test[0], test[1]));
}

