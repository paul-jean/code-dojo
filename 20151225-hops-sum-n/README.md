# Hops of 1, 2, and 3 that sum to n

(CTCI5 9.1) A child is running up a staircase with n steps, and can hop either
1, 2 or 3 steps at a time. Implement a method to count how many possible ways
the child can run up the stairs.

# Algorithm

- count the number of possible distinct sums of 1, 2, and 3 that sum to n
- let c(n) be the number of ways for staircase with n steps
- c(n) = 1 + c(n-1)
- hop 2: number of remaining ways is c(n-2)
- hop 3: " c(n-3)
- hops: 1, 2

n = 1:
```
1

c(1) = 1
```

n = 2:
```
1, 1
2

c(2) = 2
```

n = 3:
```
1, 1, 1
1, 2
2, 1
3

c(3) = 4
```

- in general for any n > 0
- hop 1: 1
- hop 2: 1, 1 or 2
- hop 3: 1,1,1 or 1, 2 or 2, 1 or 3

```
function count(n)
    if (n - 3 >= 0)
        return 1 + count(n - 1) + 2 + count(n - 2) + 4 + count(n - 3)
```

n = 4
1 + c(n-1) 
2 + c(n-2)
4 + c(n-3)

hop     remaining   hop     remaining   hop     remaining   hop     remaining   path
1       3           1       2           1       1           1       0           1,1,1,1
                                        2       0                               1,1,2
                    2       1           1       0                               1,2,1
                    3       0                                                   1,3
2       2           1       1           1       0                               2,1,1
                    2       0                                                   2,2
3       1           1       0                                                   3,1

c(4) = 7

c(4) = 1 + c(4-1) + 1 + c(4-2) + 1 + c(4-3)
- take a hop of 1, increment c, recurse with n - 1
- take a hop of 2, increment c, recurse with n - 2
- take a hop of 3, increment c, recurse with n - 3

```
function count(n)
    if (n >= 3)
        return 1 + count(n-1) + 1 + count(n-2) + 1 + count(n-3)
    if (n == 2)
        return 1 + count(n-1) + 1 + count(n-2)
    if (n == 1)
        return 1 + count(n-1)
    return 0
```
