var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat-sourcemap');

gulp.task('build', function() {
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	// .pipe(uglify())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('build'));
});

gulp.task('test', function(){
	var test = require('./test/test.js');
	test.search();
})

gulp.task('default', ['build', 'test']);