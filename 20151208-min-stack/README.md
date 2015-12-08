# Min stack

(CTCI5 3.2) How would you design a stack which, in addition to push and pop,
also has a function min which returns the minimum element? Push, pop, and min
should all work in O(1) time.

# Algorithm

- FILO

pop:
```
{1} -> {2} -> {3} -> ||
 ^
{2} -> {3} -> ||
```

push:
```
{0} -> {1} -> {2} -> {3} -> ||
```

min:
- every time an element is push'd, check if it's smaller than the current
  minimum
- if smaller, repoint the min pointer to the new push'd element
- if larger, leave the min pointer alone


```
h
{10} -> {3} -> {4} -> {0} -> ||
                      m
```

- push 2:
- n = new node(2)
- if 2 < m.d
    - m = n
- h.next = n

- push into empty stack:
- n = new node(2)
- m = n

- pop from the list

```
h
{10} -> {3} -> {4} -> {0} -> ||
                      m
        {3} -> {4} -> {0} -> ||
        h             m
```

- pop where the head is the min:
```
h
{0} -> {3} -> {4} -> {10} -> ||
m
       h
       {3} -> {4} -> {10} -> ||
       c      c.n
       m
              c      c.n
                     c       c.n


```

- pop where the head is min, new min is an internal node:

```
{1} -> {5} -> {3} -> {10} -> ||
m
       {5} -> {3} -> {10} -> ||
       c      c.n
       m
       if (c.n.d < m.d)
              c      c.n
              m
                     c       c.n

```

c = h
minval = c.d
while (c.n) {
    if (c.n.d < minval) {
        minval = c.n.d
    }
    c = c.n
}

