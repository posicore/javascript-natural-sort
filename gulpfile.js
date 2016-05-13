const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

// Execute Mocha/Chai tests and process code coverage recording using Istanbul.
gulp.task('test', () =>
  gulp.src('./js/*.js')
    .pipe(istanbul({ includeUntested: true }))
    .on('finish', () => {
      gulp.src('./test/test.js', { read: false })
        .pipe(mocha({ reporter: 'spec' }))
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['lcov'],
          reportOpts: {
            dir: './coverage'
          }
        }));
    })
);

// Watch files for changes
gulp.task('tdd', () => {
  gulp.watch(['./js/*.js', './test/*.js'], ['test']);
});
