var splice = function (array, start, numDelete) {
  var b = [];
  if (start < 0 || start >= array.length - 1)
    throw {name: 'BadStart', message: 'Start ' + start + ' not valid'};
  var leftChunkStart = 0;
  var leftChunkStop = start - 1;
  var rightChunkStart = start + numDelete;
  var rightChunkStop = array.length;
  if (numDelete < 0) throw {name: 'BadDelete', message: 'Cannot delete ' + numDelete + ' elements'};
  var deleted = array.slice(start, start + numDelete);
  var inserted = [];
  for (var i = 3; i < arguments.length; i++)
    inserted.push(arguments[i]);
  b = b.concat(array.slice(leftChunkStart, leftChunkStop + 1))
      .concat(inserted)
      .concat(array.slice(rightChunkStart, rightChunkStop + 1));
  return b;
}

var a = [1, 2, 3, 4, 5];
var r = splice(a, 1, 1, 'a');
console.log(a);
console.log(r);
