var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

var sass = require('gulp-sass')(require('sass'));

// styles = sass
gulp.task('styles-image-frytolnacestach', gulp.parallel(
	function() {
		return gulp.src('assets/scss/*.scss')
			.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'})
				.on('error', sass.logError))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('public/css'))
			.pipe(browserSync.stream());
	}
));

gulp.task('default',gulp.series('styles-image-frytolnacestach'));