function arrayToBST(array) {
    if (array.length === 0) return null;
    var node = new Node();
    var leftRightArrays = splitArray(array);
    var leftArray = leftRightArrays[0];
    var rightArray = leftRightArrays[1];
    node.left = arrayToBST(leftArray);
    node.right = arrayToBST(rightArray);
    return node;
}

function splitArray(array) {
    if (array.length === 0) return [[], []];
    if (array.length === 1) return [[], array];
    var mid = Math.floor(array.length / 2);
    var leftArray = array.splice(0, mid);
    var rightArray = array.splice(mid);
    return [leftArray, rightArray];
}

var a = []
expect(splitArray(a)).to.be.equal([[], []]);

var b = [1]
expect(splitArray(b)).to.be.equal([[], [1]]);

var c = [1,2]
// arr       mid    l       r
// [1,2]     1      [1]     [2]
expect(splitArray(c)).to.be.equal([[], [1]]);
