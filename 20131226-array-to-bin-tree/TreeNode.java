public class TreeNode {

    public TreeNode left;
    public TreeNode right;
    public int data;

    public TreeNode(int data) {
        this.data = data;
        left = null;
        right = null;
    }

    public String toString() {
        String s = "";
        return addTo(s, this);
    } 

    private addTo(String s, TreeNode t) {
        if (t == null) return "";
        addTo(s, t.left);
        s += ", " + t.data;
        addTo(s, t.right);
    }
}
