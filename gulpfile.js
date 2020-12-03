const gulp = require('gulp');

gulp.task('copy', (done) => {

    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css',{ allowEmpty : true })
        .pipe(gulp.dest('./dist/css/' ));
    gulp.src('./node_modules/jquery/dist/jquery.min.js',{ allowEmpty : true })
        .pipe(gulp.dest('./dist/js/'));
    gulp.src('./node_modules/popper.js/dist/popper.js',{ allowEmpty : true })
        .pipe(gulp.dest('./dist/js/'));
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js',{ allowEmpty : true })
        .pipe(gulp.dest('./dist/js/'));

        done();
    });