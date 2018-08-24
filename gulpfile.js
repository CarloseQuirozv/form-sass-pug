const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprofixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug');

gulp.task('pug', () =>
	gulp.src('./dev/views/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/'))
);

gulp.task('sass', () => 
	gulp.src('./scss/*.scss')
	.pipe(sass({
		outputStyle: 'expanded'
	}))
	.pipe(gulp.dest('./css/'))
);

gulp.task('default', () => {
	gulp.watch(['./dev/views/*.pug','./scss/*.scss'],['pug','sass']);
});