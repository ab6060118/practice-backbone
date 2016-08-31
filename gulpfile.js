var gulp = require('gulp');
var gutil = require('gulp-util')
var concat = require('gulp-concat');
var path = require('path');
var liveReload = require('gulp-livereload');

const PATH = {
  JS: {
    SRC: path.join(__dirname, 'app/js'),
    DEST: path.join(__dirname, 'public/js'),
    OUTPUT: 'bundle.js'
  }
};

gulp.task('buildJS', function(){
  var start = new Date().getTime();
  gulp.src(['./app/js/model.js', './app/js/collection.js', './app/js/view.js', './app/js/itemView.js'])
    .pipe(concat(PATH.JS.OUTPUT))
    .pipe(gulp.dest(PATH.JS.DEST))
    .on('end', function() {
      var elapsed_time = new Date().getTime() - start;
      gutil.log(gutil.colors.cyan('build'), 'cost', gutil.colors.magenta(elapsed_time, 'ms'));
    });
});

gulp.task('watch', function(){
  liveReload.listen();
  gulp.watch(['public/index.html'], function(event) {
    liveReload.changed(event.path);
  });
  gulp.watch([path.join(PATH.JS.DEST, PATH.JS.OUTPUT)], function(event) {
    liveReload.changed(event.path);
  });
  gulp.watch([PATH.JS.SRC + '/*.js'], ['buildJS'])
    .on('change', function(event) {
    gutil.log(gutil.colors.magenta(event.path), event.type)
  })
});

gulp.task('default', ['watch']);
