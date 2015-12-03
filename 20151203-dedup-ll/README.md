# Delete duplicates from a linked list
## (without using a temporary buffer)

(CTCI5 2.1 part 2) Implement an algorithm to delete duplicates from a linked list,
_without using a temporary buffer_.

# Algorithm

- traverse through list with two node references
- slow pointer sits on node k
- fast pointer runs from k+1 to end, looking for duplicates of node k
- (run from k+1 because nodes from 0 to k-1 have already been checked for dups)
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

## Two nodes:

```
 0
{1} -> {1} -> ||
 s     s.n
 f     f.n
        x
{1} --------> ||
```

- while s.n
- f = s
- while f.n
- if (f.next.data === s.data)
- f = f.next
- s = s.next

## > 2 nodes


```
 0
{1} -> {2} -> {3} -> {2} -> ||
 s     s.n
 f     f.n
       f      f.n
              f      f.n
                     f      f.n
       s      s.n
       f      f.n
              f      f.n
                      x
{1} -> {2} -> {3} --------> ||
              f             f.n
              s             s.n
```





















