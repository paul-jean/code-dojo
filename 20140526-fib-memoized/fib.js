var fibMemo = {1:0, 2:1};
var fibCalls = {};
var fib = function(n) {
  if (!fibCalls[n]) {
    fibCalls[n] = 1;
  } else {
    fibCalls[n] += 1;
  }
  if (typeof fibMemo[n] === 'number') {
    //    console.log("memo " + n);
    return fibMemo[n];
  } else {
    fibMemo[n] = fib(n - 2) + fib(n - 1);
    return fibMemo[n];
  }
};

//console.log(fib(1));

var util = require('util');
//console.log(util.format("%d\t%d", 1, fib(1)));
for (var n = 1; n <= 10; n ++) {
  console.log(util.format("%d\t%d", n, fib(n)));
}
console.log(fibCalls);
