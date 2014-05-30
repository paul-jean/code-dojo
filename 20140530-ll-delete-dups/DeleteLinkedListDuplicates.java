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
    while (current != null) {
      //System.out.println("Checking: " + current.next.data);
      if (current.next != null && seen.containsKey(current.next.data)) {
        System.out.println("Found duplicate: " + current.next.data);
        current.next = current.next.next;
      }
      if (current.next != null) {
        //System.out.println("Storing:");
        //System.out.println(current.next.data);
        seen.put(current.next.data, true);
      }
      //System.out.println("current -> current.next");
      current = current.next;
      //System.out.println("current set");
    }
  }

  public void test1() {
    Node head = new Node(0);
    Node current = head;
    current.next = new Node(1);
    current = current.next;
    current.next = new Node(2);
    current = current.next;
    current.next = new Node(1);
    System.out.println("List elements:");
    current = head;
    while (current != null) {
      System.out.println(current.data);
      current = current.next;
    }
    System.out.println("Deleting duplicates ...");
    deleteDuplicates(head);
    System.out.println("New list:");
    current = head;
    while (current != null) {
      System.out.println(current.data);
      current = current.next;
    }
  }

  public void test2() {
    Node head = new Node(0);
    Node current = head;
    current.next = new Node(1);
    current = current.next;
    current.next = new Node(2);
    current = current.next;
    current.next = new Node(1);
    current = current.next;
    current.next = new Node(4);
    System.out.println("List elements:");
    current = head;
    while (current != null) {
      System.out.println(current.data);
      current = current.next;
    }
    System.out.println("Deleting duplicates ...");
    deleteDuplicates(head);
    System.out.println("New list:");
    current = head;
    while (current != null) {
      System.out.println(current.data);
      current = current.next;
    }
  }

  public static void main(String[] args) {
    DeleteLinkedListDuplicates dlld = new DeleteLinkedListDuplicates();
    dlld.test1();
    dlld.test2();
  }
}
