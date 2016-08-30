var gulp = require('gulp');
var liveReload = require('gulp-livereload');

gulp.task('watch', function(){
  liveReload.listen();
  gulp.watch(['public/index.html'], function(event) {
    liveReload.changed(event.path);
  });
  gulp.watch(['public/js/*.js'], function(event) {
    liveReload.changed(event.path);
  });
});

gulp.task('default', ['watch']);
