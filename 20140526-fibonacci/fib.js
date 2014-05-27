fibCalls = {};
var fib = function(n) {
  if (fibCalls[n]) {
    fibCalls[n] += 1;
  } else {
    fibCalls[n] = 1;
  }
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
};

var util = require('util');
for (var n = 1; n <= 10; n ++) {
  console.log(util.format("%d\t%d", n, fib(n)));
}
console.log(fibCalls);
