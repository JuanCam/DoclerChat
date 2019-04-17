const app = require('express')();
const concat = require('gulp-concat');
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const order = require('gulp-order');
const size = require('gulp-size');
const sass = require('gulp-sass');
const http = require('http').Server(app);
const io = require('socket.io')(http);
var path = require('path');
var serveStatic = require('serve-static');
const port = process.env.PORT || 3000;

/** JS tasks */
gulp.task('vendor', () => {
	return gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/angular-route/angular-route.min.js',
	])
	.pipe(order([
					'angular/angular.min.js',
					'angular-route/angular-route.min.js',
	], {base: './node_modules'}))
	.pipe(concat('vendor.js'))
	.pipe(size())
});

gulp.task('webpack-js', () => {
	return gulp.src('./js/**.js')
  		.pipe(webpackStream(webpackConfig))
    	.pipe(gulp.dest('./dist/js'));
});

gulp.task('js', gulp.series('webpack-js', (webpackTask) => {
	webpackTask();
	gulp.watch('./js/**/*.js', gulp.series('webpack-js'));
}));

/** CSS tasks */
gulp.task('sass', () => {
	return gulp.src('sass/main.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('css', gulp.series('sass', (task) => {
	task();
	gulp.watch('sass/**/*.scss', gulp.series('sass'));
}));

/** Server task */
gulp.task('server', () => {
	app.use(serveStatic(path.join(__dirname, '.')));

	app.get('/chat/:userId', (req, res) => {
		next();
	});

	io.on('connection', function(socket){
		socket.on('chat message', function({message, usr}){
			io.emit('chat message', {message, usr});
		});
	});

	http.listen(port, function(){
		console.log('listening on *:' + port);
	});
});

gulp.task('default', gulp.parallel('server', 'vendor', 'js', 'css'));