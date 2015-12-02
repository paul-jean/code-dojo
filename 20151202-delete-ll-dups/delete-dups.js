/**
 * Deletes nodes with duplicate data from the given list.
 * @param {object} listHead - head of a singly-linked list
 * @return {object} - new list head
 *
 */
var deleteListDups = function(listHead) {
    // {}
    if (!listHead) return listHead;
    // {c} -> ||
    // Not possible to have dups in a list with a single node
    if (!listHead.next) return listHead;
    // {c} -> {c.n} -> ||
    // List has at least two nodes
    var seen = {};
    var current = listHead;
    seen[current.data] = true;
    while (current.next) {
        if (seen[current.next.data])
            current = deleteListNode(current, current.next.data);
        else {
            seen[current.next.data] = true;
            current = current.next;
        }
    }
    // Always keep the head node in place, so safe to return it.
    return listHead;
}

// tests

/*
1 - 2 - 3 - ||  seen
                {1}
c   c.n         {1, 2}
    c   c.n     {1, 2, 3}
        c   c.n
*/

var t1 = new ListNode();
t1.appendToTail([1, 2, 3]);
deleteListDups(t1);
console.log('test 1 ...');
console.log('length = ' + t1.listLength());
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

var t2 = new ListNode();
t2.appendToTail([1, 2, 2]);
deleteListDups(t2);
console.log('length = ' + t2.listLength());
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

var t2 = new ListNode();
t2.appendToTail([1, 2, 2]);
deleteListDups(t2);
console.log('length = ' + t2.listLength());
console.log('(2)');

var t3 = new ListNode();
t3.appendToTail([1]);
deleteListDups(t1);
console.log('length = ' + t3.listLength());
console.log('(1)');

var t4 = new ListNode();
t4.appendToTail([1, 1]);
deleteListDups(t4);
console.log('length = ' + t4.listLength());
console.log('(1)');

var t5 = new ListNode();
t5.appendToTail([]);
deleteListDups(t5);
console.log('length = ' + t5.listLength());
console.log('(0)');
