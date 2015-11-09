path  		= require 'path'
gulp 		= require 'gulp'
bower  		= require 'gulp-bower'
concat 		= require 'gulp-concat'
gutil 		= require 'gulp-util'
clean 		= require 'gulp-clean'
sass 		= require 'gulp-sass'
minifyCss 	= require 'gulp-minify-css'
rev         = require 'gulp-rev'
map 		= require 'map-stream'
touch 		= require 'touch'
_			= require 'underscore'
webpack 	= require 'webpack'
argv 		= (require 'yargs').argv;

vendorPaths = ['bootstrap/dist/css/bootstrap.css']
WebpackDevServer = require("webpack-dev-server")
webpackConfig = require("./webpack.config.js")
webpackProductionConfig = require("./webpack.production.config.js")

gulp.task 'clean', ->
	gulp.src('dist', {read: false})
  	.pipe(clean())

gulp.task 'bower',->
	return bower()
		.pipe(gulp.dest('bower_components'))

gulp.task 'vendor',['bower'],->
	paths = vendorPaths.map (p) -> path.resolve("./bower_components", p)
	gulp.src(paths)
		.pipe(gulp.dest('dist/assets/vendor'))

gulp.task 'sass', ->
	#console.log argv 
	gulp.src('src/styles/*.scss')
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(if argv.production then minifyCSS() else gutil.noop())
		.pipe(if argv.production then rev() else gutil.noop())		
		.pipe(gulp.dest('dist/assets/'))

gulp.task 'copy-assets', ->
	gulp.src(['src/**/*', '!src/images', '!src/images/**/*','!src/scripts', '!src/scripts/**/*', '!src/styles', '!src/styles/**/*']).pipe(gulp.dest('dist'))

gulp.task 'webpack:build', (callback) ->
	webpack webpackProductionConfig, (err, stats) ->
		throw new gutil.PluginError("webpack:build", err)  if err
		gutil.log "[webpack:build]", stats.toString(colors: true)
		callback()
		return

devCompiler = webpack(webpackConfig)
gulp.task "webpack:build-dev", ['sass'], (callback) ->
	devCompiler.run (err, stats) ->
		throw new gutil.PluginError("webpack:build-dev", err)  if err
		gutil.log "[webpack:build-dev]", stats.toString(colors: true)
		callback()
		return
	return

devServer = {}
gulp.task "webpack-dev-server", ['sass'], (callback) ->
	# Ensure there's a `./public/main.css` file that can be required.
	touch.sync('./dist/assets/main.css', time: new Date(0))
	# Start a webpack-dev-server.
	devServer = new WebpackDevServer(webpack(webpackConfig),
		contentBase: './dist/'
		hot: true
		watchOptions:
			aggregateTimeout: 100
			poll: 300
		noInfo: true
	)
	devServer.listen 8080, "0.0.0.0", (err) ->
		throw new gutil.PluginError("webpack-dev-server", err) if err
		gutil.log "[webpack-dev-server]", "http://localhost:8080"
		callback()
	return


gulp.task 'build',['webpack:build','sass','copy-assets']
gulp.task 'builddev',['webpack:build-dev','sass','copy-assets']

gulp.task 'default',->
	if argv.production  then gulp.start 'build' else  gulp.start 'builddev';gulp.start 'watch'
	
gulp.task 'watch', ['sass', 'copy-assets', 'webpack-dev-server'], ->
	gulp.watch(['src/styles/**'], ['css'])
	gulp.watch(['assets/**'], ['copy-assets'])