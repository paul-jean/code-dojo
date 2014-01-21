public class IsSubtree {

    public static boolean isSubtree(TreeNode t1, TreeNode t2) {

        if (t1 == null && t2 == null) return true;
        if (t1 == null && t2 != null) return false;
        if (t1 != null && t2 == null) return false;

        if (t1.data == t2.data) 
            return isSubtree(t1.left, t2.left) && isSubtree(t1.right, t2.right);

        return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
    }

}