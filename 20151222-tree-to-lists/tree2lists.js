var listarray = [];

function tree2lists(node, level) {
    if (!node) return;
    var node = new ListNode(node.data)
    if (listarray.length - 1 < level)
        listarray.push(node);
    else {
        var listhead = listarray[level];
        node.next = listhead;
        listarray[level] = node;
    }
    tree2lists(node.left, level + 1);
    tree2lists(node.right, level + 1);
}
