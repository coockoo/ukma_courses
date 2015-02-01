var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react-components', function () {
	return gulp.src('front/components/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('front/build/components'));
});

gulp.task('default', ['react-components']);
