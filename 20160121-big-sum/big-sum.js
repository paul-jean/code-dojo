process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    var maxNumDigits = 0;
    arr.map(function(numStr) {
        if (numStr.length > maxNumDigits)
            maxNumDigits = numStr.length;
    });
    arr = arr.map(function(numStr) {
        // pad on the left with zeros
        while (numStr.length < maxNumDigits) numStr = '0' + numStr;
        // add a leading decimal point
        return '0.' + numStr;
    });
    arr = arr.map(Number);
    var sum = 0;
    arr.map(function(num) {sum += num;});
    var sumStr = sum.toString();
    // remove the leading decimal point from the sum
    sumStr = sumStr.replace(/0*\./, '');
    process.stdout.write(sumStr + '\n');
}
