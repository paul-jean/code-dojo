fib = require('./fib.js');
$ = require('jquery');

var execute = function() {
    var result_div = $('#result');
    var val, output = '', n, time_before, time_after, time_diff;
    for (n = 0; n < 40; n++) {
        time_before = new Date();
        val = fib.fib(n);
        time_after = new Date();
        time_diff = time_after - time_before;
        output += '<p> n = ' + n + ',  f(n) = ' + val + ' (' + time_diff + ' ms) </p>';
        result_div.append('<div class="nth_result">' + output + '</div>');
        output = '';
    }
};

window.onload = function () {
    var go = $('#go-button')[0];
    go.onclick = execute;
};

