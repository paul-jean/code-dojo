import java.util.Hashtable;

public class DeleteLinkedListDuplicates {

  private class Node {
    public Node next = null;
    public int data;
    public Node(int data) {
      this.data = data;
      this.next = null;
    }
  }

  public static void deleteDuplicates(Node head) {
    Hashtable seen = new Hashtable();
    Node current = head;
    seen.put(current.data, true);
    while (current.next != null) {
      System.out.println("Checking " + current.next.data);
      if (seen.containsKey(current.next.data)) {
        current.next = current.next.next;
      }
      seen.put(current.next.data, true);
      current = current.next;
    }
  }

  public void run() {
    Node head = new Node(0);
    Node current = head;
    current.next = new Node(1);
    current = current.next;
    current.next = new Node(2);
    current = current.next;
    current.next = new Node(1);
    deleteDuplicates(head);
    current = head;
    while (current.next != null) {
      System.out.println(current.data);
      current = current.next;
    }
  }

  public static void main(String[] args) {
    DeleteLinkedListDuplicates dlld = new DeleteLinkedListDuplicates();
    dlld.run();
  }
}
