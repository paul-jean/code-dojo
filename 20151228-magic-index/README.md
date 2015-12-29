# Find magic index in an array

(CTCI5 9.3) A magic index in an array `A[0...n-1]` is defined to be an index
`i` such that `A[i] = i`. Given a _sorted_ array of _distinct_ integers, write
a method to find a magic index, if one exists, in array `A`.

# Algorithm

```
0 1 2 3 4 5 6 ...
0 1 2 3 4 5 6 ...
```

- if the array starts with a positive integer
- then that integer must be zero in order for there to be a magic index

- starts at 1, can't have a MI:
```
0 1 2 3
1 2 4 9
```

- if it starts at 0, could be a run of MIs:
```
0 1 2 3
0 1 4 9
* *
```

- if the array starts with a negative integer
- then the MI could be further into the array:
```
0  1  2 3 4
-5 -3 0 3 10
        *
```

```
0  1  2  3  4 
-5 1  4  5  7
   *
```

- values have to start at <= 0:
- otherwise can't exist


- in general
- let m = floor(n/2), 
- (a) if A[m] > m then for all i >= m A[i] > i (already ahead of the index),
and MI must be < m
    - check from 0 to m - 1
- (b) if A[m] == m, found MI m
- (c) if A[m] < m, then there may exist an i > m such that A[i] == i
    - check from m + 1 to n
- now test first half

```
function findMagicIndex(a, i, j)
    if (i > a.length - 1 || j > a.length - 1)
        return -1 // throw an error
    if (i < j) return -1
    mid = floor((i + j) / 2)
    if a[mid] === mid
        return mid
    if a[mid] > mid
        // mid is ahead of the index
        findMagicIndex(a, i, mid - 1)
    if a[mid] < mid
        findMagicIndex(a, mid + 1, j)
```

```
0   1   2   3   4   5
-5  -1  0   3   7   10
            *
findMagicIndex(a, 0, 5)

i                   j
        m
        a[2] = 0 < 2
            i       j
                m
                a[4] = 7 > 4
            i
            j
            m
            a[3] = 3 == 3
            a[m] == m
            *

```
