var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react-components', function () {
	return gulp.src('front/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('front/build'));
});

gulp.task('default', ['react-components']);
