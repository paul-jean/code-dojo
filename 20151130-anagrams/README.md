# Anagrams
(CTCI4 1.4)
Write a method to decide if two strings are anagrams or not.

# Algorithm

- s1 and s2 are anagrams if:
- the letters of s1 are a permutation of s2 (and vise versa)
- s1 and s2 have to be the same length
- each letter should occur the same number of times in s1 and s2

- if s1 and s2 are not the same length, return false
- if s1 is empty, s2 must be also because they are equal length, return true
- tally occurances of each letter in s1 (characters in general, could be
  numbers)
- do the same for s2
- run through the hash tables h1 and h2 holding the char tallies for s1 and s2
- if any letter frequency is not the same, return false
- if we got through both hashes with the same char tallies, return true

# Run

```bash
[rule146@rule146: 20151130-anagrams]$ npm run compile

> anagrams@1.0.0 compile /Users/rule146/code/code-dojo/20151130-anagrams
> babel anagrams.js > build/anagrams.js

[rule146@rule146: 20151130-anagrams]$ npm run test

> anagrams@1.0.0 test /Users/rule146/code/code-dojo/20151130-anagrams
> node build/anagrams.js

s1 =  , s2 =  ...
true
s1 = a , s2 = a ...
true
s1 = ab , s2 = ba ...
true
s1 = ab , s2 = ac ...
false
s1 = aab , s2 = aba ...
true
s1 = aab , s2 = aac ...
false
s1 = aab , s2 = aca ...
false
```
