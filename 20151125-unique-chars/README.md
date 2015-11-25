# Problem
(CTCI4 1.1)
Implement an algorithm to determine if a string has all unique characters.

What if you cannot use additional data structures?

# Algorithm

- iterate through the chars in the string
- write each char to a hash table as eg `{a:1}`
- if the char exists in the hash already, this is a repeated char, return false
- get to end of string with all chars unique, return true

```bash
[rule146@rule146: 20151125-unique-chars]$ node unique-chars.js
: true
a: true
aa: false
ab: true
abcdefg: true
abcdefga: false

no hash ...
: true
a: true
aa: false
ab: true
abcdefg: true
abcdefga: false
```

# Without additional data structures


