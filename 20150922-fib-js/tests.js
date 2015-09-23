fib = require('./fib.js');
sprintf = require('sprintf-js').sprintf;

/**
 * Test the given fibonacci function.
 * Tests if fib_fn(n) is correct for several values of n, and prints the result
 * of each test. Prints a success/fail message when all tests are completed to
 * indicate if all tests passed (PASSED) or any tests failed (FAILED).
 * @param {Object} fib_fn - fibonacci function to test.
 * @returns {null}
 */
test_fib = function (fib_fn) {
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
    var n, answer_n, fib_n, correct;
    for (n in answers) {
        if (!answers.hasOwnProperty(n)) continue;
        n = parseInt(n);
        answer_n = answers[n];
        fib_n = fib_fn(n);
        correct = fib_n === answer_n ? true : false;
        console.log(
            sprintf(
                'n = %1$d, fib(%1$d) = %2$s, answer: %3$s, correct? %4$s',
                n, fib_n, answer_n, correct
            )
        );
        if (success)
            correct ? null : success = false;
    }
    var pass_fail = success ? 'PASSED' : 'FAILED';
    console.log('tests ' + pass_fail);
}

// run tests
console.log('test: fib');
test_fib(fib.fib);

console.log();
console.log('test: fib_mem');
test_fib(fib.fib_mem);

