
var countMoves = function(x, y, X, Y, notAllowed) {
  if (x > X || y > Y) return 0;
  for (var i = 0; i < notAllowed.length; i ++) {
    if (x == notAllowed[i][0] && y == notAllowed[i][1]) return 0;
  }
  if (x == X && y == Y) return 1;
  return countMoves(x + 1, y, X, Y, notAllowed) + countMoves(x, y + 1, X, Y, notAllowed);
};

for (var i = 0; i < 10; i ++) {
  for (var j = 0; j < 10; j ++) {
    var offLimits = [];
    console.log("(X, Y) = (" + i + ", " + j + "), moves = " + countMoves(0, 0, i, j, offLimits) );
    offLimits = [ [Math.floor(i/2), Math.floor(j/2)] ];
    console.log("(X, Y) = (" + i + ", " + j + "), moves = " + countMoves(0, 0, i, j, offLimits) + " with (x, y) = (" + offLimits[0][0] + ", " + offLimits[0][1] + ") off limits");
  }
}

