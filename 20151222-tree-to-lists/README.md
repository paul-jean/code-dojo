# Binary tree to linked lists

(CTCI5 4.4) Given a binary tree, design an algorithm which creates a linked list of 
of all the nodes at each depth. If you have a binary tree with depth D, you'll have
D linked lists.

# Algorithm

```
0
    1
        1.1
            1.1.1
        1.2
            1.2.1
    2
        2.1
        2.2
```

- the algorithm will produce 4 linked lists:

```
{0} -> ||
{1} -> {2} -> ||
{1.1} -> {1.2} -> {2.1} -> {2.2} -> ||
{1.1.1} -> {1.2.1} -> ||
```

- start at the root node
- there is always the first list with a single node for the root of the tree
- as long as the tree is !null, this first list will always be there

- implement recursively
- function that takes the current node, and the level
- the linked lists for each level need to be accessible to each call of the function
- could make the lists a global, or pass it in
- either way going to need an array of list heads to access the lists for each level

```
function tree2lists(treenode, level)
    if (!treenode) return;
    node = new listnode(treenode.data)
    if (listarray.length - 1 < level)
        listarray.push(node)
    else
        listhead = listarray[level]
        node.next = listhead
        listarray[level] = node
    tree2lists(treenode.left, level + 1)
    tree2lists(treenode.right, level + 1)
```

```
tree2lists(root, 0)
treenode            level   node    listarray
<0>                 0       {0}     [{0}]
    <1>             1       {1}     [{0}, {1}]
        <1.1>
        <1.2>
    <2>             1       {2}     [{0}, {2} -> {1}]
```

```
0
    1
        1.1
            1.1.1
        1.2
            1.2.1
    2
        2.1
        2.2
```

























