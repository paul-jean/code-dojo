function LinkedList(dataArray) {
    if (dataArray.length >= 1) {
        this.data = dataArray[0];
        this.next = new LinkedList(dataArray.splice(1));
        return this;
    } else {
        return null;
    }
}

LinkedList.prototype.toArray = function() {
    var current = this;
    var nodeArray = [];
    if (!current) return nodeArray;
    else nodeArray.push(current.data);
    while (current.next) {
        nodeArray.push(current.next.data);
        current = current.next;
    }
    return nodeArray;
}

LinkedList.prototype.hasNode = function(data) {
    var current = this;
    if (current.data === data) return true;
    while (current.next) {
        if (current.next.data === data) return true;
        current = current.next;
    }
    return false;
}

LinkedList.prototype.deleteNode = function(data) {
    // {}
    if (!this) return;
    // {c} -> {c.n} ...
    //  x
    // {c.n} ...
    if (this.data === data) {
        this = this.next;
        return;
    }
    var current = this;
    // {c} -> {c.n} -> {c.n.n} -> ...
    //          x
    // {c} ----------> {c.n.n} -> ...
    while (current.next) {
        if(current.next.data === data) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
}

var t1 = new LinkedList([1, 2, 3]);
console.log('t1');
console.log(t1.toArray());
console.log(t1.hasNode(2));
/*
t1.deleteNode(2);
if (t1.hasNode(2))
    console.log('t1 failed');
*/

/*
var t2 = new LinkedList([]);
t2.deleteNode(2);
if (t2.hasNode(2))
    console.log('t2 failed');

var t3 = new LinkedList([1]);
t3.deleteNode(1);
if (t3.hasNode(1))
    console.log('t3 failed');

t3.deleteNode(2);
if (!t3.hasNode(2))
    console.log('t4 failed');
    */
