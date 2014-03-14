var len = 20;
if (process.argv.length > 2) {
  len = parseInt(process.argv[2], 10);
}

var a = [];
for (var i = 0; i < len; i++) {
  a.push(Math.floor(Math.random()*100) + 1);
}

var swap = function(a, i, j) {
  var temp = a[j];
  a[j] = a[i];
  a[i] = temp;
};

var insertionSort = function(a) {
  for (var i = 1; i < a.length; i++) {
    var j = i;
    while (j > 0 && a[j] < a[j-1]) {
      swap(a, j, j-1);
      j--;
    }
  }
  return a;
};

console.log("Original list:");
console.log(a);
console.log("Sorted list:");
console.log(insertionSort(a));
