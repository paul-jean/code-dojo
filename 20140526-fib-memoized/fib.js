var closureMemo = function (val) {
  return {
    getValue: function() {return val;}
  };
};

var numCalls = {};

var fibMemo = {
  1: closureMemo(0),
  2: closureMemo(1)
};

var indent = function(n) {
  var dashes = "";
  for (var i = 0; i < n; i ++) {
    dashes += "-";
  }
  return dashes;
};

var fib_mem = function(n) {
  if (typeof numCalls[n] === 'number') {
    numCalls[n] += 1;
  } else {
    numCalls[n] = 1;
  }
  console.log(indent(numCalls[n]) + " " + n);
  if (typeof fibMemo[n] === 'object') {
    return fibMemo[n].getValue();
  } else {
    fibMemo[n] = closureMemo(fib_mem(n - 2) + fib_mem(n - 1));
    return fibMemo[n].getValue();
  }
};

var fib = function(n) {
  if (typeof numCalls[n] === 'number') {
    numCalls[n] += 1;
  } else {
    numCalls[n] = 0;
  }
  console.log(indent(numCalls[n]) + " " + n);
  if (n === 1) { return 0; }
  if (n === 2) { return 1; }
  return fib(n - 2) + fib(n - 1);
};

// console.log(fib(1));
// console.log(fibMemo[1].getValue());
// console.log(typeof fibMemo[1]);

var util = require('util');
console.log("Evaluating memoized fib ...");
console.log("fib_mem(10)");
// for (var n = 1; n <= 10; n ++) {
//   console.log(util.format("%d\t%d", n, fib_mem(n)));
// }
fib_mem(10);
console.log("n -> # of calls to fib_mem(n)");
console.log(numCalls);

numCalls = {};

console.log("\nEvaluating regular fib ...");
console.log("fib(10)");
// for (var n = 1; n <= 10; n ++) {
//   console.log(util.format("%d\t%d", n, fib(n)));
// }
fib(10);
console.log("n -> # of calls to fib(n)");
console.log(numCalls);

