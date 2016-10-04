'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('./sass/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
 gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    // var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./src/*.css')
        // .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});