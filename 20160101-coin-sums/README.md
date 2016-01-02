# All ways of combining coins to make n cents

(CTCI5 9.8) Given an unlimited number of quarters (25 cents), dimes (10 cents),
nickels (5 cents), and pennies (1 cent), write code to calculate the number of
ways of representing `n` cents.

# Algorithm

25, 10, 5, 1

```
25 cents

25
10, 10, 5
10, 5, 5, 5
5, 5, 5, 5, 5
...
```
- each coin can be decomposed into smaller coins:
```
1 -> 1
5 -> 1, 1, 1, 1, 1
10 -> 5, 5
25 -> 10, 10, 5
```

- come up with the largest coins that can create `n` cents
- create all possible decompositions of those coins

```
19 cents

25 > 19 pass
10 < 19 => use 10 to decompose as much as possible
    floor(19 / 10) => number of dimes = 1
    remaining = 19 % 10 => number of cents remaining after using dimes = 9
5 < 9 => use nickels
    floor(9/5) = 1
    remaining = 9 % 5 = 4
1 < 4 => use pennies
    floor(4/1) = 4
    remaining = 4 % 1 = 0

1*10, 1*5, 4*1
```
- primary decomposition using the largest possible coins:
- starting with the largest coin (25 cents)
- each time a coin fits into the remainder, use that coin to decompose the
  remainder, as many multiples as possible
- repeat the process with the new remainder

- each of the coins in the primary decomposition has decompositions itself
- 

```
function countSums(n)
    if n <= 0
        return 0
    var coins = [25, 10, 5, 1]
    var remainder = n
    var sumsByCoin = []
    while (remainder > 0)
        for (coin of coins)
            var mult = floor(remainder / coin)
            sumsByCoin.push(mult*coin)
            remainder = remainder % coin
            if remainder === 0
                break
    var numSums = 1
    for (sum of sumsByCoin)
        numSums += countSums(sum)
    return numSums
```

```
n       rem     coin    mult    sums            rem     numSums
19      19      25      0       [0]             19
        19      10      2       [0, 10]         9
        9       5       1       [0, 10, 5]      4
        4       1       4       [0, 10, 5, 4]   0       1

0                                                       0
10      10      25      0       [0]
                                ...
                                [0, 10]                 1
    0                                                   0
    10  10                      [0, 10]
5
4
```

```
function countSums(n, coins)
    if n <= 0
        return 0
    for (coin of coins)
        var mult = floor(n / coin)
        var rem = n % coin
        if rem === 0
            return 1
```
















