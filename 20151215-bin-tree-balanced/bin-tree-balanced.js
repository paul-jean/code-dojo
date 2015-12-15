var isBalanced = function(node, lenLeft, lenRight) {
    var lenLeft, lenRight;
    if (node.left && node.right)
        isBalanced(node.left, lenLeft + 1, lenRight + 1);
    if (node.left && !node.right)
        isBalanced(node.left, lenLeft + 1, lenRight);
    if (!node.left && node.right)
        isBalanced(node.left, lenLeft, lenRight + 1);
    // leaf node:
    if (!node.left && !node.right)
    if (Math.abs(lenLeft - lenRight) > 1)
        return false;
    return true;
}
