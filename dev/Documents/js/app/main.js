(function(window, define) {

    "use strict";

    var lang = window.parent.document.documentElement.lang || 'pt-br',
        availables = ['pt-br', 'en-us'];

    if ( availables.indexOf(lang) === -1)
        lang = 'pt-br';

    var requires = [
        'mustache',
        "app/models/db." + lang,
        "text!app/views/snolab.html.mustache"
    ];

    define(requires, function(Mustache, dados, template) {
        var pos,
            flow,
            pika,
            snolabBase = document.getElementById('snolabBase');

        pos = flow = pika = 0;

        // Contadores
        dados[lang].galery.flow = function() { return flow++; };
        dados[lang].galery.pos = function() { return pos++; };
        dados[lang].galery.pika = function() { return pika++; };

        snolabBase.innerHTML = Mustache.render(template, dados[lang]);

        $.fancybox({
            beforeLoad : function() {
                showFlowplayer();
            }
        });

        // Flowplayer
        var flowplayerInit = false;

        function showFlowplayer() {
            if ('function' == typeof window.flowplayer && !flowplayerInit) {
                flowplayerInit = true;
                var b = "/_layouts/VALE.ValeCom/swf/flowplayer.swf";
                var $videoFlowplayer = $(".video-flowplayer");
                $videoFlowplayer.each(function(idx, el) {
                    var $e = $(el);
                    var g = $e.data("rtmp");
                    var e = $e.data("engine");
                    $e.flowplayer({
                        swf: b,
                        rtmp: g,
                        engine: e
                    });
                });
            } else
                console.log("flowplayer não existe");
        }

        setTimeout(function() {
            var tmp = window.TheImageFlow || false;
            if (tmp)
                tmp.init();
            else
                console.log("Não tem TheImageFlow");
        }, 100);

    });

}(window, define));