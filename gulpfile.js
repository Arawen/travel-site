var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function () {
	console.log("Hooray - you created a Gulp task");
});

gulp.task('html', function () {
	console.log("Nešto korisno na HTML");
});

gulp.task('styles', function () {
	console.log("Nešto je urađeno na CSS");
})

gulp.task('watch', function () {

	watch('./app/index.html', function () {		
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function () {
		gulp.start('css');
	})
});