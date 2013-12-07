import java.util.HashMap;

public class DeleteLLDuplicates {

    public static void deleteDuplicates(Node head) {
        if (head == null) throw new NullPointerException();
        Node n = head;
        HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();
        hm.put(head.data, 1);

        while (n.next != null) {

            if (hm.getValue(n.next.data == null)) hm.put(n.next.data, 1);
            else n.next = n.next.next;

            n = n.next;
        }
    }
}