module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'js/main.js': ['components/js/plugins.js', 'components/js/main.js']
        } 
      } 
    }, 
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } 
      } 
    }, 
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      single_file: {
        src: 'css/style.css',
        dest: 'css/style.css'
      }
    },
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['components/js/*.js'],
        tasks: ['uglify']
      }, 
      sass: {
        files: ['components/sass/*.scss'],
        tasks: ['compass:dev']
      }, 
      html: {
        files: ['*.html']
      }, 
      styles: {
          files: ['css/style.css'],
          tasks: ['autoprefixer']
      }
    } 
  }) 
  grunt.registerTask('default', 'watch');
} 