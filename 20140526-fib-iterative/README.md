Iterative implementation of the fibonacci sequence.

Create a 2-element array that will hold

```javascript
fs = [ f[i-2], f[i-1] ]
```

for all `i <= n`. And iteratively do the replacement

```javascript
[ f[i-2], f[i-1] ] -> [ f[i-1], f[i-2] + f[i-1] ]
```

for `i = 3, 2, ..., n`.

When `i = n`, we will have

```javascript
fs = [ f[n - 1], f[n - 2] + f[n - 1]]
```

and since `f[n] == f[n - 2] + f[n - 1]`, then the last element
of `fs` will contain `f[n]`.

```bash
[rule146@rule146: 20140526-fib-iterative]$ node fib.js
1       0
2       1
3       1
4       2
5       3
6       5
7       8
8       13
9       21
10      34
```
