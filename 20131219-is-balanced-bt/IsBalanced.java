public class IsBalanced {

    public static boolean isBalanced(Node root) {
        int dl = depth(root.left);
        int dr = depth(root.right);
        if (Math.abs(dl - dr) > 1) return false;
        return isBalanced(root.left) && isBalanced(root.right);
    }

    private static int depth(Node n) {
        if (n == null) return 0;
        int dl = depth(n.left);
        int dr = depth(n.right);
        if (dl >= dr) return dl + 1;
        else return dr + 1;
    }
}