module.exports = function(grunt) {
  'use strict';

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
        browsers: ['last 5 versions']
      },
      dist: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    },
    watch: {
      scripts: {
        files: ['components/js/*.js'],
        tasks: ['uglify']
      }, 
      sass: {
        files: ['components/sass/*.scss']
      }, 
      html: {
        files: ['*.html']
      }, 
      styles: {
          files: ['css/style.css']
      },
      compass: {
        files: ['components/sass/*.scss'],
        tasks: ['compass:dev', 'autoprefixer']
      },
      livereload: {
        options: { livereload: true },
        files: ['css/style.css']
      } 
    } 
  }) 
  grunt.registerTask('default', 'watch');
} 