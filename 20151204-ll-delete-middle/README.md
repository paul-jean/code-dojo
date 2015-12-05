# Delete middle node from a linked list

(CTCI5 2.3) Implement an algorithm to delete a node from the middle of a singly linked list,
given only access to the node to be deleted.

# Algorithm

- given the node to be deleted
- singly linked list means don't have a pointer to the node before it

- del node `{2}`:
```
{0} -> {1} -> {2} -> {3} -> ||
               x
{0} -> {1} --------> {3} -> ||
```

- don't have a reference to the head node either, so can't search from the
beginning for the given node
- can set a new reference for every node after

```
{0} -> {1} -> {2} -> {3} -> ||
               x
{0} -> {1} --------> {3} -> ||

c = {2}
c.n = {3}

{0} -> {1} -> {2} -> {3} -> ||
               c     c.n
               c = c.n
{0} -> {1} --------> {3} -> ||
                     c
```
# Run

Not sure how to do this with a function call! It works fine doing it directly, outside
a function:

```
[rule146@rule146: 20151204-ll-delete-middle]$ node del-middle.js
test 1 ...
0 -> 1 -> 2 -> 3 -> 4
delete node {2} (with a function call):
3 -> 4
Delete node {2} directly, without a function call:
0 -> 1 -> 3 -> 4
```
