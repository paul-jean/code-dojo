# Compute all permutations of a string

(CTCI5 9.5) Write a method to compute all permutations of a string.

# Algorithm

```
abc

acb
cab

cba
bca

bac
abc

3P3
3! / (3-3)! = 3! / 1 = 3! = 3 * 2 * 1 = 6
```

```
a _ _
" b c
" c b

  b _
  _ b

_ b _
a " c
c " a

_ _ c
a b "
b a "
```

```
a b c
a _ _
  b _
    c   a b c
  c _
    b   a c b

_ b _
a _ c   a b c
c _ a   c b a

_ _ c
a _
_ b
```
a _ _
  b _
    a   a b c
  c _
    b   a c b
_ a _
b   _
    c   b a c
c   _
    b   c a b
_ _ a
```

```
a b c d

a _ _ _

  b c d
  b _ _

    c d
    c _
      d
    _ c
    d

  _ b _
  _ _ b

_ a _ _

b   c d

_ _ a _
_ _ _ a

```

```
function stringPerms(s)
    if s.length === 1
        return [s]
    var c = s[0]
    var perms = []
    for (i = 0; i <= s.length-1; i++)
        var c = s[i]
        var leftPerms, rightPerms
        if (i === 0)
            rightPerms = stringPerms(s[i+1 .. -1])
            for (var j = 0; j < rightPerms.length; j++)
                perms.push(c + rightPerms[j])
        else if (i === s.length - 1)
            leftPerms = stringPerms(s[0 .. -2])
            for (var j = 0; j < leftPerms.length; j++)
                perms.push(leftPerms[j] + c)
        else
            leftPerms = stringPerms(s[0 .. i-1])
            rightPerms = stringPerms(s[i+1 .. -1])
    return perms
```


