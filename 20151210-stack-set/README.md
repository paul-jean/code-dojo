# Set of stacks

Implement a stack which internally partitions itself into multiple stacks. StackSet
should be composed of several stacks, and should create a new stack once the previous
one exceeds capacity. StackSet.push(...) and StackSet.pop() should behave identically
to a single stack -- i.e. pop() should return the same the same values as it would if
there were just a single stack.

# Algorithm

- say the threshold is 3:

```
||
push(10)
{10} -> ||
push(5)
{5} -> {10} -> ||
push(3)
{3} -> {5} -> {10} -> ||
push(6)
{3} -> {5} -> {10} -> ||
{6} -> ||
...
```

equivalent single stack:
```
{6} -> {3} -> {5} -> {10} -> ||
pop() => 6
{3} -> {5} -> {10} -> ||
```

- want pop to return the head of the most recently created internal stack
- want push to add a value to the head of the most recently created internal stack
```
{3} -> {5} -> {10} -> ||
{6} -> ||
pop() => 6
{3} -> {5} -> {10} -> ||
||
```

- threshold = 3
```
h                                len   ha
||                               0     [h]
push(10)
{10} -> ||                       1
push(5)
{5} -> {10} -> ||                2
push(3)
h:  {3} -> {5} -> {10} -> ||     3     [h]
push(6)
                                       [h, h2]
h2: {6} -> ||
h = h2                           1
push(7)
h = h2
h2: {7} -> {6} -> ||             2

```

push(6):
```
node = new node(6)
if (len === thr)
    ha.push(node)
    len = 1
else
    h = ha[ha.length-1]
    node.next = h
    len = len + 1
```

pop():
```
h = ha[ha.length-1]
ret = h.d
h = h.n
if (!h)
    ha = ha[0..ha.length-1]
    if (ha.length === 0)
        len = threshold
    else
        len = len - 1
else
    ha[ha.length-1] = h
return ret
```

# Run

```bash
push 1:
++++++++
stack 0: 1 - ||
len = 1
++++++++
push 2:
++++++++
stack 0: 2 - 1 - ||
len = 2
++++++++
push 3:
++++++++
stack 0: 3 - 2 - 1 - ||
len = 3
++++++++
push 4:
++++++++
stack 0: 3 - 2 - 1 - ||
stack 1: 4 - ||
len = 1
++++++++
pop: 4
++++++++
stack 0: 3 - 2 - 1 - ||
len = 3
++++++++
pop: 3
++++++++
stack 0: 2 - 1 - ||
len = 2
++++++++
push 3:
++++++++
stack 0: 3 - 2 - 1 - ||
len = 3
++++++++
pop: 3
++++++++
stack 0: 2 - 1 - ||
len = 2
++++++++
pop: 2
++++++++
stack 0: 1 - ||
len = 1
++++++++
pop: 1
++++++++
(empty)
len = 0
++++++++
pop: null
++++++++
(empty)
len = 0
++++++++
```
