module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  postcss: {
    dist: {
        src: 'src/sass/theme.scss',
        dest: 'css/questingtheair.css'
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
      'css/questingtheair.min.css': ['css/questingtheair.css']
      }
    }
  },
  uglify: {
    my_target: {
      files: {
        'js/questingtheair.min.js': ['js/questingtheair.js']
      }
    }
  },
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/js/*.js', 'src/js/*/*.js'],
      dest: 'js/questingtheair.js',
    },
  },
  jshint: {
    beforeconcat: ['src/js/*.questingtheair.js'],
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'postcss',
    'cssmin',
    'concat',
    'jshint',
    'imagemin',
    'uglify'
    ]);

};
