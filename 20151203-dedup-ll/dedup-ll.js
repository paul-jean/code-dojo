var deleteDuplicates = function(head) {
    // {}
    if (!head) return head;
    // {1} -> ||
    //  s     s.n
    var slow = head;
    var fast = slow.next;
    while(slow.next) {
        fast = slow;
        while (fast.next) {
            if (fast.next.data === slow.data) {
                fast.next = fast.next.next;
            }
            fast = fast.next;
        }
        slow = slow.next;
    }
    return head;
}
