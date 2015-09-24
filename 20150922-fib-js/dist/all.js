/**
 * Compute the nth fibonacci number.
 * @param {Number} n - the index of fibonacci number to compute
 * @returns {Number | null} - the nth fibonacci number, or null if n < 0
 *
 */
exports.fib = function(n) {
    if (n < 0) return null;
    if (n === 0) return 1;
    if (n == 1) return 1;
    return exports.fib(n-1) + exports.fib(n-2);
};


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
};

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gulpIgnore = require('gulp-ignore');
var browswerify = require('browserify');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
    return browserify('fib.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

var condition = './gulpfile.js';
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['./*.js'])
        .pipe(gulpIgnore.exclude(condition))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('*.js', ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);

fib = require('./fib.js');

function execute() {
    var div = $('#result');
    var val = fib.fib_mem(10);
    div.textContent = val;
}

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
            success = correct ? true : false;
    }
    var pass_fail = success ? 'PASSED' : 'FAILED';
    console.log('tests ' + pass_fail);
};

// run tests
console.log('test: fib');
test_fib(fib.fib);

console.log();
console.log('test: fib_mem');
test_fib(fib.fib_mem);

