let gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch')
;

gulp.task('watch', function () {
   return watch('css/**/*.less', batch(function (events, done) {
       gulp.start('less', done);
   }));
});

gulp.task('less', function () {
    gulp.src('./bower_components/bootstrap/fonts/**/*.*').pipe(gulp.dest('./static/compiled/fonts'));
    gulp.src('./bower_components/nprogress/nprogress.css').pipe(gulp.dest('./static/compiled/css'));

    // Preprocess Style Guide-specific CSS
    gulp.src('./css/styleguide.less').pipe(less({paths: [path.join(__dirname, 'less', 'includes')]})).pipe(gulp.dest('./static/compiled/css'));
    gulp.src('./css/rf.less').pipe(less({paths: [path.join(__dirname, 'less', 'includes')]})).pipe(gulp.dest('./static/compiled/css'));

    return gulp.src('./css/theme.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./static/compiled/css'));
});