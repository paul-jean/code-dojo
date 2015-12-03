# Delete duplicates from a linked list
## (without using a temporary buffer)

(CTCI5 2.1 part 2) Implement an algorithm to delete duplicates from a linked list,
_without using a temporary buffer_.

# Algorithm

- traverse through list with two node references
- slow pointer sits on node k
- fast pointer runs from k+1 to end, looking for duplicates of node k
- (run fast pointer from k+1 because nodes from 0 to k-1 have already been checked)
- when fast pointer finds a dup, it removes it
- to remove a node ...
- fast.next = fast.next.next


## Single node:

```
 0
{1} -> ||
 s     s.n
```

- never delete a node in this case
- s.next = null
- while s.next never runs

## Two nodes with a dup:

```
 0
{1} -> {1} -> ||    f.n === s
 s     s.n
 f     f.n          true
        x
{1} --------> ||
              f.n
              f
              s
```

- fast pointer becomes null when second `{1}` is removed
- so have to check that both fast and fast.next are not null
- same happens to slow pointer, so have to check that both slow and slow.next not null

## Two nodes, no dups:

```
 0
{1} -> {2} -> ||    f.n === s
 s     s.n
 f     f.n          false
       f      f.n   "
       s      s.n   "
       f      f.n
```

## > 2 nodes with a dup


```
 0
{1} -> {2} -> {3} -> {2} -> ||      f.n === s
 s     s.n
 f     f.n                          false
       f      f.n                   "
              f      f.n            "
                     f      f.n
       s      s.n
       f      f.n                   false
              f      f.n            true
                      x
{1} -> {2} -> {3} --------> ||
                            f.n
                            f
              s             s.n
```

- last node is deleted, so fast pointer becomes null when `f = f.next`

## > 2 nodes without a dup


```
 0
{1} -> {2} -> {3} -> {4} -> ||      f.n === s
 s     s.n
 f     f.n                          false
       f      f.n                   "
              f      f.n            "
                     f      f.n
       s      s.n
       f      f.n                   false
              f      f.n            "
                     f      f.n
              s      s.n
              f      f.n            false
                     f      f.n
                     s      s.n
```

- no nodes deleted
- both slow and fast pointers end up on last node

# Run

```bash
[rule146@rule146: 20151203-dedup-ll]$ node dedup-ll.js
test 1 ...
1
delete dups ...
1
test 2 ...
1 -> 2
delete dups ...
1 -> 2
test 3 ...
1 -> 1
delete dups ...
1
test 4 ...
1 -> 2 -> 1
delete dups ...
1 -> 2
test 5 ...
1 -> 2 -> 2 -> 1
delete dups ...
1 -> 2
```



















