fib = require('./fib.js');
$ = require('jquery');

var intervalID;
var n = 0;
var max_time_diff = 0, max_time_diff_mem = 0;
var max_time_allowed = 3000; // 3 seconds

var execute = function() {
    var result_div = $('#result');
    var run_nth = function() {
        var val, output = '', time_before, time_after, time_diff;
        // compute fib(n) using straight recursion
        if (max_time_diff < max_time_allowed) {
            output = '';
            time_before = new Date();
            val = fib.fib(n);
            time_after = new Date();
            time_diff = time_after - time_before;
            max_time_diff = Math.max(time_diff, max_time_diff);
            output += 'n = ' + n + ',  f(' + n + ') = ' + val + ' (' + time_diff + ' ms)';
            result_div.append('<div class="nth_result">' + output + '</div>');
        } else {
            result_div.append('<div class="nth_result timeout">' + 'TIMEOUT' + '</div>');
        }

        // compute fib(n) using recursion with memoization:
        if (max_time_diff_mem < max_time_allowed) {
            output = '';
            time_before = new Date();
            val = fib.fib_mem(n);
            time_after = new Date();
            time_diff = time_after - time_before;
            max_time_diff_mem = Math.max(time_diff, max_time_diff_mem);
            output += 'n = ' + n + ',  f(' + n + ') = ' + val + ' (' + time_diff + ' ms)';
            result_div.append('<div class="nth_result_mem">' + output + '</div>');
        } else {
            result_div.append('<div class="nth_result_mem timeout">' + 'TIMEOUT' + '</div>');
        }

        if (max_time_diff >= max_time_allowed && max_time_diff_mem >= max_time_allowed) {
            clearInterval(intervalID);
        }

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

