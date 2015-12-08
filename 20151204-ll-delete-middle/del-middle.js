var ListNode = require('../lib/ListNode.js');
var ListNodeUtils = require('../lib/ListNode-utils.js');

var head = new ListNode(0);
head = ListNodeUtils.appendArray(head, [1,2,3,4]);

console.log('test 1 ...');
console.log(ListNodeUtils.toString(head));

console.log('delete node {2}:');
var node = head.next.next;
// how to force a call by reference to get a reference to the internal node?
var deleteInternalNode = function(node) {
    if (!node || !node.next) return null;
    // {1} -> {2} -> {3} -> {4} -> ||
    //        n      n.n
    node.data = node.next.data;
    // {1} -> {3} -> {3} -> {4} -> ||
    //        n      n.n    n.n.n
    node.next = node.next.next;
    // {1} -> {3} --------> {4} -> ||
    //        n             n.n
    // Result:
    // {1} -> {3} -> {4} -> ||
}
deleteInternalNode(node);
console.log(ListNodeUtils.toString(head));
