public class PartitionLL {

    public static Node partition(Node head, int x) {

        Node l = null, g = null, l_head = null, g_head = null;
        Node n = head;

        while (n != null) {

            if (n.data < x) {
                if (l == null) {
                    l = new Node(n.data);
                    l_head = l;
                }
                else {
                    l.next = new Node(n.data);
                    l = l.next;
                    l.next = null;
                }
            }
            else {
                if (g == null) {
                    g = new Node(n.data);
                    g_head = g;
                }
                else {
                    g.next = new Node(n.data);
                    g = g.next;
                    g.next = null;
                }
            }
            n = n.next;
        }
        
        if (l == null) return g_head;
        else if (g == null) return l_head;
        else {
            l.next = g_head;
        }
        return l_head;
    }

    public static void main(String[] args) {

        Node head = new Node(5);
        head.appendToTail(2);
        head.appendToTail(4);
        head.appendToTail(2);
        head.appendToTail(1);

        System.out.println("LL:");
        head.print();

        Node new_head = partition(head, 3);
        System.out.println("After partitioning about 3:");
        new_head.print();
    }
}
