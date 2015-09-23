/**
 * Compute the nth fibonacci number.
 * @param {Number} n - the index of fibonacci number to compute
 * @returns {Number | null} - the nth fibonacci number, or null if n < 0
 *
 */
exports.fib = function(n) {
    if (n < 0) return null;
    if (n == 0) return 1;
    if (n == 1) return 1;
    return exports.fib(n-1) + exports.fib(n-2);
}


var mem = {0:1, 1:1};
/**
 * Compute the nth fibonacci number, using memoization to prevent stack
 * overflow.
 * @param {Number} n - the index of fibonacci number to compute
 * @returns {Number | null} - the nth fibonacci number, or null if n < 0
 *
 */
exports.fib_mem = function(n) {
    if (n < 0) return null;
    if (!mem[n]) {
        mem[n] = exports.fib_mem(n - 1) + exports.fib_mem(n - 2);
    }
    return mem[n];
}
