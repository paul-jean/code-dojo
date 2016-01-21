# Convert a time from 12 hour format to

Convert a time in 12 hour format to 24 hour format.

Example:

```
07:05:45PM
12                  24
hh  mm  ss  a/p     hh  mm  ss  hh24
07  05  45  PM      19  05  45  19
```

# algorithm

```
hh  mm  ss  a/p     hh  mm  ss  hh24        tests
12  00  00  AM      00  00  00  hh12 - 12   y
12  00  01  AM      00  00  01  hh12 - 12   y
01  00  00  AM      01  00  00  hh12        y
11  59  00  AM      11  59  00  hh12        y

12  00  00  PM      12  00  00  hh12        y
01  00  00  PM      13  00  00  hh12 + 12   y
11  59  00  PM      23  59  00  hh12 + 12   y


if AM
    if hh12 == 12
        hh24 = hh12 - 12
    else
        hh24 = hh12
else
    if hh12 == 12
        hh24 = hh12
    else
        hh24 = hh12 + 12

```

# run

```
[rule146@rule146: 20160121-24-hour-clock]$ echo "07:09:45PM" | node 24hr.js
19:09:45
[rule146@rule146: 20160121-24-hour-clock]$ echo "12:00:00PM" | node 24hr.js
12:00:00
[rule146@rule146: 20160121-24-hour-clock]$ echo "12:00:00AM" | node 24hr.js
00:00:00
[rule146@rule146: 20160121-24-hour-clock]$ echo "01:00:00AM" | node 24hr.js
01:00:00
[rule146@rule146: 20160121-24-hour-clock]$ echo "01:00:00PM" | node 24hr.js
13:00:00
```
