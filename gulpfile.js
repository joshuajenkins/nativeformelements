var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() {
  return gulp.src('css/*.scss')
  .pipe(sass())
  .pipe(minifyCSS({'keepSpecialComments': 0}))
  .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);