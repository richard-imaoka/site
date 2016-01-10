var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var cp          = require('child_process');
var harp        = require('harp');

gulp.task('serve', function (done) {
  cp.exec('harp server _src')
  //harp.server('_src', {
  //  port: 9000
  //});
});

gulp.task('build', function (done) {
  cp.exec('harp compile _src dist')
});

gulp.task('watch', function () {
  gulp.watch("_src/**/*.{jade,styl,haml,sass,scss,less,md,ejs}",  ['build']);
  gulp.watch("_src/**/*.{jade,styl,haml,sass,scss,less,md,ejs}",  browserSync.reload);
});

gulp.task('browser-sync', function() {
  //Start the Browsersync service. This will launch a server.
  browserSync.init({
      proxy: "localhost:9000"
  });
});

gulp.task('default', ['serve', 'browser-sync', 'watch']);