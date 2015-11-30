var anagramQ = function(s1, s2) {
    if (s1.length != s2.length) return false;
    if (s1.length === 0) return true;
    // tally occurences of each char in s1:
    var h1 = {};
    var h2 = {};
    for (var i = 0; i < s1.length; i++) {
        var c1 = s1[i];
        if (!h1[c1]) h1[c1] = 1;
        else h1[c1]++;
        var c2 = s2[i];
        if (!h2[c2]) h2[c2] = 1;
        else h2[c2]++;
    }
    // compare tallies for s1 and s2
    var keys1 = Object.keys(h1)
    for (var n = 0; n < keys1.length; n++) {
        var k1 = keys1[n];
        if (h1[k1] != h2[k1]) return false;
    }
    var keys2 = Object.keys(h2)
    for (var m = 0; m < keys2.length; m++) {
        var k2 = keys2[m];
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
    ['aab', 'aca']
]

for (var i = 0; i < tests.length; i++) {
    var test = tests[i];
    console.log('s1 = ' + test[0] + ' , s2 = ' + test[1] + ' ...');
    console.log(anagramQ(test[0], test[1]));
}


