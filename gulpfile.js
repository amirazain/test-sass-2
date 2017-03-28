var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('main', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('main',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});