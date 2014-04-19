var head = {};

var current = head;
for (var i = 0; i < 10; i++) {
  current.value = i;
  current.next = {};
  current = current.next;
}

var getValue = function(head, findVal) {
  while (head.next) {
    val = head.value;
    if (head.value === findVal) { 
      return head;
    }
    head = head.next;
  }
  return false;
};

var getIndex = function(head, findIndex) {
  var count = 0;
  while (head.next) {
    if (count == findIndex) {
      return head;
    }
    head = head.next;
  }
  return false;
};

var insertValue = function(head, insertValue) {
  var newHead = {value: insertValue, next:head};
  return newHead;
};

var insertAtIndex = function(head, insertIndex, insertValue) {
  var node = getIndex(head, insertIndex);
  var newNode = {value:insertValue, next:node.next};
  node.next = newNode;
  return head;
}

console.log("found val = " + getValue(head, 5));

// skiplist
//

/*
{value: 5,
 skips: [[node, 1], [node, 2], ..., [node, 10]]}
*/












