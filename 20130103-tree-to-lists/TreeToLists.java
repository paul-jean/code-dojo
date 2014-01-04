import java.util.Arrays;

public class TreeToLists {

    public static Node[] heads;

    public static Node[] treeToLists(TreeNode root) {

        heads = new Node[1];
        levelLists(root, 1, heads);
        return heads;
    }

    private static void levelLists(TreeNode root, int level, Node[] heads) {

        if (root == null) return;
        if (heads.length < level) {
            Node[] headsNew = Arrays.copyOf(heads, heads.length + 1);
            heads = headsNew;
        }
        if (heads[level - 1] == null) heads[level - 1] = new Node(root.data);
        else heads[level - 1].appendToTail(root.data);
        levelLists(root.left, level + 1, heads);
        levelLists(root.right, level + 1, heads);
    }

    public static void main(String[] args) {

        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        String treeString = root.toString();
        System.out.println("Tree:");
        System.out.printf("%s", treeString);
        System.out.println();
        System.out.println("Lists:");
        Node[] heads = treeToLists(root);
        System.out.println("heads.length = " + heads.length);
        Node h = null;
        int level = 1;
        for (Node head: heads) {
            h = head;
            System.out.printf("level %d: ", level);
            while (h != null) {
                System.out.printf(" %d ->", h.data);
                h = h.next;
            }
            level++;
        }

    }
}