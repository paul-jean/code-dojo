# kth last element of a linked list

(CTCI5 2.2) Write and algorithm to find the kth last element of a singly linked
list.

# Algorithm

Linked list with `n` total nodes:

```
{0} -> {1} -> {2} -> ... -> {n-k-1} -> {n-k} -> ... -> {n-2} -> {n-1}
 ^                             ^                                  ^
first                       kth last                             last
```

```
(n - k - 1) + k = n - 1 (last node)
```

- kth last node is the node such that k nodes after it is the last node
- the last node has a null next node
- traverse nodes with a slow pointer s
- from s, traverse k nodes with a fast pointer f
- if the kth node from s has f.next === null, then we've hit the last node, and s is at the
  kth last node
- k iterations for each s position, s goes up to n - k
- `(n - k) * k ~ O(k*n)` where `k <= n`
- worst case `k ~ n` so `O(n^2)`
- best case `k << n` so `O(n)`


k = 2
- fast pointer counter needs to be `= (2 - 1) = 1` when `f.next === null`
- `while (i < 2)`
```
       2nd last
        .
{0} -> {1} -> {2} -> ||     i       f.n === null
 s     s.n
 f     f.n                  0       false
       f      f.n           1       false

       s      s.n
       f      f.n           0       false
              f      f.n    1       true

```

faster?
- traverse entire list and count nodes in list
- compute n - k to get index for kth last node
- traverse list again to n - k node and return it
- `n` iterations to find the end and count nodes
- `n-k` iterations to get back to kth node from end
- `n + (n - k) ~ O(n)` independent of `k`

## 3 nodes, 2nd to last

```
       2nd last
        .
{0} -> {1} -> {2} -> ||     len     kthFromEnd      i
 c     c.n                  1
       c      c.n           2
              c      c.n    3
                                    3 - 2 = 1
 c     c.n                                          0
       c      c.n                                   1
       ^
       return
```
- return node `{1}` (correct)

## 2 nodes, 2nd to last

```
 2nd last
 .
{0} -> {1} -> ||     len     kthFromEnd      i
 c     c.n           1
       c      c.n    2
                             2 - 2 = 0
 c     c.n                                   0
 ^
 return
```
- return the head node (correct)

## 1 node, 2nd to last

```
{0} -> ||     len     kthFromEnd      i
 c     c.n    1
```
- `k > n`
- 1 < 2 is false, return null (correct)

# Run

```
[rule146@rule146: 20151204-ll-kth-last]$ node kth-last.js
1 -> 2 -> 3
2nd last: 2 (2)
1 -> 2
2nd last: 1 (1)
1
2nd last: null (null)
```
