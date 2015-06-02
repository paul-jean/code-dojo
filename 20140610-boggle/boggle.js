/*
 * Dictionary: tell whether a set of moves produces a valid word.
 * Board: 5x5, letters on each square
 * Goal: Produce a set of moves that find the words on the board
 *
 */

var dictionary = {"hello": true, "my": true, "name": true, "is": true, "should": true, "not": true, "contain": true, "proper": true, "syntax": true};

var board = [
  ["h", "y", "l", "l", "o"],
  ["s", "e", "n", "b", "c"],
  ["n", "o", "t", "n", "o"],
  ["a", "z", "x", "i", "n"],
  ["m", "y", "t", "a", "t"]
];

var boggle = function(word, x, y, found, used) {
  if (word in dictionary) {
    found.push(word);
  }
  // stopping condition
  if (used.length == board.length * board.length) {
    return found;
  }
  used.push([x, y]);
  var letter = board[x][y];
  var next = [];
  var isUsed = false;
  for (var i = x - 1; i <= x + 1; i ++) {
    for (var j = y - 1; j <= y + 1; j ++) {
      // is this an invalid board position?
      if (i <  0 || i >= board.length || j < 0 || j >= board.length) {
        continue;
      }
      // has this board position been used already?
      for (var k = 0; k < used.length; k ++) {
        if (used[k] == [j, i]) { // j -> x, i -> y
          isUsed = true;
        }
      }
      if (isUsed) continue;
      boggle(word + letter, i, j, found);
    }
  }
};

var found = boggle("", 0, 0, [], []);

for (var i = 0; i < found.length; i ++) {
  console.log(found[i]);
}
