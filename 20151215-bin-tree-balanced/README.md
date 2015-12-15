# Check if a binary tree is balanced

(CTCI5 4.1) Implement a function to check if a binary tree is balanced. A
balanced binary tree is one in which the heights of the left and right subtrees
of any given node never differ by no more than one.

# Algorithm

- given a root node
- keep track of the height of the left and right subtrees of the root
- if the left subtree height - right subtree height > 1, return false
- otherwise return true
- this works recursively, where the child becomes the root in the next recursive
  call

```
{rt} -> {rt.r}
|
v
{rt.l}
```

- no left or right child:
- left = 0 and right = 0 => balanced
```
{rt} -> ||
|
v
_
_

```

```
isBalanced(root, 0, 0)

root    rt.l    rt.r    ll  lr  ret
{0}     null    null    0   0   true
```

```
lenleft = 0
lenright = 0
```

- left child but no right child (or vise versa)
- if left child has no more children, then left = 1 and right = 0 => balanced
```
{rt} -> ||
|
v
{1} -> ||
|
v
_
```

```
isBalanced(root, 0, 0)

root    rt.l    rt.r    ll  lr  ret
{0}     {1}     null    0   0
    {1} null    null    l   0   true
```

- left child but no right child

isbalanced(root, 0)

isbalanced(node, len) {
    if !node.left || !node.right
        return len
    if node.left
        lenleft = isbalanced(node.left, len + 1)
    if node.right
        lenright = isbalanced(node.right, len + 1)
    if |lenleft - lenright| > 1
        return false
    return true
}
```

```
{0} -> ||
|
v
{0L} -> {0LR} -> ||
|
v
_
```

```
isBalanced(root, 0, 0)

node            rt.l    rt.r    ll  lr  ret
{0}             {0L}    null    0   0
    {0L}        null    {0LR}   1   0
        {0LR}   null    null    1   1   true
wrong
```

- possibly working implementation:

```
isBalanced(root)

subtreeLength({0}, 0)

node            rt.l    rt.r    len     ll  rl  max(ll,rl)  return
{0L}            null    {0LR}   0
    null                        1       1
    {0LR}       null    null    1
        null                    2           2   2           2

null                            0           0               0

isBalanced(root)
node    ll      rl      |ll - rl|   return
{0}     2       0       2           false
```
