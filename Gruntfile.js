"use strict";

var opts = require('./options');
var pathVale = '../Documents/';

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var dev = 'dev',
        deploy = 'public',
        pathDevPages = dev + '/Pages',
        pathDevDoc = dev + '/Documents',
        pathDevJs = pathDevDoc + '/js',
        pathDevCss = pathDevDoc + '/css';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            app: {
                src: [pathDevCss, pathDevPages, deploy, pathDevDoc + '/index.*']
            }
        },
        jshint: {
            dev: {
                files: {
                    src: [pathDevJs + '/**/*.js']
                },
                options: {
                    ignores: [pathDevJs + '/lib/**/*']
                }
            }
        },
        compass: {
            app: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        requirejs: {
            local: {
                options: opts
            }
        },
        jade: {
            html: {
                options: {
                    pretty: true,
                    data: {
                        path: pathVale
                    }
                },
                files: {
                    "dev/Pages/index.html": ["template/index.jade"]
                }
            },
            txt: {
                options: {
                    pretty: true,
                    data: {
                        path: pathVale
                    }
                },
                files: {
                    "dev/Documents/index.txt": ["template/body.jade"]
                }
            }
        },
        watch: {
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                    livereload: {
                        port: 9000
                    }
                }
            },
            scripts: {
                files: [pathDevJs + '/**/*.js'],
                tasks: ['jshint:dev'],
                options: {
                    interrupt: true,
                    spawn: false
                }
            },
            jade: {
                files: ['template/**/*.jade'],
                tasks: ['jade'],
                options: {
                    interrupt: true,
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default', ['clean', 'compass', 'jade', 'jshint:dev']);
    grunt.registerTask('deploy', ['default', 'requirejs']);
};