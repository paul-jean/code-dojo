public class DeleteLLNode {

    // Delete the given internal node from a singly linked list.
    public static void deleteNode(Node n) {
        if (n == null || n.next == null) throw new NullPointerException();

        n.data = n.next.data;
        n.next = n.next.next;
    }

    public static void main(String[] args) {

        Node head = new Node(1);
        head.appendToTail(2);
        head.appendToTail(3);
        head.appendToTail(4);
        head.appendToTail(5);

        System.out.println("LL:");
        head.print();
        Node n = head.getNext().getNext();
        deleteNode(n);
        System.out.println("After deleting node 3:");
        head.print();
    }
}