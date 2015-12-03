var ListNode = require('./listnode.js');
var listUtils = require('./list-utils.js');

/**
 * Deletes nodes with duplicate data from the given list.
 * @param {object} listHead - head of a singly-linked list
 * @return {object} - new list head
 *
 */
var deleteListDups = function(head) {
    // {}
    if (!head) return head;
    // {c} -> ||
    // Not possible to have dups in a list with a single node
    if (!head.next) return head;
    // {c} -> {c.n} -> ||
    // List has at least two nodes
    var seen = {};
    var current = head;
    seen[current.data] = true;
    while (current.next) {
        if (seen[current.next.data])
            // {c} -> {c.n} -> {c.n.n}
            //          x
            // {c} ----------> {c.n.n}
            current.next = current.next.next;
        else {
            // {c} -> {c.n} -> ...
            seen[current.next.data] = true;
            current = current.next;
        }
    }
    // Always keep the head node in place, so safe to return it.
    return head;
}

module.exports = deleteListDups;

// tests

/*
1 - 2 - 3 - ||  seen
                {1}
c   c.n         {1, 2}
    c   c.n     {1, 2, 3}
        c   c.n
*/

var t1 = new ListNode(1);
t1 = listUtils.appendArray(t1, [2, 3]);
console.log('test 1 ...');
console.log(listUtils.toString(t1));
console.log('dedup ...');
t1 = deleteListDups(t1);
console.log(listUtils.toString(t1));
console.log('length = ' + listUtils.toArray(t1).length);
console.log('(3)');

/*
1 - 2 - 2 - ||  seen
                {1}
c   c.n         {1, 2}
    c   c.n
        x
1 - 2 - ||
    c   c.n

*/

var t2 = new ListNode(1);
t2 = listUtils.appendArray(t2, [2, 2]);
console.log('test 2...');
console.log(listUtils.toString(t2));
console.log('dedup ...');
t2 = deleteListDups(t2);
console.log(listUtils.toString(t2));
console.log('length = ' + listUtils.toArray(t2).length);
console.log('(2)');

/*
1 - 2 - 2 - 3 - ||  seen
c   c.n             {1}
c   c.n             {1, 2}
    c   c.n
        x
1 - 2 - 3 - ||
    c   c.n         {1, 2, 3}
        c   c.n
*/

var t3 = new ListNode(1);
t3 = listUtils.appendArray(t3, [2, 2]);
console.log('test 3...');
console.log(listUtils.toString(t3));
console.log('dedup ...');
t3 = deleteListDups(t3);
console.log(listUtils.toString(t3));
console.log('length = ' + listUtils.toArray(t3).length);
console.log('(2)');

/*
var t2 = new ListNode();
t2.appendToTail([1, 2, 2]);
deleteListDups(t2);
console.log('length = ' + t2.toArray().length);
console.log('(2)');

var t3 = new ListNode();
t3.appendToTail([1]);
deleteListDups(t1);
console.log('length = ' + t3.toArray().length);
console.log('(1)');

var t4 = new ListNode();
t4.appendToTail([1, 1]);
deleteListDups(t4);
console.log('length = ' + t4.toArray().length);
console.log('(1)');

var t5 = new ListNode();
t5.appendToTail([]);
deleteListDups(t5);
console.log('length = ' + t5.toArray().length);
console.log('(0)');
*/
