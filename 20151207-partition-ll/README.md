# Partition a linked list

(CTCI5 2.4) Write code that partitions a linked list around a value x, such that all nodes less than x
come before all nodes greater than or equal to x.

# Algorithm

```
{4} -> {1} -> {2} -> {10} -> {3} -> ||
```

Partition around x = 5:

- try to run through the list just once for `O(n)`
- create a second list "g" ("greater") containing nodes >= x
- traverse the list "l" ("less"), current node = c
- if c >= x, move this node to g
- all nodes left in "l" are < x
- link end of "l" to beginning of "g"

```
l                                           g
{4} -> {1} -> {2} -> {10} -> {3} -> ||      ||
cl     cl.n                                 cg
       cl     cl.n
              cl     cl.n
{4} -> {1} -> {2} ---------> {3} -> ||      {10} -> ||
```

- while cl.n != null
- cl.n >= x
- cl.n (not null) = cl.n.n (could be null)
- n = new node(cl.n.data)
- n.next = g (new head on g)
