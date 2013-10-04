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
        var idx = 0,
            $snolabBase = $('#snolabBase');

        dados[lang].galery["idx"] = function() {
            return idx++;
        }
        $snolabBase.empty().append(Mustache.render(template, dados[lang]);
    });

}(window, define));