"use strict";

var commonExcludes = ['config', 'mustache', 'text'];

module.exports = {
    optimize: 'uglify2',
    generateSourceMaps: true,
    preserveLicenseComments: false,
    dir: 'public',
    appDir: 'dev',
    baseUrl: 'Documents/js',
    mainConfigFile: 'dev/Documents/js/config.js',
    modules: [{
        name: 'config',
        include: [
            'mustache',
            'text'
        ]
    }, {
        name: 'app/main',
        exclude: commonExcludes
    }]
};