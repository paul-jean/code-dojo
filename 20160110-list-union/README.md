# Find the union of two lists

If you have 2 separate lists, construct a method to find the values they intersect at and return the list.

(https://www.glassdoor.com/Interview/Dropbox-Software-Engineer-Interview-Questions-EI_IE415350.0,7_KO8,25.htm)

# algorithm

- assume numerical data in the two lists
- assume the lists can be stored in memory

```
listUnion(l1, l2) => elements common to l1 and l2
```

- naive implementation:
- iterate through elements in l1
- for each element of l1, iterate through l2 to see if there's match
- O(n^2)

- at the least we have to touch each element, so >= O(n)

- if we're able to do binary searching, that would O(lg n)
- sorting a list is O(n lg n)

- iterate through l1
- for each element of l1, binary search l2
- assumes l2 is sorted
- iterating throug l1: O(n)
- binary searching l2: (lg n)
- pre-sorting l2: O(n lg n)
- overall O(n lg n)
- better than naive implementation of O(n^2)

- iterate through smaller list of l1 and l2
- binary search through larger one

```
function listUnion(l1, l2)
    if l1.length === 0 || l2.length === 0
        return [];
    if l1.length >= l2.length
        la = l2
        lb = l1
    else
        la = l1
        lb = l2
    lb = lb.sort(numericalCompare)
    union = []
    for (i = 0; i < la.length; i++)
        if binarySearch(lb, la[i])
            union.push(la[i])
    return union

function numericalCompare(a, b)
    if (a < b)
        return -1
    else if a === b
        return 0
    else
        return 1

function binarySearch(list, e)
    if list.length === 0
        return false
    mid = floor(list.length / 2)
    if list[mid] === e
        return true
    if list[mid] < e
        if mid + 1 >= list.length
            return false
        else
            return binarySearch(list[mid+1 ... -1], e)
    else
        if mid - 1 < 0
            return false
        else
            return binarySearch(list[0 ... mid -1])
```

```
l1 = [-10, 5, -20, 1, 6, 9]
l2 = [-7, 0, -10, 1, 7, 3, 20, 40]

la                          lb
[-10, 5, -20, 1, 6, 9]      [-7, 0, -10, 1, 7, 3, 20, 40]
                            [-10, -7, 0, 1, 3, 7, 20, 40]
 ^

binSearch(lb, -10)
list                            e       mid             list[mid]
[-10, -7, 0, 1, 3, 7, 20, 40]   -10     fl(8/2) = 4     3
[-10, -7, 0, 1]                         fl(4/2) = 2     0
[-10, -7]                               fl(2/2) = 1     -7
[-10]                                   fl(1/2) = 0     -10
=> true
```















