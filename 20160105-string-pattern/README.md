# Determine if a string matches a pattern

(From [Glassdoor](https://www.glassdoor.com/Interview/Dropbox-Software-Engineer-Interview-Questions-EI_IE415350.0,7_KO8,25.htm))
Given a pattern and a string - find if the string follows the same pattern:

Eg: Pattern : [a b b a], String : cat dog dog cat

# Algorithm

- given a pattern
- parse the pattern

```
"a b b a"
```

- parse the string

```
"cat dog dog cat"
```

- break string up into words separated by spaces
- initial check: do the pattern and string contain the same number of words?
- if no, return false
- if yes, check if the string follows the given pattern

- create a hash of the string, where keys come from the pattern, and values
come from the string
- running through the pattern and string:
- check hash table for presence of the key (from pattern)
- if the key exists in the hash table, check if the string word matches what is
in the hash

```
pattern         string                  h
[a, b, b, a]    [cat, dog, dog, cat]    {}

^               ^                       {a:cat}
    ^                 ^                 {a:cat, b:dog}
       ^                   ^            h[b] == dog ==> true
          ^                     ^       h[a] == cat ==> true

return true
```

```
pattern         string                  h (p->s)                h2 (s->p)
[a, b, b, c]    [cat, dog, dog, cat]    {}                      {}

^               ^                       {a:cat}                 {cat:a}
    ^                 ^                 {a:cat, b:dog}          {cat:a, dog:b}
       ^                   ^            h[b] == dog ==> true    h2[dog] == b ==> true
          ^                     ^       {a:cat, b:dog, c:cat}   {cat:a, dog:b}
                                                                h2[cat] == c ==> false
```

```
function doesFollowPattern(s, patt)
    if !s && !patt
        return true
    else if (!s && patt) || (!patt && s)
        return false
    sWords = s.split(" ")
    pattWords = patt.split(" ")
    if sWords.length != pattWords.length
        return false
    hashPatt2Str = {}
    hashStr2Patt = {}
    for (i = 0; i < sWords.length; i++)
        if !hashPatt2Str[pattWords[i]]
            hash[pattWords[i]] = sWords[i]
        else
            if hash[pattWords[i]] != sWords[i]
                return false
        if !hashStr2Patt[sWords[i]]
            hashStr2Patt[sWords[i]] = pattWords[i]
        else
            if hashStr2Patt[sWords[i]] != pattWords[i]
                return false
    return true
```
