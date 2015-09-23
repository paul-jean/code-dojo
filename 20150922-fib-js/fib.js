/**
 * Compute the nth fibonacci number.
 * @param n: integer n=0,1,2,... to compute f(n)
 * @return the nth fibonacci number fib(n)
 *
 */
var fib = function(n) {
    if (n < 0) return null;
    if (n == 0) return 1;
    if (n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

// tests
//
answers = {
    0: 1,
    1: 1,
    2: 2,
    3: 3,
    4: 5,
    20: 10946,
    40: 165580141,
    '-1': null
};

var test_fib = function (fib_fn) {
    var success = true;
    for (var n in answers) {
        if (!answers.hasOwnProperty(n)) continue;
        n = parseInt(n);
        var answer_n = answers[n];
        var fib_n = fib_fn(n);
        var correct = fib_n === answer_n ? true : false;
        console.log('n = ' + n + ', fib(' + n + ') = ' + fib_n + ', answer: ' + answer_n + ', correct? ' + correct);
        if (success)
            correct ? null : success = false;
    }
    var pass_fail = success ? 'PASSED' : 'FAILED';
    console.log('tests ' + pass_fail);
}

console.log('test: fib');
test_fib(fib);

var mem = {0:1, 1:1};
var fib_mem = function(n) {
    if (n < 0) return null;
    if (!mem[n]) {
        mem[n] = fib_mem(n - 1) + fib_mem(n - 2);
    }
    return mem[n];
}

console.log('test: fib_mem');
test_fib(fib_mem);
