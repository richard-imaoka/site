var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cp          = require('child_process');
var harp        = require('harp');

gulp.task('serve', function (done) {
  cp.exec('harp server _src')
});

gulp.task('build', function (done) {
  cp.exec('harp compile _src dist')
});

gulp.task('watch', function () {
  gulp.watch("_src/**/*.{jade,styl,haml,sass,scss,less,md,ejs,json,html,css,js}", browserSync.reload);
  //gulp.watch("_src/**/*.{jade,styl,haml,sass,scss,less,md,ejs,json}", ['build']);
});

gulp.task('browser-sync', function() {
  //Start the Browsersync service. This will launch a server.
  browserSync.init({
      proxy: "localhost:9000"
  });
});

gulp.task('default', ['serve', 'browser-sync', 'watch']);