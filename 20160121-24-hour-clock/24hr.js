// hacker rank boilerplate:
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

// end hacker rank boilerplate

function main() {
    var time = readLine();
    var hhmmssap = time.split(":");
    var hh = parseInt(hhmmssap[0]);
    var mm = parseInt(hhmmssap[1]);
    var ssap = hhmmssap[2];    
    var ss = parseInt(ssap.slice(0,2));
    var ap = ssap.slice(2);
    var hh24;
    if (ap === "AM") {
        if (hh == 12) { 
            hh24 = hh - 12;            
        } else {
            hh24 = hh;
        }
    } else {
        if (hh == 12) { 
            hh24 = hh; 
        } else {
            hh24 = hh + 12;
        }
    }
    var time24 = [hh24, mm, ss];
    var time24arr = time24.map(function(num) {
        var numStr = num.toString();
        if (num < 10) numStr = '0' + numStr;
        return numStr;
    });
    var time24str = time24arr.join(':');
    process.stdout.write(time24str + '\n');
}
