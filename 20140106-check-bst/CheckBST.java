public class CheckBST {

    public static boolean checkBST(TreeNode root) {
        if (root.left != null) {
            if (root.data < root.left.data) return false;
            else checkBST(root.left);
        }
        if (root.right != null) {
            if (root.data >= root.right.data) return false;
            else checkBST(root.right);
        }
        return true;
    }
}