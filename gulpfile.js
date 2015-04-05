var gulp         = require('gulp');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');

var dependencies = [ "lodash", "react/addons", "react", "react-router", "jquery", "store" ];

gulp.task('libs', function () {
	return browserify()
		.require(dependencies)
		.bundle()
		.pipe(source('libs.js'))
		.pipe(gulp.dest('./front'));
});

gulp.task('scripts', function () {
	return browserify('./front/app.js')
		.external(dependencies)
		.bundle()
		.pipe(source('build.js'))
		.pipe(gulp.dest('./front'));
});

gulp.task('default', ['scripts']);
