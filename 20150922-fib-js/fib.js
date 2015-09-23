/**
 * Compute the nth fibonacci number.
 * @param {Number} n - the index of fibonacci number to compute
 * @returns {Number | null} - the nth fibonacci number, or null if n < 0
 *
 */
var fib = function(n) {
    if (n < 0) return null;
    if (n == 0) return 1;
    if (n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

/**
 * Test the given fibonacci function.
 * Tests if fib_fn(n) is correct for several values of n, and prints the result
 * of each test. Prints a success/fail message when all tests are completed to
 * indicate if all tests passed (PASSED) or any tests failed (FAILED).
 * @param {Object} fib_fn - fibonacci function to test.
 * @returns {null}
 */
var test_fib = function (fib_fn) {
    var answers = {
        0: 1,
        1: 1,
        2: 2,
        3: 3,
        4: 5,
        20: 10946,
        40: 165580141,
        '-1': null
    };
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
/**
 * Compute the nth fibonacci number, using memoization to prevent stack
 * overflow.
 * @param {Number} n - the index of fibonacci number to compute
 * @returns {Number | null} - the nth fibonacci number, or null if n < 0
 *
 */
var fib_mem = function(n) {
    if (n < 0) return null;
    if (!mem[n]) {
        mem[n] = fib_mem(n - 1) + fib_mem(n - 2);
    }
    return mem[n];
}

console.log();
console.log('test: fib_mem');
test_fib(fib_mem);
