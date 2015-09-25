fib = require('./fib.js');
$ = require('jquery');

var intervalID;

var execute = function() {
    var result_div = $('#result');
    var n = 0;
    var run_nth = function() {
        var val, output = '', time_before, time_after, time_diff;
        time_before = new Date();
        val = fib.fib(n);
        time_after = new Date();
        time_diff = time_after - time_before;
        output += '<p> n = ' + n + ',  f(' + n + ') = ' + val + ' (' + time_diff + ' ms) </p>';
        result_div.append('<div class="nth_result">' + output + '</div>');
        output = '';
        n++;
    };
    intervalID = setInterval(run_nth, 500);
};

var stopExecuting = function() {
    if (intervalID)
        clearInterval(intervalID);
};

window.onload = function () {
    var go = $('#go')[0];
    var stop = $('#stop')[0];
    go.onclick = execute;
    stop.onclick = stopExecuting;
};

