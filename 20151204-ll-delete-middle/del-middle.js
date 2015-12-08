var ListNode = require('../lib/ListNode.js');
var ListNodeUtils = require('../lib/ListNode-utils.js');

var head = new ListNode(0);
head = ListNodeUtils.appendArray(head, [1,2,3,4]);

console.log('test 1 ...');
console.log(ListNodeUtils.toString(head));

console.log('delete node {2} (with a function call):');
var node = head.next.next;
// how to force a call by reference to get a reference to the internal node?
var deleteInternalNode = function(node) {
    if (!node || !node.next) return null;
    node = node.next;
}
deleteInternalNode(node);
console.log(ListNodeUtils.toString(head));

console.log('delete node {2} (with a function taking a container obj):');
var deleteInternalNodeFromObjRef = function(nodeObj) {
    if (!nodeObj.node || !nodeObj.node.next) return null;
    nodeObj.node = nodeObj.node.next;
}
var nodeObj = {node: head.next.next};
deleteInternalNodeFromObjRef(nodeObj);
console.log(ListNodeUtils.toString(head));

console.log('Delete node {2} directly, without a function call:');
head.next.next = head.next.next.next;
console.log(ListNodeUtils.toString(head));
