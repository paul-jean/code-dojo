var fib = function(n) {
  var fs = [0, 1, 2],
      fNew;
  if (n === 1) return 0;
  if (n === 2) return 1;
  for (var i = 0; i < n - 2; i ++) {
    fNew = fs[1] + fs[2];
    fs = [fs[1], fs[2], fNew];
  }
  return fs[fs.length - 1];
}
