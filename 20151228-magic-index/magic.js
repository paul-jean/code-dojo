function findMagicIndex(a, i, j) {
    console.log("i,j = " + i + ", " + j);
    var mid = Math.floor((i + j)/2);
    if (mid < 0 || mid > a.length - 1)
        return -1;
    if (a[mid] === mid)
        return mid;
    if (a[mid] > mid)
        return findMagicIndex(a, i, mid - 1);
    if (a[mid] < mid)
        return findMagicIndex(a, mid + 1, j);
}

var t1 = [-5, -1, 0, 3, 7, 10];
console.log(t1);
console.log(findMagicIndex(t1, 0, t1.length-1));
