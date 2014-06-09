var countHops = function(n, m) {
  if (m == n) return 1;
  if (m > n) return 0;
  if (m < n) return countHops(n, m + 1) + countHops(n, m + 2) + countHops(n, m + 3);
};

for (var n = 1; n <= 6; n ++) {
  var c = countHops(n, 1);
  console.log("Hop sequences for " + n + " steps: " + c);
}
