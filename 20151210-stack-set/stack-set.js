var process = require("process");

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
    var n = new StackNode(data);
    if (this.len === this.threshold || this.headArray.length === 0) {
        this.headArray.push(n);
        this.len = 1;
    } else {
        var head = this.headArray[this.headArray.length - 1];
        n.next = head;
        this.headArray[this.headArray.length - 1] = n;
        this.len = this.len + 1;
    }
};

StackSet.prototype.pop = function() {
    if (this.headArray.length === 0) return null;
    var head = this.headArray[this.headArray.length - 1];
    var ret = head.data;
    head = head.next;
    if (!head) {
        this.headArray = this.headArray.slice(0, this.headArray.length - 1);
        if (this.headArray.length > 0) {
            this.len = this.threshold;
        } else {
            this.len = 0;
        }
    } else {
        this.headArray[this.headArray.length - 1] = head;
        this.len = this.len - 1;
    }
    return ret;
};

StackSet.prototype.toString = function() {
    if (this.headArray.length === 0) return "(empty)\n";
    var s = "";
    var i = 0;
    for (var h of this.headArray) {
        s += "stack " + i + ": ";
        var c = h;
        while (c) {
            s += c.data + " - ";
            c = c.next;
        }
        s += "||\n";
        i++;
    }
    return s;
};

StackSet.prototype.stateString = function() {
    var s = "";
    s += "++++++++\n";
    s += this.toString();
    s += "len = " + this.len;
    s += "\n++++++++";
    return s;
};

var ss = new StackSet(3);
ss.push(1);
console.log("push 1:");
console.log(ss.stateString());
ss.push(2);
console.log("push 2:");
console.log(ss.stateString());
ss.push(3);
console.log("push 3:");
console.log(ss.stateString());
ss.push(4);
console.log("push 4:");
console.log(ss.stateString());
console.log("pop: " + ss.pop()); // 4
console.log(ss.stateString());
console.log("pop: " + ss.pop()); // 3
console.log(ss.stateString());
ss.push(3);
console.log("push 3:");
console.log(ss.stateString());
console.log("pop: " + ss.pop()); // 3
console.log(ss.stateString());
console.log("pop: " + ss.pop()); // 2
console.log(ss.stateString());
console.log("pop: " + ss.pop()); // 1
console.log(ss.stateString());
console.log("pop: " + ss.pop()); // null
console.log(ss.stateString());
