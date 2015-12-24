# Find a subtree in a binary tree

(CTCI5 4.8) You have two very large binary trees: T1, with millions of nodes,
and T2, with hundreds of nodes. Create an algorithm to decide if T2 is a subtree
of T1.

A tree T2 is a subtree of T1 if there exists a node `n` in T1 such that the subtree
of `n` is identical to T2. That is, if you cut off the tree at node `n`, the two
trees would be identical.

# Algorithm

- need an efficient way to check for possible subtree matches in T1
- alg needs to be O(lg N) for subtree scan
- most of the tree T1 will not be a match to T2, so don't waste effort checking
all of T1 until there is a possible match
- could search for the root node of T2 first throughout T1
- if the root node is a match, check more of T2
- if T2 is not matched, keep scanning T1 for the root node of T2
- as soon as a subtree match is found, return true and stop scanning T1
- so don't need to scan all of T1; only until a match is found

- root of T2 is r2
- scan T1 for r2.data
- if node.data === r2.data, then possible subtree match

- to do the subtree match
- compare two trees for equality
- start at the root of both trees

```
function isEqual(root1, root2)
    if (!root1 && !root2) return true
    if (!root1 && root2) return false
    if (!root2 && root1) return false
    if (root1.data !== root2.data) return false
    return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right)
```

```
// root1 is the large tree (millions of nodes)
// root2 has hundreds of nodes
function findSubtree(root1, root2)
    if (isEqual(root1, root2) || findSubtree(root1.left, root2) || findSubtree(root1.right, root2))
        return true
    return false
```

T1:
```
0
    1
        1.1
    2
        2.1
        2.2
```

T2:
```
2
    2.1
    2.2
```

```
r1      r2      r1.d === r2.d
<0>     <2>     f
    <1> <2.1>   
    <2> <2.2>
<1>
    ...
<2>     <2>     t
<2.1>   <2.1>   t
<2.2>   <2.2>   t
n       n
n       n       t

```
