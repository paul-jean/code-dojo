var kthLast = function(head, k) {
    if (!head) return;
    var current = head;
    var len = 1;
    while (current.next) {
        len ++;
        current = current.next;
    }
    if (len < k) return;
    var kthFromEndIndex = len - k;
    current = head;
    var i = 0;
    while (i < kthFromEndIndex) {
        i++;
        current = current.next;
    }
    return current;
}
