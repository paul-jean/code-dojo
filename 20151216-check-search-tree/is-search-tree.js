var isSearchTree = function(node) {
    if (!node) return true;
    if (node.left) {
        if (node.left.data < node.data)
            return isSearchTree(node.left);
    } else {
        return false;
    }
    if (node.right) {
        if (node.right.data >= node.data)
            return isSearchTree(node.right);
    } else {
        return false;
    }
}

var tree = new BinaryTree(0);
tree.left = new BinaryTree(-1);
tree.right = new BinaryTree(1);

expect(isSearchTree(tree)).to.be.equal(true);

var tree2 = new BinaryTree(0);
tree2.left = new BinaryTree(0);
tree2.right = new BinaryTree(1);

expect(isSearchTree(tree2)).to.be.equal(false);
