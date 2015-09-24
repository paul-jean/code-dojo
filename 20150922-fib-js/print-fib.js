fib = require('./fib.js');
$ = require('jquery');

var execute = function() {
    var div = $('#result')[0];
    console.log(div);
    var val = fib.fib_mem(10);
    console.log(val);
    div.textContent = val;
}

window.onload = function () {
    var go = $('#go-button')[0];
    go.onclick = execute;
}

