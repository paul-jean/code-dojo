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
