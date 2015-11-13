var gulp        = require('gulp');
var concat = require('gulp-concat');

// concat files
gulp.task('concat', function() {
    return gulp.src(['./bower_components/bootstrap/dist/js/bootstrap.min.js', './bower_components/kendo-ui-core/js/kendo.ui.core.min.js'])
        .pipe(concat('microscope.ui.js'))
        .pipe(gulp.dest('./dist/js'));
});

// watch files and run appropriate tasks
gulp.task('watch', function () {
    gulp.watch(['./styles/**'], ['less']);
});

// copy assets
gulp.task('assets', function(){
    gulp.src('./bower_components/bootstrap/fonts/**')
        .pipe(gulp.dest('./dist/fonts'));
        
    gulp.src('./bower_components/kendo-ui-core/js/cultures/**')
        .pipe(gulp.dest('./dist/js/cultures'));
        
    gulp.src('./bower_components/kendo-ui-core/styles/Bootstrap/**')
        .pipe(gulp.dest('./dist/css/Bootstrap'));
});