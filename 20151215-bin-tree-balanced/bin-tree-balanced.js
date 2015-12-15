var subtreeLength = function(node, len) {
    if (!node) return len;
    var leftLen = subtreeLength(node.left, len + 1);
    var rightLen = subtreeLength(node.right, len + 1);
    return Math.max(leftLen, rightLen);
}

var isBalanced = function(node) {
    if (!node) return true;
    var leftLen = subtreeLength(node.left, 0);
    var rightLen = subtreeLength(node.right, 0);
    if (Math.abs(leftLen - rightLen) > 1)
        return false;
    return true;
}
