var gulp =          require('gulp'),
    minifyCss =     require('gulp-minify-css'),
    autoprefixer =  require('gulp-autoprefixer'),
    concat =        require('gulp-concat'),
    uglify =        require('gulp-uglify'),
    server =        require('gulp-express');


gulp.task('css', function() {
    gulp.src([
        'node_modules/angular-material/angular-material.min.css',
        'src/css/**/*.css'
    ])
    .pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    }))
    .pipe(minifyCss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-material/angular-material.min.js',
        'src/js/**/*.js'
    ])
    //.pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('server', function(){
    server.run(['app.js']);
    gulp.watch(['app.js'], [server.run]);
});

gulp.task('watch', function () {
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'server']);