// how to force a call by reference to get a reference to the internal node?
var deleteInternalNode = function (nodeObj) {
    if (!nodeObj.node) return null;
    nodeObj.node = nodeObj.node.next;
}

var ListNode = require('../lib/ListNode.js');
var ListNodeUtils = require('../lib/ListNode-utils.js');

var t1 = new ListNode(0);
t1 = ListNodeUtils.appendArray(t1, [1,2,3,4]);
var nodeObj = {node: t1.next.next};

console.log('test 1 ...');
console.log(ListNodeUtils.toString(t1));

console.log('delete node {2} (with a function call):');
deleteInternalNode(nodeObj);

console.log(ListNodeUtils.toString(nodeObj.node));

console.log('Delete node {2} directly, without a function call:');
t1.next.next = t1.next.next.next;
console.log(ListNodeUtils.toString(t1));
