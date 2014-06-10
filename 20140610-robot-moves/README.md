(CTCI 9.2)
Imagine a robot sitting on the upper left corner of an X by Y grid.
The robot can only move in two directions: right and down. How many
possible paths are there for the robot to go from (0,0) to (X, Y)?
FOLLOW UP:
Imagine certain spots are "off limits", such that the robot cannot
step on them. Design an algorithm to find a path for the robot from the
top left to the bottom right.

``` bash
[rule146@rule146: 20140610-robot-moves]$ node robot-moves.js
(X, Y) = (0, 0), moves = 1
(X, Y) = (0, 1), moves = 1
(X, Y) = (0, 2), moves = 1
(X, Y) = (0, 3), moves = 1
(X, Y) = (0, 4), moves = 1
(X, Y) = (0, 5), moves = 1
(X, Y) = (0, 6), moves = 1
(X, Y) = (0, 7), moves = 1
(X, Y) = (0, 8), moves = 1
(X, Y) = (0, 9), moves = 1
(X, Y) = (1, 0), moves = 1
(X, Y) = (1, 1), moves = 2
(X, Y) = (1, 2), moves = 3
(X, Y) = (1, 3), moves = 4
(X, Y) = (1, 4), moves = 5
(X, Y) = (1, 5), moves = 6
(X, Y) = (1, 6), moves = 7
(X, Y) = (1, 7), moves = 8
(X, Y) = (1, 8), moves = 9
(X, Y) = (1, 9), moves = 10
(X, Y) = (2, 0), moves = 1
(X, Y) = (2, 1), moves = 3
(X, Y) = (2, 2), moves = 6
(X, Y) = (2, 3), moves = 10
(X, Y) = (2, 4), moves = 15
(X, Y) = (2, 5), moves = 21
(X, Y) = (2, 6), moves = 28
(X, Y) = (2, 7), moves = 36
(X, Y) = (2, 8), moves = 45
(X, Y) = (2, 9), moves = 55
(X, Y) = (3, 0), moves = 1
(X, Y) = (3, 1), moves = 4
(X, Y) = (3, 2), moves = 10
(X, Y) = (3, 3), moves = 20
(X, Y) = (3, 4), moves = 35
(X, Y) = (3, 5), moves = 56
(X, Y) = (3, 6), moves = 84
(X, Y) = (3, 7), moves = 120
(X, Y) = (3, 8), moves = 165
(X, Y) = (3, 9), moves = 220
(X, Y) = (4, 0), moves = 1
(X, Y) = (4, 1), moves = 5
(X, Y) = (4, 2), moves = 15
(X, Y) = (4, 3), moves = 35
(X, Y) = (4, 4), moves = 70
(X, Y) = (4, 5), moves = 126
(X, Y) = (4, 6), moves = 210
(X, Y) = (4, 7), moves = 330
(X, Y) = (4, 8), moves = 495
(X, Y) = (4, 9), moves = 715
(X, Y) = (5, 0), moves = 1
(X, Y) = (5, 1), moves = 6
(X, Y) = (5, 2), moves = 21
(X, Y) = (5, 3), moves = 56
(X, Y) = (5, 4), moves = 126
(X, Y) = (5, 5), moves = 252
(X, Y) = (5, 6), moves = 462
(X, Y) = (5, 7), moves = 792
(X, Y) = (5, 8), moves = 1287
(X, Y) = (5, 9), moves = 2002
(X, Y) = (6, 0), moves = 1
(X, Y) = (6, 1), moves = 7
(X, Y) = (6, 2), moves = 28
(X, Y) = (6, 3), moves = 84
(X, Y) = (6, 4), moves = 210
(X, Y) = (6, 5), moves = 462
(X, Y) = (6, 6), moves = 924
(X, Y) = (6, 7), moves = 1716
(X, Y) = (6, 8), moves = 3003
(X, Y) = (6, 9), moves = 5005
(X, Y) = (7, 0), moves = 1
(X, Y) = (7, 1), moves = 8
(X, Y) = (7, 2), moves = 36
(X, Y) = (7, 3), moves = 120
(X, Y) = (7, 4), moves = 330
(X, Y) = (7, 5), moves = 792
(X, Y) = (7, 6), moves = 1716
(X, Y) = (7, 7), moves = 3432
(X, Y) = (7, 8), moves = 6435
(X, Y) = (7, 9), moves = 11440
(X, Y) = (8, 0), moves = 1
(X, Y) = (8, 1), moves = 9
(X, Y) = (8, 2), moves = 45
(X, Y) = (8, 3), moves = 165
(X, Y) = (8, 4), moves = 495
(X, Y) = (8, 5), moves = 1287
(X, Y) = (8, 6), moves = 3003
(X, Y) = (8, 7), moves = 6435
(X, Y) = (8, 8), moves = 12870
(X, Y) = (8, 9), moves = 24310
(X, Y) = (9, 0), moves = 1
(X, Y) = (9, 1), moves = 10
(X, Y) = (9, 2), moves = 55
(X, Y) = (9, 3), moves = 220
(X, Y) = (9, 4), moves = 715
(X, Y) = (9, 5), moves = 2002
(X, Y) = (9, 6), moves = 5005
(X, Y) = (9, 7), moves = 11440
(X, Y) = (9, 8), moves = 24310
(X, Y) = (9, 9), moves = 48620
```
