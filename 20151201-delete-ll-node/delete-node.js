function LinkedList(dataArray) {
    if (dataArray) {
        this.data = dataArray[0];
        this.next = new LinkedList(dataArray.splice(1));
    } else {
        this.data = null;
        this.next = null;
    }
}

LinkedList.prototype.deleteNode = function(data) {
    // {}
    if (!this._head) return;
    // {d}
    //  x
    // {}
    if (this._head.data === data) {
        this._head = null;
        return;
    }
    var current = this._head;
    while (current.next) {
        if(current.next.data === data) {
            // {c} -> {n} -> {n.n}
            //         x
            // {c} --------> {n.n}
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
}

var t1 = new LinkedList([1, 2, 3]);
t1.deleteNode(2);
if (t1.hasNode(2))
    console.log('t1 failed');

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
