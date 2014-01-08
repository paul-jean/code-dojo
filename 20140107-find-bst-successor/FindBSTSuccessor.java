public class FindBSTSuccessor {

    public static TreeNode findBSTSuccessor(TreeNode n) {

        if (n == null) throw new NullPointerException();
        TreeNode next = null;
        if (n.parent != null) next = n.parent;
        return searchSubtree(n.right, n, next);
    }

    private static TreeNode searchSubtree(TreeNode root, TreeNode n, TreeNode next) {

        if (root == null) return next; // base case
        if (next == null) next = root;
        int diff = root.data - n.data;
        int minDiff = next.data - n.data;
        if (diff < minDiff) next = root;
        return searchSubtree(root.left, n, next);
    }
}