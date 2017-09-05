var gulp = require('gulp');

var deployCdn = require('gulp-deploy-azure-cdn');
var gutil = require('gulp-util');

var containerName = 'elsevr';
var container = 'appselse';
var containerKey = 'gRlCuXTLExfKgOJy3oXGTUbVzBcYRXhWCJe6f9quDTD2mJTDzTBF0eU3MX0NFoUTZlfabryEG2uHx7hhBae+qw==';

dist_dir = 'dist';

gulp.task('deploy-stage', function () {
    return gulp.src([dist_dir + '/**/*.*']).pipe(deployCdn({
        containerName: containerName,
        containerOptions: {publicAccessLevel: "blob"},
        serviceOptions: [container, containerKey],
        folder: 'web',
        zip: true,
        deleteExistingBlobs: true,
        concurrentUploadThreads: 10,
        metadata: {
            cacheControl: 'public, max-age=0',
            cacheControlHeader: 'public, max-age=0'
        },
        testRun: false
    })).on('error', gutil.log);
});

gulp.task('deploy', function () {
    return gulp.src([dist_dir + '/**/*.*']).pipe(deployCdn({
        containerName: containerName,
        containerOptions: {publicAccessLevel: "blob"},
        serviceOptions: [container, containerKey],
        folder: 'dev',
        zip: true,
        deleteExistingBlobs: true,
        concurrentUploadThreads: 10,
        metadata: {
            cacheControl: 'public, max-age=0',
            cacheControlHeader: 'public, max-age=0'
        },
        testRun: false
    })).on('error', gutil.log);
});