public class FindSum {

    public static boolean findSum(TreeNode n, int target, int sum) {

        if (n == null) return false;
        if (sum + n.data == target) {
            System.out.printf("%d", n.data);
            return true;
        }
        else if (sum + n.data < target) {
            boolean l = findSum(n.left, target, sum + n.data);
            boolean r = findSum(n.right, target, sum + n.data);
            if (l || r) System.out.printf("%d -> ", n.data);
            return l || r;
        }
        return false;
    }
}