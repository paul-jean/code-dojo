function isEqual(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 && root2) return false;
    if (root1 && !root2) return false;
    if (root1.data !== root2.data) return false;
    return isEqual(root1.left, root2.left) &&
        isEqual(root1.right, root2.right);
}

function findSubtree(root1, root2) {
    if (isEqual(root1, root2) ||
        findSubtree(root1.left, root2) ||
        findSubtree(root1.right, root2))
        return true;
    return false;
}
