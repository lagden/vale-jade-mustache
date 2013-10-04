(function(window, define) {

    "use strict";

    var lang = window.parent.document.documentElement.lang || 'pt-br',
        availables = ['pt-br', 'en-us'];

    if ( !! ~availables.indexOf(lang))
        lang = 'pt-br';

    var requires = [
        'jquery',
        'mustache',
        "app/models/db." + lang,
        "text!app/views/snolab.html.mustache"
    ];

    define(requires, function($, Mustache, dados, template) {
        var pos,
            flow,
            pika,
            $snolabBase = $('#snolabBase');

        pos = flow = pika = 0;

        dados[lang].galery.flow = function() { return flow++; };
        dados[lang].galery.pos = function() { return pos++; };
        dados[lang].galery.pika = function() { return pika++; };

        $snolabBase
            .empty()
            .append(Mustache.render(template, dados[lang]));
    });

}(window, define));