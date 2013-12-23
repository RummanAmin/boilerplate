module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
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
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/'
        }]
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
      images: {
        files: ['img/**/*.{png,jpg,gif}', 'img/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false
        }
      } 
    } 
  }) 
  grunt.registerTask('default', 'watch');
} 