function doesMatchPattern(s, patt) {
    if (!s && !patt) return true;
    if ((!s && patt) || (s && !patt)) return false;
    var sWords = s.split(" ");
    var pattWords = patt.split(" ");
    if (sWords.length != pattWords.length) return false;
    var s2p = {};
    var p2s = {};
    for (var i = 0; i < sWords.length; i++) {
        if (!p2s[pattWords[i]])
            p2s[pattWords[i]] = sWords[i];
        else
            if (p2s[pattWords[i]] != sWords[i])
                return false;
        if (!s2p[sWords[i]])
            s2p[sWords[i]] = pattWords[i];
        else
            if (s2p[sWords[i]] != pattWords[i])
                return false;
    }
    return true;
}

var s1 = "cat dog dog cat";
var p1 = "a b b a";
console.log("string: " + s1);
console.log("pattern: " + p1);
console.log(doesMatchPattern(s1, p1));

var s2 = "cat dog dog cat";
var p2 = "a b b c";
console.log("string: " + s2);
console.log("pattern: " + p2);
console.log(doesMatchPattern(s2, p2));
