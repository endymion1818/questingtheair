module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  postcss: {
    dist: {
        src: 'src/scss/project.scss',
        dest: 'css/paleography.css'
    },
    options: {
        map: true,
        processors: [
            require('autoprefixer-core')({
                browsers: ['last 2 versions']
            }),
            require('postcss-import'),
            require('css-mqpacker')(),
            require('cssnext')(),
            require('precss')()
        ]
    }
  },
  cssmin: {
   target: {
    files: {
      'css/paleography.min.css': ['css/paleography.css']
      }
    }
  },
  uglify: {
    my_target: {
      files: {
        'js/paleography.min.js': ['js/paleography.js']
      }
    }
  },
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/js/*.js', 'src/js/*/*.js'],
      dest: 'js/paleography.js',
    },
  },
  jshint: {
    beforeconcat: ['src/js/*.paleography.js'],
  },
  imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'src/img/',
        src: ['**/*.{png,jpg,gif,svg}'],
        dest: 'img/'
      }]
    }
  }
});

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', [
    'postcss',
    'cssmin',
    'uglify',
    'concat',
    'jshint',
    'imagemin'
    ]);

};
