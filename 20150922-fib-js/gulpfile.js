// Include gulp
var gulp = require('gulp'); 

// plugins
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var gulpIgnore = require('gulp-ignore');

var paths = {
    js: ['src/js/fib.js', 'src/js/print-fib.js'],
    build: 'build/'
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src(paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

// https://viget.com/extend/gulp-browserify-starter-faq
gulp.task('build', function() {
    return browserify(paths.js)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.build));
});

/*
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
*/

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(paths.js, ['lint', 'build']);
});

// Default Task
gulp.task('default', ['lint', 'build', 'watch']);
