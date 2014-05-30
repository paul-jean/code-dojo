(CTCI 2.1)

Remove duplicates from an unsorted linked list.

## Tests

Run some tests that create linked lists with duplicates, delete the duplicates,
and print the resulting lists back:

```bash
[rule146@rule146: 20140530-ll-delete-dups]$ javac DeleteLinkedListDuplicates.java
Note: DeleteLinkedListDuplicates.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
[rule146@rule146: 20140530-ll-delete-dups]$ java DeleteLinkedListDuplicates
List elements:
0
1
2
1
Deleting duplicates ...
Found duplicate: 1
New list:
0
1
2
List elements:
0
1
2
1
4
Deleting duplicates ...
Found duplicate: 1
New list:
0
1
2
4
```
