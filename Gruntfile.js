// Load Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    // Compile all sass files in styles/sass
    // Write css output to styles/css
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'public/styles/sass',
          src: ['**/*.scss'],
          dest: 'public/styles/css',
          ext: '.css'
      }]
      }
    },
    // Concatenate js into one file
    // TODO
    //    concat: {
    //      options: {
    //        separator: ';',
    //      },
    //      dist: {
    //        src: ['', ''],
    //        dest: '',
    //      },
    //    },
    // Concat and minify all css
    cssmin: {
      combine: {
        files: { // explicitly define bootstrap to be concated 1st
          'public/dist/main.min.css': ['public/styles/css/bootstrap.min.css', 'public/styles/css/*css']
        }
      }
    },
    // Begin JS Uglify Plugin
    //    uglify: {                                     TODO
    //      build: {
    //        src: ['src/*.js'],
    //        dest: 'js/script.min.js'
    //      }
    //    },
    // Compile everything into one task with Watch Plugin
    //    watch: {                                  
    //      css: {                                       TODO
    //        files: '**/*.scss',
    //        tasks: ['sass', 'postcss', 'cssmin']
    //      },
    //      js: {
    //        files: '**/*.js',
    //        tasks: ['uglify']
    //      }
    //    }

    // Additional TODOS
    // BABEL
  });

  /**
   * Load Grunt Plugins
   */
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /**
   * Register Grunt Tasks
   */

  // grunt.registerTask('default', ['watch']);

  // grunt build-css compiles sass then concats all css to public/dist/main.min.css
  grunt.registerTask('build-css', ['sass', 'cssmin']);
};
