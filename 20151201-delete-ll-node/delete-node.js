function ListNode(data) {
    this.data = data;
    this.next = null;
}

ListNode.prototype.appendToTail = function(data) {
    if (!data) return;
    var current = this;
    if (!current) {
        current = new ListNode(data);
        return;
    }
    while (current.next) {
        current = current.next;
    }
    current.next = new ListNode(data);
    return;
}

ListNode.prototype.appendFromArray = function(dataArray) {
    for (var d of dataArray)
        this.appendToTail(d);
}

ListNode.prototype.hasNode = function(data) {
    var current = this;
    // {c} -> ...
    if (current.data === data) return true;
    // ... -> {c} -> {c.n} -> ...
    while (current.next) {
        if (current.next.data === data) return true;
        current = current.next;
    }
    // ... -> {c} -> ||
    return false;
}

ListNode.prototype.toString = function() {
    var nodeData = [];
    var current = this;
    if (!current) return '';
    // {c} -> ...
    nodeData.push(current.data);
    // ... -> {c} -> {c.n} -> ...
    while (current.next) {
        nodeData.push(current.next.data);
        current = current.next;
    }
    return nodeData.join(' -> ');
}

var deleteNode = function(headNode, data) {
    if (!data) return headNode;
    // {}
    if (!headNode) return;
    // remove the head node
    // {c} -> {c.n} -> ...
    //  x
    //        {c.n} -> ...
    if (headNode.data === data) {
        // return rest of list
        return headNode.next;
    }
    var current = headNode;
    // ... -> {c} -> {c.n} -> {c.n.n} -> ...
    //                 x
    // ... -> {c} ----------> {c.n.n} -> ...
    while (current.next) {
        if (current.next.data === data) {
            current.next = current.next.next;
            return headNode;
        }
        current = current.next;
    }
    // .. -> {c} -> ||
    return headNode;
}

var t1 = new ListNode();
console.log('t1 = ' + t1);
console.log('has 2: ' + t1.hasNode(2));
t1.appendFromArray([1, 2, 3, 4]);
console.log('t1 = ' + t1);
console.log('has 2: ' + t1.hasNode(2));
console.log('del 2 ... ');
t1 = deleteNode(t1, 2);
console.log('t1 = ' + t1);
console.log('has 2: ' + t1.hasNode(2));
console.log('del 1 ... ');
t1 = deleteNode(t1, 1);
console.log('t1 = ' + t1);
console.log('has 1: ' + t1.hasNode(1));

