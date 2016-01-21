process.stdin.setEncoding('ascii');

var input = '';

process.stdin.on('data', function(data) {
    input += data;
});

process.stdin.on('end', function() {
    var numStrings = input.split('\n');
    nums = [];
    process.stdout.write('input nums: \n');
    numStrings.forEach(function(numStr) {
        if (numStr.match(/[0-9]+/)) {
            process.stdout.write(numStr + '\n');
            var num = parseInt(numStr);
            nums.push(num);
        }
    });
    var sum = 0;
    nums.map(function(e) {sum += e;});
    process.stdout.write('sum = ');
    process.stdout.write(sum.toString() + '\n');
});

