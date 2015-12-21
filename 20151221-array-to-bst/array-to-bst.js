function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function arrayToBST(array) {
    if (array.length === 0) return null;
    var leftRightArrays = splitArray(array);
    var leftArray = leftRightArrays[0];
    var rightArray = leftRightArrays[1];
    var nodeData, rightArray;
    if (rightArray.length > 0) {
        nodeData = rightArray[0];
        rightArray = rightArray.splice(1);
    } else {
        nodeData = leftArray[0];
        leftArray = leftArray.splice(1);
    }
    var node = new Node(nodeData);
    node.left = arrayToBST(leftArray);
    node.right = arrayToBST(rightArray);
    return node;
}

function splitArray(array) {
    if (array.length === 0) return [[], []];
    if (array.length === 1) return [[], array];
    var mid = Math.floor(array.length / 2);
    var leftArray = array.slice(0, mid);
    var rightArray = array.slice(mid);
    return [leftArray, rightArray];
}

var a = []
expect(splitArray(a)).to.be.equal([[], []]);

var b = [1]
expect(splitArray(b)).to.be.equal([[], [1]]);

var c = [1,2]
// arr       mid    l       r
// [1,2]     1      [1]     [2]
expect(splitArray(c)).to.be.equal([[1], [2]]);

var arr = [1, 2, 3, 4, 5, 6, 7];
/*
    arr                 l           node        r
    [1,2,3,4,5,6,7]     [1,2,3]     4           [5,6,7]
    [1,2,3]             [1]         2           [3]
    [5,6,7]             [5]         6           [7]
    [5]                 []          5           []
    [7]                 []          7           []
*/
/*
    arr                 mid    l        r
    [1,2,3,4,5,6,7]     3      [1,2,3]  [4,5,6,7]
    [1,2,3]             1      [1]      [2,3]
*/
/*
arrayToBST([1,2,3,4,5,6,7])

4
    2
        1
        3
    6
        5
        7
*/
