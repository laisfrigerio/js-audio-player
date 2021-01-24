const babel   = require('gulp-babel');
const gulp    = require('gulp');
const minify  = require('gulp-csso');
const pug     = require('gulp-pug');
const sass    = require('gulp-sass');
const uglify  = require('gulp-uglify');

const base          = './resources';
const baseStyles    = `${base}/styles/app.scss`;
const baseTemplates = `${base}/templates/pages/*.pug`;
const baseScripts   = `${base}/scripts/*.js`;

function css() {
    return gulp.src(baseStyles)
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest("./css"));
}

function js() {
    return gulp.src(baseScripts)
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(gulp.dest("./js"));
}

function views() {
    return gulp.src(baseTemplates)
        .pipe(pug())
        .pipe(gulp.dest("./"));
}

function watch() {
    gulp.watch(
        [`${base}/styles/**/**.scss`, baseScripts, baseTemplates],
        gulp.parallel(css, js, views)
    )
}

exports.css      = css;
exports.js       = js;
exports.views    = views;
exports.watch    = watch;
exports.default  = gulp.parallel(css, js, views);