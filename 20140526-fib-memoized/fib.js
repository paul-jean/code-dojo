var closureMemo = function (val) {
  var numCalls = 0;
  return {
    getValue: function() {numCalls++; return val;},
    getCalls: function() {
      return numCalls;
    }
  };
};

var fibMemo = {
  1: closureMemo(0),
  2: closureMemo(1)
};

var fib = function(n) {
  if (typeof fibMemo[n] === 'object') {
    console.log(n + ": " + fibMemo[n].getCalls());
    return fibMemo[n].getValue();
  } else {
    fibMemo[n] = closureMemo(fib(n - 2) + fib(n - 1));
    console.log(n + ": " + fibMemo[n].getCalls());
    return fibMemo[n].getValue();
  }
};

// console.log(fib(1));
// console.log(fibMemo[1].getValue());
// console.log(typeof fibMemo[1]);

var util = require('util');
for (var n = 1; n <= 10; n ++) {
  console.log(util.format("%d\t%d", n, fib(n)));
}
console.log(fibMemo);
