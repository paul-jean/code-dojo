public class FindFCA {

    public static TreeNode findFCA(TreeNode root, TreeNode a, TreeNode b) {

        if (root == null) return null;
        if (root.data == a.data || root.data == b.data) return root;
        if ((contains(root.left, a) && contains(root.right, b)) || 
                (contains(root.left, b) && contains(root.right, a)))
            return root;
        if (contains(root.left, a) && contains(root.left, b))
            return findFCA(root.left, a, b);
        return findFCA(root.right, a, b);
    }

    private static boolean contains(TreeNode root, TreeNode n) {
        
        if (root == null) return false;
        if (root.data == n.data) return true;
        return contains(root.left, n) || contains(root.right, n);
    }
}
