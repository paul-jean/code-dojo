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

- when an element is pop'd, if the head is the current min, find a new min
- change the min pointer to point to the new min node

## example
```
h
{10} -> {3} -> {4} -> {0} -> ||
                      m
```

```
- push 2:
- n = new node(2)
- if 2 < m.d
    - m = n
- h.next = n

- push into empty stack:
- n = new node(2)
- m = n
```

## pop from the list

```
h
{10} -> {3} -> {4} -> {0} -> ||
                      m
        {3} -> {4} -> {0} -> ||
        h             m
```

## pop where the head is the min
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

## pop where the head is min, new min is an internal node

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

```
c = h
minval = c.d
while (c.n) {
    if (c.n.d < minval) {
        minval = c.n.d
    }
    c = c.n
}
```


## push onto empty stack

```
h
||

n
{1}

n      h
{1} -> ||

h
{1} -> ||
m
```

## push second value onto stack:

```
h
{1} -> ||
m

n: {2}

n      h
{2} -> {1} -> ||
       m

h
{2} -> {1} -> ||
       m
```

## push smaller value onto the stack:
```
h
{2} -> {1} -> ||
       m

n: {0}

n      h
{0} -> {2} -> {1} -> ||
              m

h
{0} -> {2} -> {1} -> ||
              m

h
{0} -> {2} -> {1} -> ||
m
```

## pop
```
h
{0} -> {2} -> {1} -> ||     ret
m                           0
       h
       {2} -> {1} -> ||
       c      c.n
       m
              m
              c      c.n
       h
       {2} -> {1} -> ||
              m
```







































