public class TreeNode {

    public TreeNode left;
    public TreeNode right;
    public int data;

    public TreeNode(int data) {
        this.data = data;
        left = null;
        right = null;
    }

    @Override
    public String toString() {
        int depth = maxDepth(this);
        int charsPerLine = (int) Math.pow(2, depth);
        char[][] a = new char[depth][charsPerLine];
        for (int i = 0; i < depth; i++)
            for (int j = 0; j < charsPerLine; j++) {
                if (j == charsPerLine - 1) a[i][j] = '\n';
                else a[i][j] = ' ';
            }
        int x = (int) Math.pow(2, depth - 1);
        printNode(this, 0, x, x, a);
        String s = "";
        for (int i = 0; i < depth; i++)
            for (int j = 0; j < charsPerLine; j++) s += a[i][j];
        return s;
    }

    private void printNode(TreeNode n, int level, int x, int d, char[][] a) {
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
}
