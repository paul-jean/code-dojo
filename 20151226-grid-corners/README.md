# Robot paths between grid corners

(CTCI5 9.2) A robot is sitting at the top left corner `(0,0)` of an X by Y grid.
The robot can only move in two directions: right and down. How many possible
paths are there for the robot to go between `(0,0)` and `(X,Y)`?

# Algorithm

- move right: x + 1
- move down: y + 1

- make a move left or right
- increment the number of paths
- make additional moves

- n(x, y) = number of paths from (x,y) to (X,Y)
- n(x, y) = f (n(x+1, y),  n(x, y+1))

X = 2
Y = 2
```
o o
o o
```

```
(1,1) [1 + 1 = 2]
    (2,1) [1]
        (2,2) [1]
    (1,2) [1]
        (2,2) [1]
```

X = 3
Y = 3
```
pos
(0,0) [6]
    (1, 0) [ (1) + (2) = 3 ]
        (2, 0) (x = X) [1]
            n/a
            (2, 1) [1]
                n/a
                (2, 2) (y = Y) [1]
        (1, 1) [ 1 + 1 = 2 ]
            (2, 1) (x = X) [1]
                n/a
                (2, 2) (y = Y) [1]
            (1, 2) (y = Y) [1]
                (2, 2) (x = X) [1]
                n/a
    (0, 1) [ 3 ]
        (1, 1)
            ...
        (0, 2)
            ...
```


```
function countPaths(x, y, X, Y)
    if x < X and y < Y
        return 1 + countPaths(x + 1, y, X, Y) + 1 + countPaths(x, y + 1, X, Y)
    if x === X and y < Y
        // can't move right, only down
        return 1 + countPaths(x, y + 1, X, Y)
    if x < X and y === Y
        // can't move down, only right
        return 1 + countPaths(x + 1, y, X, Y)
    // must be at bottom corner
    return 0
```

X = 2
Y = 2
```
x   y   ret
0   0   1

```

```
0
    1
        1.1
        1.2
    2
        2.1
        2.2
```

