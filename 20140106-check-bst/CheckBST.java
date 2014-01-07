public class CheckBST {

    public static boolean checkBST(TreeNode root) {
        if (root != null) System.out.println(root.data);
        if (root == null) return true;
        if (root.left != null && root.data < root.left.data) return false;
        if (root.right != null && root.data >= root.right.data) return false;
        return checkBST(root.left) && checkBST(root.right);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(3);
        root.right = new TreeNode(12);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(11);
        root.right.right = new TreeNode(15);
        System.out.println();
        System.out.println("Tree:");
        System.out.println(root);
        System.out.println(checkBST(root));
    }
}