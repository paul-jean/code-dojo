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

function binaryTreeToString(node, level) {
    str = "\n";
    for (var i = 0; i < level; i++) str += "    ";
    if (!node) return "";
    str += node.data;
    //str += "---|";
    str += binaryTreeToString(node.left, level + 1);
    str += binaryTreeToString(node.right, level + 1);
    return str;
}

/*
console.log(splitArray([]));
console.log(splitArray([1]));
console.log(splitArray([1,2]));
console.log(splitArray([1,2,3]));
console.log(splitArray([1,2,3,4]));
*/

var tests = [
    [1],
    [1,2],
    [1,2,3],
    [1,2,3,4,5,6,7],
    [4, 7, 10, 20, 40, 41, 42, 60, 100, 120]
];

for (var a of tests) {
    console.log("----------");
    console.log(a);
    console.log(binaryTreeToString(arrayToBST(a), 0));
}
