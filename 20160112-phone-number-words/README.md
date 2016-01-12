# Generate all possible words from a phone number

Given a 7-digit phone number, return a list of all possible words that can be
formed from the number, using the letters on the digit buttons.

The digits 1 and 0 will not appear in the number.

# algorithm

- take a 3-digit number for example
- 'cat' = 228

```
228 => [ ..., 'cat', ...]
```

```
'228'   letters     words
 ^      a b c       ['a', 'b', 'c']
  ^     a b c       [
                        ['aa', 'ab', 'ac'],
                        ['ba', 'bb', 'bc'],
                        ['ca', 'cb', 'cc']
                    ]
   ^    t u v       [
                        [
                            ['aat', 'aau', 'aav'],
                            ['abt', 'abu', 'abv'],
                            ['act', 'acu', 'acv'],
                        ]
                        ...
                        [
                            ['cat', 'cau', 'cav'],
                            ...
                        ]
                    ]
=> [ ..., 'act', ..., 'cat', ...]
```

- words have to be the same length as the digit sequence
- therefore we only check for words after all digits have been used up

- could use a dictionary to stop once a prefix is found that cannot be the start of a word
- for simplicity, don't cull the words in this way

```
'228'

2: [a, b, c]                            foundWords
a                               'a'
    2: [a, b, c]
    a                           'aa'
        8: [t, u, v]
        t                       'aat
        u                       'aau'
        v                       'aav'
    b                           'ab'
        8: [t, u, v]
        t                       'abt'
        u                       'abu'
        v                       'abv'
    c
        8: [t, u, v]
        t                       'act'   ['act']
        u                       'acu'
        v                       'acv'
b
    2: [a, b, c]
    a
        ...
    b
        ...
    c
        ...
c
    2: [a, b, c]
    a
        8: [t, u, v]
        t                       'cat'   ['act', 'cat']
        u
        v
    b
    c
```


```
function populateWords(digits, prefix, foundWords)
    if digits.length === 0
        if dictWord(prefix)
            foundWords.push(prefix)
    digit = digits[0]
    letters = digitLetters(digit) // eg ['a', 'b', 'c']
    for (letter of letters)
        newPrefix = prefix + letter
        findWords(digits[1..-1], newPrefix)

function findWords(digits)
    foundWords = []
    populateWords(digits, '', foundWords)
    return foundWords
```














