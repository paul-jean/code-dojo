var len = 20;
if (process.argv.length > 2) {
  len = parseInt(process.argv[2], 10);
}
var a = [];
for (var i = 0; i < len; i++) a.push(Math.floor(Math.random()*100) + 1);

var mergeSort = function(a) {
  var len = a.length;
  if (len <= 1) return a;
  var mid = Math.floor(len/2);
  var aLeft = [], aRight = [];
  for (var i = 0; i < mid; i++) aLeft.push(a[i]);
  for (i = mid; i < len; i++) aRight.push(a[i]);
  return merge(mergeSort(aLeft), mergeSort(aRight));
};

var merge = function(left, right) {
  if (left.length === 0) return right;
  if (right.length === 0) return left;
  var i = 0, j = 0, m = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) m.push(left[i++]);
    else m.push(right[j++]);
  }
  while (i < left.length) m.push(left[i++]);
  while (j < right.length) m.push(right[j++]);
  return m;
};

console.log("Original list:");
console.log(a);
console.log("Sorted list:");
console.log(mergeSort(a));
