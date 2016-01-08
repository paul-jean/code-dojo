# Find the union of two lists

If you have 2 separate lists, construct a method to find the values they intersect at and return the list.

(https://www.glassdoor.com/Interview/Dropbox-Software-Engineer-Interview-Questions-EI_IE415350.0,7_KO8,25.htm)

# Algorithm

- at least O(n)

```
l1: [1, 2, 4, 10]
l2: [2, 3, 5, 20]

un: [2]
```

- naive O(n^2):
- for each element in l1, look for match in l2

- if we sort the lists ahead of time


```
l1: [4, 1, 10, 2, 3]
l2: [20, 11, 1, 3, 10, 5, -10, -5]

l1: [1, 2, 3, 4, 10]
l2: [-10,-5, 1, 3, 5, 10, 11, 20];
```

- assume there is a well-defined total ordering for the elements
- so list.sort() gives a well-defined ordering

-after sorting:

```
la                  lb                              union
[4, 1, 10, 2, 3]    [-10, -5, 1, 3, 5, 10, 11, 20]  []
^
```

- do a binary search in the _larger_ list for each element in the smaller one
- because running through each element of smaller list is O(n)
- want O(lg n) operations for the larger list

- l1 does not need to be sorted
- l2 does need to be sorted


- pre-sort the larger list l2
- l1 can be iterated through as-is


```
function listUnion(l1, l2)
    if l1.length < l2.length
        la = l1
        lb = l2
    else
        la = l2
        lb = l1
    lb.sort()
    union = []
    for (e in la)
        if binSearch(lb, e)
            union.push(e)
    return union
```

```
function binSearch(list, e)
    if list.length === 0
        return false
    mid = floor(list.length / 2)
    if list[mid] === e
        return true
    if list[mid] < e
        binSearch(list[mid+1 .. -1], e)
    else
        binSearch(list[0 .. mid-1], e)
```

```
la                  lb                              union
[4, 1, 10, 2, 3]    [-10, -5, 1, 3, 5, 10, 11, 20]  []
^
    ^                                               [1]
        ^                                           [1, 10]
           ^
              ^                                     [1, 10, 3]
```
