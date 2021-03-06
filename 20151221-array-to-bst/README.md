# Sorted array to BST
(CTCI5 4.3) Given a sorted (increasing order) array with unique integer
elements, write an algorithm to create a binary search tree with minimal height.

# Algorithm

- given an integer array sorted in increasing order

```
[1, 3, 4, 10, 40, 41, 43, 56, ...]
```

- create a binary search tree with minimal height from the elements
- since the array is sorted, the middle element has an equal number of elements
smaller and larger than it
- that is true recursively for each sub-array

```
[1,2,3,4,5,6,7,8,9,10]
```
- for each level of recursion ...
- choose middle element of the array
- left elements go in left subtree, right elements go in right subtree:
```
6
    1L: 7 8 9 10
    1R: 1 2 3 4 5
```

- the left subtree at level 1
```
1L:
8
    2LL: 7
    2LR: 9 10
```

- the right subtree at level 1:
```
1R:
3
    2RL: 1 2
    2RR: 4 5
```

- at level 2
```
2L:
7
    null
    null
```

```
2R:
9
    null
    3LRR: 10
```

- find midpoint of array
- split array in left and right sub-arrays
- create a node
- left subtree is result of recursive call on left array
- same for right subtree in right array
- if array is empty, return null subtree

```
function arrayToBST(array)
    if (!array) return null
    [leftarray, rightarray] = splitArray(array)
    if (rightarray)
        data = rightarray[0]
        rightarray = rightarray[1..-1]
    else
        data = leftarray[0]
        leftarray = leftarray[1..-1]
    node = new node(data)
    node.left = arrayToBST(leftarray)
    node.right = arrayToBST(rightarray)
    return node
```

```
function splitArray(array)
    if (!array) return []
    if (array.length == 1) return [[], array];
    mid = floor(array.length / 2)
    leftarray = array[0 ... mid-1]
    rightarray = array[mid ... -1]
    return [leftarray, rightarray]
```

```
arrayToBST([1,2,3,4,5,6,7])

4
    2
        1
        3
    6
        5
        7
```

# Tests

```bash
[rule146@rule146: 20151221-array-to-bst]$ node array-to-bst.js
----------
[ 1 ]

1
----------
[ 1, 2 ]

2
    1
----------
[ 1, 2, 3 ]

2
    1
    3
----------
[ 1, 2, 3, 4, 5, 6, 7 ]

4
    2
        1
        3
    6
        5
        7
----------
[ 4, 7, 10, 20, 40, 41, 42, 60, 100, 120 ]

41
    10
        7
            4
        40
            20
    100
        60
            42
        120
```
