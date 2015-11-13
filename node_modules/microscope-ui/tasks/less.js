var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  gulp.src('./styles/microscope.ui.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});