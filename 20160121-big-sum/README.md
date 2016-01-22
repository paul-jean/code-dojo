# Compute an extremely large sum

(From [hackerrank](https://www.hackerrank.com/challenges/a-very-big-sum))

You are given an array of integers of size N. You need to print the sum of the
elements in the array, keeping in mind that some of those integers may be quite
large.

## Input

The first line of the input consists of an integer N. The next line contains N
space-separated integers contained in the array.

### Constraints

```
1≤N≤10
0≤A[i]≤10^10
```

### Sample Input

```
5
1000000001 1000000002 1000000003 1000000004 1000000005
```

## Output

Print a single value equal to the sum of the elements in the array. In the above
sample, you would print 5000000015.

# Algorithm

A hack for adding huge integers larger than what can be stored in a double:
store the integer behind the decimal point.

Javascript uses [double-precision floats](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
which can only go up to 2^53-1:

```
> Number.MAX_SAFE_INTEGER
9007199254740991
> Math.pow(2, 53) - 1
9007199254740991
```

Integer sums greater than this value return incorrect results:

```
> Number.MAX_SAFE_INTEGER + 1
9007199254740992
> Number.MAX_SAFE_INTEGER + 2
9007199254740992
```

# Run

Add a bunch of integers in the above example:

```
[rule146@rule146: 20160121-big-sum]$ echo -e "5\n1000000001 1000000002
1000000003 1000000004 1000000005" | node big-sum.js
5000000015
```

Add integers with a sum that exceeds `2^53 - 1`:

```
[rule146@rule146: 20160121-big-sum]$ echo -e "2\n9007199254740991 1" | node
big-sum.js
9007199254740992
[rule146@rule146: 20160121-big-sum]$ echo -e "2\n9007199254740991 2" | node
big-sum.js
9007199254740993
```

