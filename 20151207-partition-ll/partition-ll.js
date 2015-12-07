var partitionList = function(head, x) {
    if (!head) return head;
    if (!x) return head;
    if (typeof x != 'number') return head;
    var l = head;
    var g = null;
    var current = head;
    if (!current.next) return head;
    if (current.data >= x) {
        var n = new ListNode(current.data);
        n.next = g;
        g = n;
        l = current.next;
    }
    while(current.next) {
        if (current.next.data >= x) {
            // add node to greater list
            var n = new ListNode(current.next.data);
            n.next = g;
            g = n;
            // remove node from lesser list
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    current.next = g;
    return l;
}
