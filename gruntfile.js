module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'src/brainfuck.min.js': ['src/brainfuck.js']
        }
      }
    },
    jshint: {
      all: ['src/brainfuck.js']
    },
    qunit: {
      all: ['tests/**/*.html']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'qunit']);

  grunt.registerTask('test', ['qunit']);

};
