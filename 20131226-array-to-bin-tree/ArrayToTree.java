/*
 * Solution from CTCI to prob 4.3
 * Algorithm:
 * - insert into tree the middle element of the array
 * - insert into left subtree the left subarray elements
 * - insert into right subtree the right subarray elements
 * - recurse
 */
public class ArrayToTree {

    public static TreeNode addToTree(int[] a, int start, int end) {
        if (end < start) return null;
        int mid = (start + end)/2;
        TreeNode n = new TreeNode(a[mid]);
        n.left = addToTree(a, start, mid - 1);
        n.right = addToTree(a, mid + 1, end);
        return n;
    }

    public static TreeNode arrayToTree(int[] a) {
        return addToTree(a, 0, a.length - 1);
    }

    public static void main(String[] args) {
        int[] a = new int[10];
        for (int i=0; i < 10; i++) a[i] = i;
        TreeNode t = arrayToTree(a);
        System.out.println("array:");
        for (int i: a) System.out.printf("%d ", i);
    }
}