"use strict";

var commonExcludes = ['config', 'jquery', 'mustache', 'text', 'jquery.fancybox'];

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
            'jquery',
            'mustache',
            'text',
            'jquery.fancybox'
        ]
    }, {
        name: 'app/main',
        exclude: commonExcludes
    }]
};