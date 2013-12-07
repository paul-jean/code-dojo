// Node in a singly-linked list
public class Node {
    Node next = null;
    int data;

    public Node(int data) { this.data = data; }

    public void appendToTail(int data) {
        Node end = new Node(data);
        Node n = this;
        while (n.next != null) n = n.next;
        n.next = end;
    }

    public void print() {
        Node n = this;
        while (n != null) {
            System.out.println(n.data);
            n = n.next;
        }
    }
}

