var fibMemo = {
  1: {getValue: function() {return 0;}},
  2: {getValue: function() {return 1;}}
};

var fib = function(n) {
  if (typeof fibMemo[n] === 'object') {
    return fibMemo[n].getValue();
  } else {
    fibMemo[n] = function(val) {
      return {
        getValue: function() { return val; }
      };
    }(fib(n - 2) + fib(n - 1));
    return fibMemo[n].getValue();
  }
};

console.log(fib(1));
// console.log(fibMemo[1].getValue());
// console.log(typeof fibMemo[1]);

var util = require('util');
for (var n = 1; n <= 10; n ++) {
  console.log(util.format("%d\t%d", n, fib(n)));
}
console.log(fibMemo);
