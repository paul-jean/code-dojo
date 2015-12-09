# Sort a stack in ascending order

(CTCI5 3.6) Write a program to sort a stack in ascending order (with biggest
items on top). You may use at most one additional stack to hold items, but
you may not copy the elements into any other data structure (such as an array).
The stack supports the following operations: push, pop, peek and isEmpty.

# Algorithm

- given a stack

```
{10} -> {1} -> {4} -> {0} -> {6} -> ||
```

- return a new stack that is the sorted version of the given stack:

```
{10} -> {6} -> {4} -> {1} -> {0} -> ||
```

- start with an empty aux stack

```
||
```

- find the min item in the stack
- push the min val onto the new stack
- remove the min val from the stack

- n + n -1 + n -2 + ... + 1
- O(n^2) in time
- aux stack for the sorted items is O(n) in space

- for sorting in place
- still searching the stack for a min value O(n) each time
- then inserting the min value at the end of the stack is also O(n) if no pointer
to the tail, but O(1) if there is a pointer to the tail
- O(n^2)


```
h                                          s
{10} -> {1} -> {4} -> {0} -> {6} -> ||     ||
c       c.n
m
        m
        c      c.n
               c      c.n
                      m
                      c      c.n
                             c      c.n

{10} -> {1} -> {4} -> {0} -> {6} -> ||     ||
                      m      m.n    m.n.n

{10} -> {1} -> {4} --------> {6} -> ||     {0} -> ||
```

- running through the stack to look for min node
```
while (c.n)
    (if c.n.d < m.d) m = c.n
    c = c.n
```
- deleting the min node from original stack
```
if (!m.n)
    m = null
else
    m.d = m.n.d
    m.n = m.n.n
```

- push, pop, peek, isEmpty

```
h                                          s
{10} -> {1} -> {4} -> {0} -> {6} -> ||     ||
pop: 10
        {1} -> {4} -> {0} -> {6} -> ||     ||
push 10 onto s
                                           {10} -> ||
pop: 1
               {4} -> {0} -> {6} -> ||
push 1 onto s
a = 1
                                           {10} -> ||
                                           c       c.n
c = s
if (c.d < a)
    an = new node(a)
    an.n = c
if (!c.n && c.d > a)
    an = new node(a)
                                           {1}
                                           an
                                           {10} -> ||
                                           c       c.n
    t = c.n                                        t
    c.n = an
                                           {10} -> {1}
    a.n = t
                                           {10} -> {1} -> ||
while (c.n)
    if (c.n.d < a)
        an = new node(a)
        c.n.n = an
        a.n = c.n
                                           {1} -> {10} -> ||
```

```
while (!isEmpty(h)) {
    // pop off h
    // push onto s
}
```

