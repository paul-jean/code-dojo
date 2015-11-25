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

```

# Alg without additional data structures

## Implementation without a hash table:
- take ith char in string
- iterate through string from position i + 1 to look for that char
- if found, then this char was not unique, return false
- get to end of string with all chars unique, return true

## Tests:
```
'abca' ...

abca    i   j   s[i]    s[j]    return
@       0       a
 ^          1           b
  ^         2           c
   ^        3           a       false

'abcd' ...

abcd    i   j   s[i]    s[j]    return
@       0       a
 ^          1           b
  ^         2           c
   ^        3           d
 @      1       b
  ^         2           c
   ^        3           d
  @     2       c
   ^        3           d
   @    3       d
            4           -
                                true

'' (empty string) ...

''      i   j   s[i]    s[j]    return
@       0       ''
                                true
'a' ...

a       i   j   s[i]    s[j]    return
@       0       q
 ^          1           -
                                true
```

Run:

```bash
[rule146@rule146: 20151125-unique-chars]$ node unique-chars.js
[snip]
:no hash ...
: true
a: true
aa: false
ab: true
abcdefg: true
abcdefga: false
```
