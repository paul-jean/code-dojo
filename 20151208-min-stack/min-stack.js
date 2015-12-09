function StackNode(data) {
    this.data = data;
    this.next = null;
}

function MinStack() {
    this.minimum = null;
    this.head = null;
}

MinStack.prototype = {};

MinStack.prototype.min = function() {
    if (!this.minimum) return null;
    return this.minimum.data;
};

MinStack.prototype.push = function(data) {
    var node = new StackNode(data);
    node.next = this.head;
    this.head = node;
    // set the min pointer
    if (!this.minimum) this.minimum = this.head;
    if (data < this.minimum.data) this.minimum = node;
    return node;
};

MinStack.prototype.pop = function() {
    if (!this.head) return null;
    var toReturn = this.head.data;
    this.head = this.head.next;
    // set the min pointer
    if (toReturn === this.minimum.data) {
        var newMin;
        var current = this.head;
        this.minimum = this.head;
        while (current.next) {
            if (current.next.data < this.minimum.data) {
                this.minimum = current.next;
            }
            current = current.next;
        }
    }
    return toReturn;
};


console.log("test 1 ...");
var ms = new MinStack();
console.log(ms.min()); // null
ms.push(1);
console.log(ms.min()); // 1
ms.push(2);
console.log(ms.min()); // 1
ms.push(0);
console.log(ms.min()); // 0
ms.pop();
console.log(ms.min()); // 1

console.log("test 2 ...");
var ms = new MinStack();
ms.push(10);
ms.push(3);
ms.push(5);
ms.push(1);
console.log(ms.min()); // 1
ms.pop();
console.log(ms.min()); // 3







