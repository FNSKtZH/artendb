var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('../gulp-tasks', {recurse: true});

gulp.task('default', function() {
    gulp.start('dev_build_style', 'dev_build_src');
});