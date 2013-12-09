public class KthLastLL {

    public static int kthLastElement(Node head, int k) {

        Node n = head;
        Node kthLast = null;
        int count = 0;

        while (n.next != null) {
            if (count == k - 1) kthLast = head;
            else if (count >= k) kthLast = kthLast.getNext();
            n = n.getNext();
            count++
        }

        if (count < k) throw new IllegalArgumentException();
        return kthLast.getData();
    }

    public static void main(String[] args) {

        Node head = new Node(1);
        head.appendToTail(2);
        head.appendToTail(3);
        head.appendToTail(4);

        System.out.println("LL:");
        head.print();
        System.out.println("2nd last element:");
        int l = kthLastElement(head, 2);
    }
}
