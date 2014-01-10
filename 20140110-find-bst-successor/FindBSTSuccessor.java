public class FindBSTSuccessor {

    public static TreeNode findBSTSuccessor(TreeNode n) {

        if (n.left != null && n.left.data == n.data) return n.left;
        if (n.right == null && n.parent != null) return n.parent;
        TreeNode minRightSubtree = minInSubtree(n, n);
        if (minRightSubtree != null) return minRightSubtree;
        if (n.parent != null) return n.parent;
        return null;
    }

    private static TreeNode minInSubtree(TreeNode root, TreeNode min) {

        if (root == null) return min;
        if (root.data <= min.data) min = root;
        return minInSubtree(root.left, min);
    }
}