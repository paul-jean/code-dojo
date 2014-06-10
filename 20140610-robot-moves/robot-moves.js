var countMoves = function(x, y, X, Y) {
  if (x > X || y > Y) return 0;
  if (x == X && y == Y) return 1;
  return countMoves(x + 1, y, X, Y) + countMoves(x, y + 1, X, Y);
};

for (var i = 0; i < 10; i ++) {
  for (var j = 0; j < 10; j ++) {
    console.log("(X, Y) = (" + i + ", " + j + "), moves = " + countMoves(0, 0, i, j) );
  }
}
