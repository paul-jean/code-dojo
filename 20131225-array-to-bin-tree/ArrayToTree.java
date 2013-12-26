public class ArrayToTree {

    private class Node {
        public int data;
        public Node left;
        public Node right;

        public Node(int val) {
            data = val;
            left = null;
            right = null;
        }
    }

    public static Node arrayToTree(int[] a) {
        Node root = null;
        for (int val: a) insert(root, val);
        return root;
    }

    private void insert(Node root, int val) {
        if (root == null) return new Node(val);
        else if (val < root.data) {
            root.left = insert(root.left, val);
            return root.left;
        }
        else {
            root.right = insert(root.right, val);
            return root.right;
        }
    }
}