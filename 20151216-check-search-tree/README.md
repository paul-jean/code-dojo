# Check if a binary tree is a binary search tree

(CTCI5 4.5) Implement a function to check if a binary tree is a binary search tree.

# Algorithm

- binary tree is a bin search tree if for each node in the tree
- all nodes to the left are less than node
- all nodes to the right are greater or equal to node

- given a node
- node.left.data < node.data
- node.right.data >= node.data
- if this is true for all nodes, then the bin tree is a bin search tree
- recurse down into node.left and node.right if the above condition for node is true

```
node    left    right
{n}     n.l     n.r
```

- e.g. satisfies the search condition
```
{0} -> {1}
{-1}
```

```
{0} -> {0}
{-1}
```

```
{0} -> ||
{-1}
```

```
function isSearchTree(node)
    if !node
        return true
    if (node.left)
        if node.left.data < node.data 
            return isSearchTree(node.left)
        else
            return false
    if (node.right)
        if node.right.data >= node.data 
            return isSearchTree(node.right)
        else
            return false
```

e.g.
```
{0} -> {1}
{-1}
```

```
node        n.l.d     n.r.d     n.l.d < n.d     n.r.d >= n.d    return
{0}         -1        1         true            true
    {-1}    null      null                                      true
    {1}     null      null                                      true
