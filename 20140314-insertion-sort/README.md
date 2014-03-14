Implement insertion sort for a list of integers.

With no arguments, it sorts a list of 20 random integers:

```bash
[rule146@rule146: 20140314-insertion-sort]$ node insertion-sort.js
[ 21, 41, 1, 18, 36, 53, 98, 96, 46, 83, 84, 98, 31, 72, 86, 23, 34, 97, 54, 61 ]
[ 1, 18, 21, 23, 31, 34, 36, 41, 46, 53, 54, 61, 72, 83, 84, 86, 96, 97, 98, 98 ]
```

Pass an integer for the length of the list to sort:

```bash
[rule146@rule146: 20140314-insertion-sort]$ node insertion-sort.js 10
Original list:
[ 26, 78, 92, 92, 61, 76, 97, 33, 4, 19 ]
Sorted list:
[ 4, 19, 26, 33, 61, 76, 78, 92, 92, 97 ]
```
