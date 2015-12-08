var StackNode(data) {
    this.data = data;
    this.next = null;
};

var MinStack() {
    this.min = null;
    this.head = null;
};

MinStack.prototype.min = function() {
    if (!this.min) return null;
    return this.min.data;
}

MinStack.prototype.push = function(data) {
    var node = new StackNode(data);
    node.next = this.head;
    // set the min pointer
    if (data < this.min.data) this.min = node;
    return node;
}

MinStack.prototype.pop = function() {
    if (!this.head) return null;
    var toReturn = this.head.data;
    this.head = this.head.next;
    // set the min pointer
    if (toReturn === this.min.data) {
        var newMin;
        var current = this.head;
        this.min = this.head;
        while (current.next) {
            if (current.next.data < this.min.data) {
                this.min = current.next;
            }
            current = current.next;
        }
    }
    return toReturn;
}
