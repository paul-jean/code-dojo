// how to force a call by reference to get a reference to the internal node?
var deleteInternalNode = function (internalNode) {
    if (!internalNode) return null;
    internalNode[0] = internalNode[0].next;
}

var ListNode = require('../lib/ListNode.js');
var ListNodeUtils = require('../lib/ListNode-utils.js');

var t1 = new ListNode(0);
t1 = ListNodeUtils.appendArray(t1, [1,2,3,4]);
console.log('test 1 ...');
console.log(ListNodeUtils.toString(t1));
var toDel = {0:t1.next.next};
//deleteInternalNode(toDel);
t1.next.next = t1.next.next.next;
console.log('delete node {2}');
console.log(ListNodeUtils.toString(t1));
