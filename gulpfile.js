const gulp = require('gulp');
const babel = require('gulp-babel');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

// Execute Mocha/Chai tests and process code coverage recording using Istanbul.
gulp.task('test', () =>
  gulp.src('./src/*.js')
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src('./test/*.js', { read: false })
        .pipe(mocha())//{ reporter: 'spec' }))
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['lcov', 'text-summary'],
          reportOpts: {
            dir: './coverage'
          }
        }));
    })
);

// Watch files for changes
gulp.task('tdd', () => {
  gulp.watch(['./src/*.js', './test/*.js'], ['test']);
});


//transpile
gulp.task('default', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('lib'));
});
