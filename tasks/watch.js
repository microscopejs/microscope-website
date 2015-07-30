var gulp = require('gulp');

// watch files and run appropriate tasks
gulp.task('watch', function () {
    gulp.watch(['./assets/**'], ['assets']);
    gulp.watch(['./src/**/*.js'], ['browserify']);
    gulp.watch(['./src/**/*.html'], ['templates']);
    gulp.watch(['./markdown/**/*.md'], ['markdown']);
});