var kthLastNode = function(head, k) {
    if (!head) return;
    var current = head;
    var len = 1;
    while (current.next) {
        len ++;
        current = current.next;
    }
    if (len < k) return null;
    var kthFromEndIndex = len - k;
    current = head;
    var i = 0;
    while (i < kthFromEndIndex) {
        i++;
        current = current.next;
    }
    return current;
}

var ListNode = require('../lib/ListNode.js');
var ListNodeUtils = require('../lib/ListNode-utils.js');

var t1 = new ListNode(1);
t1 = ListNodeUtils.appendArray(t1, [2,3]);
console.log(ListNodeUtils.toString(t1));
var kthLast = kthLastNode(t1, 2);
console.log('2nd last: ' + kthLast.data + ' (2)');

var t2 = new ListNode(1);
t2 = ListNodeUtils.appendArray(t2, [2]);
console.log(ListNodeUtils.toString(t2));
var kthLast = kthLastNode(t2, 2);
console.log('2nd last: ' + kthLast.data + ' (1)');

var t3 = new ListNode(1);
console.log(ListNodeUtils.toString(t3));
var kthLast = kthLastNode(t3, 2);
console.log('2nd last: ' + kthLast + ' (null)');
