process.stdin.setEncoding('ascii');

var input = '';

process.stdin.on('data', function(data) {
    input += data;
});

process.stdin.on('end', function() {
    var numStrings = input.split('\n');
    nums = [];
    numStrings.forEach(function(numStr) {
        if (numStr.match(/[0-9]/)) {
            var num = parseInt(numStr);
            nums.push(num);
        }
    });
    var sum = 0;
    nums.map(function(e) {sum += e;});
    process.stdout.write('a + b = ');
    process.stdout.write(sum.toString() + '\n');
});

