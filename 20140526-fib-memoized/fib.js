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

var fibMem = function(n) {
  if (typeof numCalls[n] === 'number') {
    numCalls[n] += 1;
  } else {
    numCalls[n] = 0;
  }
  console.log(indent(numCalls[n]) + " " + n);
  if (typeof fibMemo[n] === 'object') {
    return fibMemo[n].getValue();
  } else {
    fibMemo[n] = closureMemo(fibMem(n - 2) + fibMem(n - 1));
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
console.log("Memoized fib ...");
for (var n = 1; n <= 10; n ++) {
  console.log(util.format("%d\t%d", n, fibMem(n)));
}
console.log(numCalls);

numCalls = {};

console.log("Regular fib ...");
for (var n = 1; n <= 10; n ++) {
  console.log(util.format("%d\t%d", n, fib(n)));
}
console.log(numCalls);

