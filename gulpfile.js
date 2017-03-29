var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

'use strict';
gulp.task('style', function () {
    return gulp
        .src('sass/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('css/style'));
});

// Watch task
gulp.task('style::watch', function () {
    gulp.watch('sass/**/*.scss', ['style']);

});

// gulp.task('hello', function() {
//   console.log('Hello Zell');
// });