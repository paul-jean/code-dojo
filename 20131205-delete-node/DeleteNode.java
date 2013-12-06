public class DeleteNode {

    public static Node deleteNode(Node head, int data) {
        if (head.data == data) return head.next; // move head up, done

        Node n = head;
        while (n.next != null) {
            if (n.next.data == data) {
                // move 'next' link over the node to delete
                n.next = n.next.next;
                // return unchanged head node, done
                return head;
            }
            n = n.next;
        }

        return head;
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.appendToTail(2);
        head.appendToTail(3);

        System.out.println("Before deleting:");
        head.print();

        head = deleteNode(head, 2);
        System.out.println("After deleting node 2:");
        head.print();

        head = deleteNode(head, 1);
        System.out.println("After deleting node 1:");
        head.print();

        head = deleteNode(head, 3);
        System.out.println("After deleting node 3:");
        if (head == null)
            System.out.println("(Empty)");

    }
}