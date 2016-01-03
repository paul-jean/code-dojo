# Find all combinations of coins that sum to n

(CTCI5 9.8) Given an unlimited number of 25, 10, 5, and 1 cent coins, find the
number of ways of representing `n` cents.

# Algorithm

- divide and conquer approach:

```
f(n) => number of ways of representing n cents

f(n) = f(n - 10) * f(10)

f(2) = f(2 -1) * f(1) = f(1) * f(1) = (1) * (1) = (1)

f(6) = f(6 - 1) * f(1) = f(5) * (1)
f(5) = 1 (single 5 cent) + 1 (5 x 1 cent) = 2


f(1) = 1 (base case)

```

```
countSums(5)
5   +
    1 (4)
        1 (3)
            1 (2)
                1 (1)
                    1 (0) ret 1
    5 (0) ret 1

5   +
    1
    1

countSums(5)  => 2
```

```
countSums(6)
6   +
    1 (5)
        +
        1 (4)
            ...
                1 (0) ret 1
        5 (0) ret 1
    5 (1) ret 1
        1 (0)   ret 1

6   +
    2 [6 x 1c], [1 x 1c, 1 x 5c]
    1 [1 x 5c, 1 x 1c]

countSums(6) => 3
```

```
function countSums(n)
    if n < 0
        return 0
    if n == 0
        return 1
    coins = [25, 10, 5, 1]
    numSums = 0
    for (coin of coins)
        numSums += countSums(n - coin)
    return numSums
```

```
countSums(5)
n
5   +
    25 (-20) ret 0
    10 (-5) ret 0
    5 (0) ret 1
    1 (4)
        ...
        1 (1) ret 1
ret 2
```
