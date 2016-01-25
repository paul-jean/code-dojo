Your friend saved duplicates of your files in random places throughout the file
system. And they changed the name to embarrassing names.

Write a function that returns a list of tuples:

```
[
    [dup-file, orig-file]
    ...
]
```

eg

```
[you-suck.txt, file.txt]
```

And the function won't delete the file itself, because we want to check the
files manually before we delete them.

```
dir     file        dup-dir     dup-file
/home   file.txt    /var/log/   you-suck.txt
```

- initialize an array of duplicate file tuples
- recurse through the file tree
- initialize a hash table: key = file checksum, value = file name
- for each file:
    - take a checksum (hash) of the file contents
    - if the hash table contains the checksum key, found a duplicate file
        - add the orig file and dup file names to the array of dups
    - otherwise add the checksum with the file name to the hash table

```
dir         file            hash        map                 dups
/home       file.txt        h0          {}                  []
                                        {h0: file.txt}
...
/var/log    you-suck.txt    h0                              [[you-suck.txt, file.txt]]
```















