// Array indexof for IE < 9
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement) {
        "use strict";
        if (this === null) {
            throw new TypeError();
        }
        var n, k, t = Object(this),
            len = t.length >>> 0;

        if (len === 0) {
            return -1;
        }
        n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            } else if (n !== 0 && n != Infinity && n !== -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

// Console
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Retorna o o dir atual ex.: http://xxx.com/dir/awesome/index.html -> /dir/awesome

function urlPath() {
    var path = String(window.location.pathname).split('/');
    path.pop();
    return path.join('/');
}

// Css

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

var TheLightboxVideo = {
    init: function() {
        if ($(".video-lightbox") && ($(".video-lightbox").length > 0)) {
            $(".video-lightbox").click(function(e) {
                e.preventDefault();

                var alvo = $(this).attr("href");
                var vp = $(alvo).find(".videoplayer");

                $.fancybox({
                    href: alvo,
                    padding: "20"
                });
                $(alvo).find("#siteGlobal").css("overflow", "hidden");

                vp.addClass("video-flowplayer").html('<video x-webkit-airplay="allow" controls alt="video" src="' + vp.data("video") + '"/>');
                abrirVideo(vp);

                return false
            })
        }
    }
};


function abrirVideo(videoPlayer) {
    if (!videoPlayer) return false;

    var a = "/_layouts/VALE.ValeCom/swf/flowplayer.rtmp-3.2.11.swf";
    var b = "/_layouts/VALE.ValeCom/swf/flowplayer.swf";
    var c = "/_layouts/VALE.ValeCom/swf/flowplayer.commercial-3.2.15.swf";
    var d = (navigator.userAgent.toLowerCase().indexOf("android") > -1);
    var e = ((navigator.userAgent.toLowerCase().indexOf("ipod") > -1) || (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) || (navigator.userAgent.toLowerCase().indexOf("iphone") > -1));
    if ($(".video-flowplayer") && ($(".video-flowplayer").length > 0)) {
        if (d) {
            $(videoPlayer).each(function(indice, elemento) {
                $(elemento).empty().html('<video x-webkit-airplay="allow" controls alt="video" src="' + $(this).data("rtsp") + '"/>');
            })
        } else {
            if ($.browser.msie) {
                $(videoPlayer).each(function(indice, elemento) {
                    var g = $(elemento).data("rtmp");
                    var f = $(elemento).data("flash");
                    var h = $(elemento).data("poster");
                    $(elemento).empty();
                    $f($(elemento).attr("id"), c, {
                        key: "#$c838a52518e248d0035",
                        clip: {
                            url: f,
                            autoPlay: false,
                            provider: "rtmp"
                        },
                        logo: {
                            url: "../img/common/logo_vale.gif",
                            fullscreenOnly: true
                        },
                        plugins: {
                            rtmp: {
                                url: a,
                                netConnectionUrl: g
                            }
                        },
                        canvas: {
                            background: h,
                            backgroundGradient: "none"
                        }
                    })
                })
            } else {
                if (!e) {
                    $(videoPlayer).each(function(indice, elemento) {
                        var g = $(elemento).data("rtmp");
                        var f = $(elemento).data("flash");
                        var j = $(elemento).data("poster");
                        var i = $(elemento).data("video");
                        var h = "";
                        h += '<video poster="' + j + '">';
                        h += '<source type="video/flash" src="' + f + '" />';
                        h += '<source type="video/mp4" src="' + i + '" />';
                        h += "</video>";
                        $(elemento).empty().html(h).flowplayer({
                            swf: b,
                            rtmp: g,
                            engine: "flash"
                        })
                    })
                }
            }
        }
    }
}

(function(window, require) {

    "use strict";

    require.config({
        baseUrl: "../Documents/js",
        paths: {
            "mustache": "lib/mustache",
            "text": "lib/text"
        }
    });

}(window, require));