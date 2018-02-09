var gulp = require('gulp');

var deployCdn = require('gulp-deploy-azure-cdn');
var gutil = require('gulp-util');

var containerName = 'elsevr';
var container = 'appselse';
var containerKey = 'gRlCuXTLExfKgOJy3oXGTUbVzBcYRXhWCJe6f9quDTD2mJTDzTBF0eU3MX0NFoUTZlfabryEG2uHx7hhBae+qw==';

var dist_dir = 'dist';

function _deploy(_dist_dir, _folder, _containerName, _container, _containerKey) {
    return gulp.src([_dist_dir + '/**/*.*']).pipe(deployCdn({
        containerName: _containerName,
        containerOptions: {publicAccessLevel: "blob"},
        serviceOptions: [_container, _containerKey],
        folder: _folder,
        zip: false,
        deleteExistingBlobs: true,
        concurrentUploadThreads: 10,
        metadata: {
            cacheControl: 'public, max-age=0',
            cacheControlHeader: 'public, max-age=0'
        },
        testRun: false
    })).on('error', gutil.log);
}

gulp.task('deploy-stage', function () {
    _deploy(dist_dir, 'web', containerName, container, containerKey)
});

gulp.task('deploy', function () {
    // _deploy(dist_dir, 'dev', containerName, container, containerKey)
    _deploy(dist_dir, 'new', containerName, container, containerKey)
});