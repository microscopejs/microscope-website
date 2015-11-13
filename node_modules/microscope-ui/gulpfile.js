var gulp = require('gulp');
require('./tasks/serve');
require('./tasks/less');
require('./tasks/build');

gulp.task('build', ['less', 'concat', 'assets']);
gulp.task('serve', ['build', 'watch', 'connect']);