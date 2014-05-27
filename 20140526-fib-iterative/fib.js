var fib = function(n) {
  var fs = [0, 1], fNew;
  if (n < 3) {
    return fs[n - 1];
  }
  for (var i = 0; i < n - 2; i ++) {
    fNew = fs[0] + fs[1];
    fs.push(fNew);
    fs.shift();
  }
  return fs[fs.length - 1];
};

var util = require('util');
for (var n = 1; n <= 10; n ++) {
  console.log(util.format("%d\t%d", n, fib(n)));
}
