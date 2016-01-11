function listUnion(l1, l2) {
    if (l1.length === 0 || l2.length === 0)
        return false;
    var la, lb;
    if (l1.length >= l2.length) {
        la = l2;
        lb = l1;
    } else {
        la = l1;
        lb = l2;
    }
    lb = lb.sort(numericalCompare);
    var union = [];
    for (var i = 0; i < la.length; i++) {
        var binS = binarySearch(lb, la[i]);
        console.log(la[i] + " = " + binS);
        if (binS)
            union.push(la[i]);
    }
    return union;
}

function numericalCompare(a, b) {
    if (a < b) return -1;
    else if (a === b) return 0;
    else return 1;
}

function binarySearch(list, e) {
    console.log("binarySearch: " + e + " in " + list);
    if (list.length === 0) return false;
    if (list.length === 1) {
        if (list[0] === e) return true;
        else return false;
    }
    var mid = Math.floor(list.length / 2);
    console.log(mid);
    if (list[mid] === e) return true;
    if (list[mid] < e) return binarySearch(list.slice(mid+1), e);
    else return binarySearch(list.slice(0, mid), e);
}

var l1 = [-10, 5, -20, 1, 6, 9];
var l2 = [-7, 0, -10, 1, 7, 3, 20, 40];
var union = listUnion(l1, l2);
console.log(l1); // [-10, 1]
console.log(l2); // [-10, 1]
console.log(union); // [-10, 1]











