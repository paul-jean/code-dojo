CTCI 4.4

Given a binary tree, design an algorithm which creates a linked list of all the
nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked
lists).

```bash
[rule146@rule146: 20140529-tree-to-lists]$ node tree-list.js
The binary tree looks like:

----0LLLL
---0LLL
----0LLLR
--0LL
----0LLRL
---0LLR
----0LLRR
-0L
----0LRLL
---0LRL
----0LRLR
--0LR
----0LRRL
---0LRR
----0LRRR
0
----0RLLL
---0RLL
----0RLLR
--0RL
----0RLRL
---0RLR
----0RLRR
-0R
----0RRLL
---0RRL
----0RRLR
--0RR
----0RRRL
---0RRR
----0RRRR


The corresponding linked lists, one per tree level:

level 0:
0:
level 1:
0R:0L:
level 2:
0RR:0RL:0LR:0LL:
level 3:
0RRR:0RRL:0RLR:0RLL:0LRR:0LRL:0LLR:0LLL:
level 4:
0RRRR:0RRRL:0RRLR:0RRLL:0RLRR:0RLRL:0RLLR:0RLLL:0LRRR:0LRRL:0LRLR:0LRLL:0LLRR:0LLRL:0LLLR:0LLLL:
```
