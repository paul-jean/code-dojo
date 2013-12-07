import java.util.HashMap;

public class DeleteLLDuplicates {

    public static void deleteDuplicates(Node head) {
        if (head == null) throw new NullPointerException();
        Node n = head;
        HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();
        hm.put(head.getData(), 1);

        while (n.getNext() != null) {

            if (hm.get(n.getNext().getData()) == null)
                hm.put(n.getNext().getData(), 1);
            else
                n.setNext(n.getNext().getNext());

            n = n.getNext();
        }
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.appendToTail(2);
        head.appendToTail(3);
        head.appendToTail(2);
        head.appendToTail(5);
        System.out.println("Before deleting duplicates:");
        head.print();

        deleteDuplicates(head);

        System.out.println("After deleting duplicates:");
        head.print();

    }
}