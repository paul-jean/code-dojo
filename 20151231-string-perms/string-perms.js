function findStringPerms(s) {
    if (s.length === 0)
        return [];
    if (s.length === 1)
        return [s];
    var perms = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        var remaining = s.slice(0, i) + s.slice(i+1);
        substringPerms = findStringPerms(remaining);
        for (var j = 0; j < substringPerms.length; j++) {
            var snew = c + substringPerms[j];
            perms.push(snew);
        }
    }
    return perms;
}
var t1 = findStringPerms('abc');
console.log(t1);
console.log(t1.length);
console.log(3 * 2);

var t2 = findStringPerms('abcd');
console.log(t2);
console.log(t2.length);
console.log(4 * 3 * 2);
