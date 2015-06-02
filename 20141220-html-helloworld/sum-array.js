var sumArray = function (myArray) {
    var sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return sum;
}

var foo = [4, 35, 79, 63, 6, 8, 29];

var sum = sumArray(foo);

console.log(sum);