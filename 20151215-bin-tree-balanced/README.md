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
root    rt.l    rt.r    ll  lr
{0}     n       n       
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
{rt.l} -> ||
|
v
_
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
