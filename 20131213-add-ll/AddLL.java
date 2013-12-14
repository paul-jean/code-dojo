public class AddLL {

    public static Node add(Node a, Node b) {
        Node sumList = null;
        int carry = 0;
        
        while(a != null || b != null) {
            int aDigit = 0, bDigit = 0;
            if (a != null) aDigit = a.data; 
            if (b != null) bDigit = b.data; 
            int sum = aDigit + bDigit + carry;
            if (sum >= 10) {
                carry = 1;
                sum -= 10;
            }
            else {
                carry = 0;
            }

            if (sumList == null) sumList = new Node(sum);
            else {
                sumList.next = new Node(sum);
                sumList = sumList.next;
            }
            a = a.next;
            b = b.next;
        }
        return sumList;
    }
}