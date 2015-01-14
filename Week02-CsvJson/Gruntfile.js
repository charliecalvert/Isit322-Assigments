module.exports = function (grunt) {
    'use strict';

    var zipFile = 'CsvJson.zip';

    grunt.initConfig({
        zipFile: zipFile,

        pkg: '<json:package.json>',


        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'Spec',
                jUnit: {
                    report: true,
                    savePath: "./build/reports/jasmine/",
                    useDotNotation: true,
                    consolidate: true
                }
            },
            all: ['Test/']
        },


        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: [
                    '**/node_modules/**',
                    '**/Library/jas/**',
                    '**/jquery-2.0.3.js',
                    '**/requirejs-wrapper*.js',
                    '**/requirejs-setup*.js'
                ],
                reporter: 'checkstyle',
                reporterOutput: 'result.xml',
                strict: true,
                globals: {
                    describe: true,
                    afterEach: true,
                    beforeEach: true,
                    inject: true,
                    it: true,
                    jasmine: true,
                    expect: true,
                    module: true,
                }
            }
        },

        clean: {
            work: {
                src: ["**/node_modules/**", "result.xml"]
            },

            zip: {
                src: ['<%= zipFile %>']
            }
        },

        compress: {
            jasmine02: {
                options: {
                    archive: '<%= zipFile %>',
                    mode: 'zip'
                },
                files: [{
                    src: ['./*.html', './*.json', 'Gruntfile.js']
                }, {
                    src: './Source/**'
                }, {
                    src: './Test/**'
                }, {
                    src: ['./.project', './README.md', 'RunJasmineNode', './Data/IsitMeetings.csv']
                }
                ]
            }
        },

        copy: {
            main: {
                src: '<%= zipFile %>',
                dest: process.env.HOME + '/temp/'
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('test', ['jshint', 'jasmine_node']);
    grunt.registerTask('dist', ['clean:zip', 'compress:jasmine02', 'copy:main', 'clean:zip']);
};
