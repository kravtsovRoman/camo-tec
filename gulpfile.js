
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleancss = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify"); // Errors

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
	})
});

gulp.task('scss', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});

gulp.task('js', function () {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
		'node_modules/wowjs/dist/wow.min.js',
		'app/libs/owl-carousel/owl.carousel.min.js',
		// All JS files add here...
		'app/js/common.js', // Always at the end
	])
		.pipe(concat('scripts.min.js')) // Concat js files
		// .pipe(uglify()) // Mifify js
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({ stream: true }))
});


gulp.task('watch', ['scss', 'js', 'browser-sync'], function () {
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);
