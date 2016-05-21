const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function () {
    // Run ESLint
    gulp.src(["private/**/*.js", "public/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
    // Node source
    gulp.src("private/src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("private/dist"));
    // Public source
    gulp.src("public/src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});