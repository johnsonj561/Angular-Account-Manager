// Load Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    // Compile all sass files in styles/sass
    // Write css output to styles/css
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public/styles/sass',
          src: ['**/*.scss'],
          dest: 'public/dist/temp/css',
          ext: '.css'
      }]
      }
    },
    // Concat and minify all css
    cssmin: {
      combine: {
        files: { // explicitly define bootstrap to be concated 1st
          'public/dist/main.min.css': ['public/styles/css/bootstrap.css', 'public/dist/temp/css/*css']
        }
      }
    },
    // Concat all js into single file
    // Be sure to order dependencies appropriately
    // Note - If jquery is not loaded before angular, angular will utilize jquery-lite
    concat: {
      options: {
        separator: ';',
        sourceMap: true
      },
      dist: {
        src: [
					 'public/js/jquery/*js',
           'public/js/angular/angular.js',
           'public/js/angular/angular-route.js',
           'public/js/bootstrap/bootstrap.js',
					 'public/app/**/*js'
				 ],
        dest: 'public/dist/temp/js/main.js'
      }
    },
    // Babelize compiles javascript ES6 --> ES5 per preset plugins
    babel: {
      options: {
        presets: ['babel-preset-es2015'],
        sourceMap: true,
        inputSourceMap: grunt.file.readJSON('public/dist/temp/js/main.js.map')
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'public/dist/temp/js',
          src: 'main.js',
          dest: 'public/dist/temp/js',
          ext: '.babelized.js'
      }]
      }
    },
    // Uglify/minify javascript
    uglify: {
      options: {
        mangle: false,
        sourceMap: true,
        sourceMapIncludeSources: true,
        sourceMapIn: 'public/dist/temp/js/main.babelized.js.map'
      },
      build: {
        src: 'public/dist/temp/js/main.babelized.js',
        dest: 'public/dist/main.min.js'
      }
    },
    // Clean temp working directories
    clean: {
      all: ['public/dist'],
      js: ['public/dist/**/*js'],
      css: ['public/dist/**/*css']
    },
    // watch files for changes and re-build on change
    watch: {
      files: ['public/styles/**/*.scss', 'public/styles/**/*.css', 'public/app/**/*js'],
      tasks: ['build-all']
    }
  });


  /**
   * Load Grunt Plugins
   */
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');


  /**
   * Register Grunt Tasks
   */
  // default grunt command 'grunt' will start watch service
  // watch service will re-build javascript and css on file change
  grunt.registerTask('default', ['watch']);
  // grunt build-css compiles sass then concats all css to public/dist/main.min.css
  grunt.registerTask('build-css', ['clean:css', 'sass', 'cssmin']);
  // grunt build-js concats all js, babelizes, uglifies, and writes result to public/dist/main.min.js
  // Note - uglification currently disabled, need to find workaround to prevent uglify from breaking angular
  grunt.registerTask('build-js', ['concat', 'babel', 'uglify']);
  // grunt build-all combines build-css and build-js
  grunt.registerTask('build-all', ['clean:all', 'build-css', 'build-js']);
};
