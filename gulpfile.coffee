path         = require('path')
gulp         = require('gulp')
gutil        = require('gulp-util')

sass         = require('gulp-sass')
autoprefixer = require('gulp-autoprefixer')
minifyCss    = require('gulp-minify-css')

jshint       = require('gulp-jshint')
uglify       = require('gulp-uglify')

concat       = require('gulp-concat')

imagemin     = require('gulp-imagemin')
cache        = require('gulp-cache')

jade         = require('gulp-jade')

clean        = require('gulp-clean')

notify       = require('gulp-notify')

watch        = require('gulp-watch')
rev          = require('gulp-rev')
tiny_lr      = require('tiny-lr')
webpack      = require("webpack")
express      = require('express')


webpackConfig  = require("./webpack.config.js")
if gulp.env.production
    webpackConfig.plugins = webpackConfig.plugins.contact(new webpack.optimize.UglifyJsPlugin())
    webpackConfig.output.filename = "main-[hash].js"

sassConfig = { includePaths : ['src/styles']}
httpPort = 4000

vendorPaths = ['es5-shim/es5-sham.js','es5-shim/es5-shim.js','bootstrap/dist/css/bootstrap.csss']

gulp.task 'clean', ->
    gulp.src('dist',{read:false})
    .pipe(clean())
    
gulp.task 'sass', ->
  gulp.src('src/styles/main.scss')
  .pipe(sass(sassConfig).on('error', gutil.log))
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
  .pipe(if gulp.env.production then minifyCSS() else gutil.noop())
  .pipe(if gulp.env.production then rev() else gutil.noop())
  .pipe(gulp.dest('dist/assets/css'))

gulp.task 'jade', ->
  gulp.src('src/jade/*.jade')
  .pipe(jade({
      client: true
    }))
  .pipe(gulp.dest('./dist/'))

    
gulp.task 'vendor', ->
  paths = vendorPaths.map (p) -> path.resolve("./bower_components", p)
  gulp.src(paths)
  .pipe(gulp.dest('dist/assets/vendor'))    
    
gulp.task 'copy', ->
  gulp.src(['src/**/*', '!src/scripts', '!src/scripts/**/*', '!src/styles', '!src/styles/**/*']).pipe(gulp.dest('dist'))   
    
    
gulp.task 'webpack', (callback) ->
  execWebpack(webpackConfig)
  callback()    
    
    
gulp.task 'dev', ['build'], ->
  servers = createServers(httpPort, 35729)

  gulp.watch ['./src/**/*'], (evt) -> gulp.run 'build'
  gulp.watch ['./dist/**/*'], (evt) ->
    gutil.log(gutil.colors.cyan(evt.path), 'changed')
    servers.lr.changed
      body:
        files: [evt.path]  
        
        
gulp.task 'build', ['webpack', 'sass', 'copy', 'vendor'], ->
gulp.task 'default', ['build'], ->
  setTimeout ->
    gutil.log "**********************************************"
    gutil.log "* gulp              (development build)"
    gutil.log "* gulp clean        (rm /dist)"
    gutil.log "* gulp --production (production build)"
    gutil.log "* gulp dev          (build and run dev server)"
    gutil.log "**********************************************"
  , 3000   
    
createServers = (port, lrport) ->
  lr = tiny_lr()
  lr.listen lrport, -> gutil.log("LiveReload listening on", lrport)
  app = express()
  app.use(express.static(path.resolve("./dist")))
  app.listen port, -> gutil.log("HTTP server listening on", port)

  lr: lr
  app: app    

execWebpack = (config) ->
  webpack config, (err, stats) ->
    if (err) then throw new gutil.PluginError("execWebpack", err)
    gutil.log("[execWebpack]", stats.toString({colors: true}))    