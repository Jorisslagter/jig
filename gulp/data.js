var gulp = require('gulp');
var file = require('gulp-file');

module.exports = function() {
  watch('data/**/*').on('data', function(data) {
    var list = {};

    gulp.src('data/**/*').on('data', function(data) {
      if (!data.stat.isDirectory()) {
        var relPath = data.path.replace(data.base, "");
        var fileID = relPath.split('/').join('_').split('.').slice(0, -1).join("");
        list[fileID] = 'data/' + relPath;
      }
    }).on('end', function() {
      file('data.js', beutify('define(function(){ return ' + JSON.stringify(list) + '; });')).pipe(gulp.dest('js'));
      console.log('[%s] data.js updated', new Date());
    });
  });
};
