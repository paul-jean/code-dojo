// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gulpIgnore = require('gulp-ignore');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// https://viget.com/extend/gulp-browserify-starter-faq
gulp.task('browserify', function() {
    return browserify(['fib.js', 'print-fib.js'])
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
    gulp.watch('*.js', ['lint', 'browserify']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);
