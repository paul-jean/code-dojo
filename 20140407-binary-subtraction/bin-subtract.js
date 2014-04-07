var subtract = function (a, b) {
  return a + (~b + 1);
};

console.log(' 0 - 0 = ' + subtract(0, 0));
console.log(' 0 - 1 = ' + subtract(0, 1));
console.log(' 2 - 1 = ' + subtract(2, 1));
