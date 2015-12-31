# Find all permutations of a string

(CTCI5 9.5) Write a method to return all permutations of a string.

# Algorithm

```
abc

a _ _

  b c

  b _
    c   a b c

  c _   a c b
    b

b _ _
c _ _
```

- given a string s, start a set of permutations using each char in s at the beginning
of the permutation
- e.g. in `abc` each char a, b, and c are placed at the beginning of a set of permutations:
```
a b c
a _ _
b _ _
c _ _
```


- findStringPerms(s) returns an array containing all permutations of string s
```
function findStringPerms(s)
    if s.length === 0
        return []
    if s.length === 1
        return [s]
    perms = []
    for (i = 0; i < s.length; i++)
        c = s[i]
        remaining = s[0..i-1] + s[i+1..-1]
        substringPerms = findStringPerms(remaining)
        for (j = 0; j < subStringPerms.length; j++)
            snew = c + subStringPerms[j]
            perms.push(snew)
    return perms
```

```
findStringPerms('abc')

s       i   c   remaining   perms                   snew
abc     0   a   bc          findStringPerms('bc')
 bc     0   b   c           fSP('c')
  c                         ['c']                   bc
                            ['bc']
        1   c   b           fSP('b')
                            ['b']
                                                    cb
                            ['bc', 'cb']
                                                    abc
                                                    acb
                            ['abc', 'acb']
        1   b   ac
                            ...
                            ['abc, 'acb, 'bac', 'bca']
        2   c   ab
                            ...
                            ['abc, 'acb, 'bac', 'bca', 'cab', 'cba']
```



























