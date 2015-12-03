var ListNode = require('../lib/ListNode.js');
var ListNodeUtils = require('../lib/ListNode-utils.js');

var deleteDuplicates = function(head) {
    // {}
    if (!head) return head;
    // {1} -> ||
    //  s     s.n
    var slow = head;
    var fast;
    while (slow && slow.next) {
        fast = slow;
        while (fast && fast.next) {
            if (fast.next.data === slow.data) {
                fast.next = fast.next.next;
            }
            fast = fast.next;
        }
        slow = slow.next;
    }
    return head;
}

var t1 = new ListNode(1);
console.log('test 1 ...');
console.log(ListNodeUtils.toString(t1));
console.log('delete dups ...');
t1 = deleteDuplicates(t1);
console.log(ListNodeUtils.toString(t1));

var t2 = new ListNode(1);
t2 = ListNodeUtils.appendArray(t2, [2]);
console.log('test 2 ...');
console.log(ListNodeUtils.toString(t2));
console.log('delete dups ...');
t2 = deleteDuplicates(t2);
console.log(ListNodeUtils.toString(t2));

var t3 = new ListNode(1);
t3 = ListNodeUtils.appendArray(t3, [1]);
console.log('test 3 ...');
console.log(ListNodeUtils.toString(t3));
console.log('delete dups ...');
t3 = deleteDuplicates(t3);
console.log(ListNodeUtils.toString(t3));

var t4 = new ListNode(1);
t4 = ListNodeUtils.appendArray(t4, [2, 1]);
console.log('test 4 ...');
console.log(ListNodeUtils.toString(t4));
console.log('delete dups ...');
t4 = deleteDuplicates(t4);
console.log(ListNodeUtils.toString(t4));

var t5 = new ListNode(1);
t5 = ListNodeUtils.appendArray(t5, [2, 2, 1]);
console.log('test 5 ...');
console.log(ListNodeUtils.toString(t5));
console.log('delete dups ...');
t5 = deleteDuplicates(t5);
console.log(ListNodeUtils.toString(t5));
