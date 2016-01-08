function listUnion(l1, l2) {
    var la, lb;
    if (l1.length < l2.length) {
        la = l1;
        lb = l2;
    } else {
        lb = l1;
        la = l2;
    }
    lb.sort(compare);
    var union = [];
    for (var i = 0; i < la.length; i++) {
        if (lb.indexOf(la[i]) >= 0)
                union.push(la[i]);
    }
    return union;
}

function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

var l1 = [4, 1, 10, 2, 3];
var l2 = [20, 11, 1, 3, 10, 5, -10, -5];

var un = listUnion(l1, l2);
console.log(un);
