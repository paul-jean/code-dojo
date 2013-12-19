public class FindCycle {

    public static Node findCycle(Node head) {

        Node n = head;
        Node t = head;

        while (n.next != null) {
            while (t != n) {
                if (n.next == t) return t;
                t = t.next;
            }
            t = head;
            n = n.next;
        }
        
        return null;
    }

    public static void main(String[] args) {

        Node head = new Node(0);
        head.appendToTail(1);
        head.appendToTail(2);
        head.appendToTail(3);
        Node a = head.appendToTail(4);

        head.appendToTail(5);
        head.appendToTail(6);
        head.appendToTail(7);
        Node b = head.appendToTail(8);
        b.next = a;

        Node cycleStart = findCycle(head);
        System.out.println("Cycle start: " + cycleStart.data);
    }
}
        