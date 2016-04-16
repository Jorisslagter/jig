var gulp = require('gulp');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var beutify = require('js-beautify');
var file = require('gulp-file');

gulp.task('data', require('./js/jig/gulp/data.js'));

gulp.task('default', function() {
  gulp.src('.').pipe(webserver({
    port: 8000
  }));
});
