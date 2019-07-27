const gulp = require('gulp');
const zip = require ('gulp-zip');
const pkg = require('./package.json');

gulp.task('css', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const postcssColorFunction = require('postcss-color-function');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  const tailwindcss = require('tailwindcss');
  return gulp
    .src('assets/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      tailwindcss(),
      postcssImport(),
      postcssColorFunction(),
      precss(),
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/built/'));
});

gulp.task('zip', () =>
  gulp.src(['./**/*', '!./node_modules/**', `!./${pkg.name}.zip`])
    .pipe(zip(`./${pkg.name}.zip`))
    .pipe(gulp.dest('.'))
);

// gulp.task('default', ['css']);
gulp.task('default', gulp.series(['css']));
