module.exports = function(grunt) {

    // grunt.initConfig({
    // });

    grunt.registerTask('run', function() {
        grunt.util.spawn({
            cmd: 'google-chrome',
            args: ['--load-and-launch-app=' + __dirname]
        });
    });

    // Default task(s).
    grunt.registerTask('default', ['run']);

};