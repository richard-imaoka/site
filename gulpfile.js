var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var harp        = require('harp')

gulp.task('serve', function (done) {
  harp.server('.', {
    port: 9000
  });
});

gulp.task('build', function (done) {
  cp.exec('harp compile _src dist')
});

gulp.task('watch', function () {
  gulp.watch("/**/*.{jade,styl,haml,sass,scss,less}", browserSync.reload)
});

gulp.task('browser-sync', function() {
  browserSync({
    proxy: "localhost:9000"
  });
});
gulp.task('default', ['serve', 'browser-sync', 'watch']);