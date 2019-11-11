const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  minify = require('gulp-clean-css'),
  merge = require('merge-stream')

gulp.task('style', () => {
  
  const scssStream = gulp.src('../src/styles/global.scss')
    .pipe(sass().on('error', console.error.bind(console)))

  const cssStream = gulp.src('../thylakoid/style.css')

  const mergeStreams = merge(scssStream, cssStream)
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('../thylakoid'))

  return mergeStreams
})