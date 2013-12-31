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

    private static String treeToString(TreeNode root) {
        int depth = maxDepth(root);
        int charsPerLine = (int) Math.pow(2, depth);
        char[][] a = new char[depth][charsPerLine];
        for (int i = 0; i < depth; i++)
            for (int j = 0; j < charsPerLine; j++) {
                if (j == charsPerLine - 1) a[i][j] = '\n';
                else a[i][j] = ' ';
            }
        int x = (int) Math.pow(2, depth - 1);
        printNode(root, 0, x, x, a);
        String s = "";
        for (int i = 0; i < depth; i++)
            for (int j = 0; j < charsPerLine; j++) s += a[i][j];
        return s;
    }

    private static void printNode(TreeNode n, int level, int x, int d, char[][] a) {
        if (n == null) return;
        int node = n.data;
        a[level][x] = Character.forDigit(node, 10);
        int xLeft = x - d/2;
        int xRight = x + d/2;
        printNode(n.left, level + 1, xLeft, d/2, a);
        printNode(n.right, level + 1, xRight, d/2, a);
    }

    private static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    public static void main(String[] args) {
        int[] a = new int[10];
        for (int i=0; i < 10; i++) a[i] = i;
        TreeNode t = arrayToTree(a);
        System.out.println("array:");
        for (int i: a) System.out.printf("%d ", i);
        System.out.println();
        int depth = maxDepth(t);
        System.out.println("depth of tree = " + depth);
        System.out.println("tree:");
        String treeString = treeToString(t);
        System.out.println(treeString);
    }
}