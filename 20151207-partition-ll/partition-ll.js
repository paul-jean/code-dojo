var partitionList = function(head, x) {
    if (!head) return head;
    if (!x) return head;
    if (typeof x != 'number') return head;
    var l = head;
    var g = null;
    var current = head;
    if (current.data >= x) {
        var n = new ListNode(current.data);
        n.next = g;
        g = n;
        current = null;
    }
    while(current.next) {
        if (current.next.data >= x) {
            var n = new ListNode(current.next.data);
            n.next = g;
            g = n;
            current.next = current.next.next;
        }
        current = current.next;
    }
    l.next = g;
    return l;
}
