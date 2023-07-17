const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass')(require('sass')),
    clean = require('gulp-clean'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');

gulp.task('minifyConcatScripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('concatCss', function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', () => {
    return gulp.src('app/sass/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('createDist', () => {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('clean', function () {
    return gulp.src(['dist'], { read: false })
        .pipe(clean());
});

gulp.task('server', function () {
    gulp.watch("app/**/*.js").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.scss").on('change', browserSync.reload);

    browserSync.init({
        server: "./app"
    })
});

gulp.task('optimize-images', function () {
    return gulp.src(["app/img/**/*.{png,jpg,svg}"])
        .pipe(imagemin([
            imagemin.mozjpeg({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('dist/img'));
});


gulp.task('default', gulp.parallel('minifyConcatScripts', 'sass', 'concatCss', 'server'));
gulp.task('build', gulp.series('createDist', 'clean', 'minifyConcatScripts', 'sass', 'concatCss', 'optimize-images'));
