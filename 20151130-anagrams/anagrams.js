var isAnagram = function(s1, s2) {
    if (s1.length != s2.length) return false;
    if (s1.length === 0) return true;
    // tally occurences of each char in s1:
    var h1 = {};
    var h2 = {};
    for (var c1 of s1) {
        if (!h1[c1]) h1[c1] = 1;
        else h1[c1]++;
    }
    for (var c2 of s2) {
        if (!h2[c2]) h2[c2] = 1;
        else h2[c2]++;
    }
    // compare tallies for s1 and s2
    for (var k1 in h1) {
        if (h1[k1] != h2[k1]) return false;
    }
    for (var k2 in h2) {
        if (h1[k2] != h2[k2]) return false;
    }
    return true;
}


var tests = [
    ['', ''],
    ['a', 'a'],
    ['ab', 'ba'],
    ['ab', 'ac'], // false
    ['aab', 'aba'],
    ['aab', 'aac'], // false
    ['aab', 'aca'] // false
]

for (var i = 0; i < tests.length; i++) {
    var test = tests[i];
    console.log('s1 = ' + test[0] + ' , s2 = ' + test[1] + ' ...');
    console.log(isAnagram(test[0], test[1]));
}


