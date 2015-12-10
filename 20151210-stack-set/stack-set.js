function StackSet(threshold) {
    this.headArray = [];
    this.len = 0;
    this.threshold = threshold;
}

function StackNode(data) {
    this.data = data;
    this.next = null;
}

StackSet.prototype.push = function(data) {
    var n = new StackNode(data); // TODO: implement
    if (this.len === this.threshold || !this.headArray) {
        this.headArray.push(n);
        this.len = 1;
    } else {
        var head = this.headArray[this.headArray.length - 1];
        n.next = head;
        this.len = this.len + 1;
    }
}

StackSet.prototype.pop = function() {
    if (this.headArray.length === 0) return null;
    var head = this.headArray[this.headArray.length - 1];
    var ret = head.data;
    head = head.next;
    if (!head) {
        this.headArray.slice(0, this.headArray.length - 1);
    }
}
