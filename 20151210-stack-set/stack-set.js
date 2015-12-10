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

StackSet.prototype.debug = true;

StackSet.prototype.push = function(data) {
    var n = new StackNode(data);
    if (this.len === this.threshold || this.headArray.length === 0) {
        console.log("(StackSet) push: " + data + " (into NEW stack)");
        this.headArray.push(n);
        this.len = 1;
    } else {
        console.log("(StackSet) push: " + data);
        var head = this.headArray[this.headArray.length - 1];
        n.next = head;
        this.headArray[this.headArray.length - 1] = n;
        this.len = this.len + 1;
    }
    if (this.debug) {
        console.log("(StackSet) push: headArray = ");
        for (var h of this.headArray) {
            var c = h;
            while (c) {
                process.stdout.write(c.data + " - ");
                c = c.next;
            }
            process.stdout.write("||");
            console.log();
        }
    }
}

StackSet.prototype.pop = function() {
    if (this.headArray.length === 0) return null;
    var head = this.headArray[this.headArray.length - 1];
    var ret = head.data;
    head = head.next;
    if (!head) {
        this.headArray.slice(0, this.headArray.length - 1);
        if (this.debug)
            console.log("(StackSet) pop: num internal stacks = " + this.headArray.length);
    } else {
        this.headArray[this.headArray.length - 1] = head;
    }
    return ret;
}

var ss = new StackSet(3);
ss.push(1);
ss.push(2);
ss.push(3);
console.log("(len = " + ss.len + ")"); // (len = 3)
ss.push(4);
console.log("(len = " + ss.len + ")"); // (len = 1)
console.log(ss.pop()); // 4
console.log(ss.pop()); // 3
ss.push(3);
console.log(ss.pop()); // 3
