# Delete middle node from a linked list

(CTCI5 2.3) Implement an algorithm to delete a node from the middle of a singly linked list,
given only access to the node to be deleted.

# Algorithm

- given the node to be deleted
- copy the data from node.next into node
- then repoint node.next to node.next.next

- eg del node `{2}`:
```
{1} -> {2} -> {3} -> {4} -> ||
       n      n.n
       (node.data = node.next.data)
{1} -> {3} -> {3} -> {4} -> ||
       n      n.n    n.n.n
       (node.next = node.next.next)
{1} -> {3} --------> {4} -> ||
       n             n.n
```

Result:
```
{1} -> {3} -> {4} -> ||
```

Effectively:
```
{0} -> {1} -> {2} -> {3} -> ||
               x
{0} -> {1} --------> {3} -> ||
```

# Run

```bash
[rule146@rule146: 20151204-ll-delete-middle]$ node del-middle.js
test 1 ...
0 -> 1 -> 2 -> 3 -> 4
delete node {2} (with a function call):
0 -> 1 -> 3 -> 4
```

