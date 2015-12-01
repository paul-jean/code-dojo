# Problem
Delete a node from a singly-linked list.

# Algorithm
- given the node data to delete
- if the list is empty, return
- if the head of the list needs to be deleted, delete and return
- otherwise the resulting list will have at least one node in it
- current node is the head node
- if current has a next, check data in next node
- if next data is to be deleted, set current.next to next.next

# Run

```bash
[rule146@rule146: 20151201-delete-ll-node]$ node delete-node.js
t1 =
has 2: false
t1 =  -> 1 -> 2 -> 3 -> 4
has 2: true
del 2 ...
t1 =  -> 1 -> 3 -> 4
has 2: false
del 1 ...
t1 =  -> 3 -> 4
has 1: false
```
