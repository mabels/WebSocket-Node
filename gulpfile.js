/**
 * Dependencies.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
	return gulp.src(['gulpfile.js', 'lib/**/*.js', 'test/unit/*.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish', {verbose: true}))
		.pipe(jshint.reporter('fail'));
});

gulp.task('default', gulp.series('lint'));
