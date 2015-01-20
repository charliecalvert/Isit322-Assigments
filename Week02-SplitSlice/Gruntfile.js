module.exports = function(grunt) {
	'use strict';

	var zipFile = 'SplitSlice.zip';

	grunt.initConfig({
		zipFile : zipFile,

		pkg : '<json:package.json>',

		karma : {
			unit : {
				configFile : 'karma.conf.js',
				browsers : [ 'PhantomJS' ],
				singleRun : true
			}
		},

		jshint : {
			files : [ '**/*.js' ],

			options : {
				ignores : [ 
				     '**/node_modules/**'
				],
				reporter : 'checkstyle',
				reporterOutput : 'result.xml',
				strict : true,				
				globals : {
					describe : true,
					afterEach : true,
					beforeEach : true,
					inject : true,
					it : true,
					jasmine : true,
					expect : true,
					module : true,
				}
			}
		},

		clean : {
			work : {
				src : [ "**/node_modules/**", "result.xml", '<% zipFile %>']
			},

			zip : {
				src : []
			}
		},

		compress : {
			jasmine02 : {
				options : {
					archive : '<%= zipFile %>',
					mode : 'zip'
				},
				files : [ {
					src : ['./*.html', './*.js*']
				}, {
					src : './Source/**'
				}, {
					src : './Test/**'
				}, {
					src : ['./README.md', 'RunMocha']
				} ]
			}
		},

		copy : {
			main : {
				src : '<%= zipFile %>',
				dest : process.env.HOME + '/temp/'
			}

		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('dist', [ 'clean:zip', 'compress:jasmine02', 'copy:main' ]);
};
