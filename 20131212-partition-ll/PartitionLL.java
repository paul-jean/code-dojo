public class PartitionLL {

    public static Node partition(Node head, int x) {

        Node l = null, g = null, l_head = null, g_head = null;
        Node n = head;

        while (n != null) {

            if (n.data < x) {
                if (l == null) {
                    l = n;
                    l_head = l;
                }
                else {
                    l.next = n;
                    l = l.next;
                }
            }
            else {
                if (g == null) {
                    g = n;
                    g_head = g;
                }
                else {
                    g.next = n;
                    g = g.next;
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
