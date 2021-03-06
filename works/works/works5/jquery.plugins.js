/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j) {
    function A(a) {
        return a.replace(B, h).replace(C, function(a, d, b) {
            for (var a = b.split(","), b = 0, e = a.length; b < e; b++) {
                var s = D(a[b].replace(E, h).replace(F, h)) + o
                  , l = [];
                a[b] = s.replace(G, function(a, b, c, d, e) {
                    if (b) {
                        if (l.length > 0) {
                            var a = l, f, e = s.substring(0, e).replace(H, i);
                            if (e == i || e.charAt(e.length - 1) == o)
                                e += "*";
                            try {
                                f = t(e)
                            } catch (k) {}
                            if (f) {
                                e = 0;
                                for (c = f.length; e < c; e++) {
                                    for (var d = f[e], h = d.className, j = 0, m = a.length; j < m; j++) {
                                        var g = a[j];
                                        if (!RegExp("(^|\\s)" + g.className + "(\\s|$)").test(d.className) && g.b && (g.b === !0 || g.b(d) === !0))
                                            h = u(h, g.className, !0)
                                    }
                                    d.className = h
                                }
                            }
                            l = []
                        }
                        return b
                    } else {
                        if (b = c ? I(c) : !v || v.test(d) ? {
                            className: w(d),
                            b: !0
                        } : null)
                            return l.push(b),
                            "." + b.className;
                        return a
                    }
                })
            }
            return d + a.join(",")
        })
    }
    function I(a) {
        var c = !0, d = w(a.slice(1)), b = a.substring(0, 5) == ":not(", e, f;
        b && (a = a.slice(5, -1));
        var l = a.indexOf("(");
        l > -1 && (a = a.substring(0, l));
        if (a.charAt(0) == ":")
            switch (a.slice(1)) {
            case "root":
                c = function(a) {
                    return b ? a != p : a == p
                }
                ;
                break;
            case "target":
                if (m == 8) {
                    c = function(a) {
                        function c() {
                            var d = location.hash
                              , e = d.slice(1);
                            return b ? d == i || a.id != e : d != i && a.id == e
                        }
                        k(j, "hashchange", function() {
                            g(a, d, c())
                        });
                        return c()
                    }
                    ;
                    break
                }
                return !1;
            case "checked":
                c = function(a) {
                    J.test(a.type) && k(a, "propertychange", function() {
                        event.propertyName == "checked" && g(a, d, a.checked !== b)
                    });
                    return a.checked !== b
                }
                ;
                break;
            case "disabled":
                b = !b;
            case "enabled":
                c = function(c) {
                    if (K.test(c.tagName))
                        return k(c, "propertychange", function() {
                            event.propertyName == "$disabled" && g(c, d, c.a === b)
                        }),
                        q.push(c),
                        c.a = c.disabled,
                        c.disabled === b;
                    return a == ":enabled" ? b : !b
                }
                ;
                break;
            case "focus":
                e = "focus",
                f = "blur";
            case "hover":
                e || (e = "mouseenter",
                f = "mouseleave");
                c = function(a) {
                    k(a, b ? f : e, function() {
                        g(a, d, !0)
                    });
                    k(a, b ? e : f, function() {
                        g(a, d, !1)
                    });
                    return b
                }
                ;
                break;
            default:
                if (!L.test(a))
                    return !1
            }
        return {
            className: d,
            b: c
        }
    }
    function w(a) {
        return M + "-" + (m == 6 && N ? O++ : a.replace(P, function(a) {
            return a.charCodeAt(0)
        }))
    }
    function D(a) {
        return a.replace(x, h).replace(Q, o)
    }
    function g(a, c, d) {
        var b = a.className
          , c = u(b, c, d);
        if (c != b)
            a.className = c,
            a.parentNode.className += i
    }
    function u(a, c, d) {
        var b = RegExp("(^|\\s)" + c + "(\\s|$)")
          , e = b.test(a);
        return d ? e ? a : a + o + c : e ? a.replace(b, h).replace(x, h) : a
    }
    function k(a, c, d) {
        a.attachEvent("on" + c, d)
    }
    function r(a, c) {
        if (/^https?:\/\//i.test(a))
            return c.substring(0, c.indexOf("/", 8)) == a.substring(0, a.indexOf("/", 8)) ? a : null;
        if (a.charAt(0) == "/")
            return c.substring(0, c.indexOf("/", 8)) + a;
        var d = c.split(/[?#]/)[0];
        a.charAt(0) != "?" && d.charAt(d.length - 1) != "/" && (d = d.substring(0, d.lastIndexOf("/") + 1));
        return d + a
    }
    function y(a) {
        if (a)
            return n.open("GET", a, !1),
            n.send(),
            (n.status == 200 ? n.responseText : i).replace(R, i).replace(S, function(c, d, b, e, f) {
                return y(r(b || f, a))
            }).replace(T, function(c, d, b) {
                d = d || i;
                return " url(" + d + r(b, a) + d + ") "
            });
        return i
    }
    function U() {
        var a, c;
        a = f.getElementsByTagName("BASE");
        for (var d = a.length > 0 ? a[0].href : f.location.href, b = 0; b < f.styleSheets.length; b++)
            if (c = f.styleSheets[b],
            c.href != i && (a = r(c.href, d)))
                c.cssText = A(y(a));
        q.length > 0 && setInterval(function() {
            for (var a = 0, c = q.length; a < c; a++) {
                var b = q[a];
                if (b.disabled !== b.a)
                    b.disabled ? (b.disabled = !1,
                    b.a = !0,
                    b.disabled = !0) : b.a = b.disabled
            }
        }, 250)
    }
    if (!/*@cc_on!@*/
    true) {
        var f = document
          , p = f.documentElement
          , n = function() {
            if (j.XMLHttpRequest)
                return new XMLHttpRequest;
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                return null
            }
        }()
          , m = /MSIE (\d+)/.exec(navigator.userAgent)[1];
        if (!(f.compatMode != "CSS1Compat" || m < 6 || m > 8 || !n)) {
            var z = {
                NW: "*.Dom.select",
                MooTools: "$$",
                DOMAssistant: "*.$",
                Prototype: "$$",
                YAHOO: "*.util.Selector.query",
                Sizzle: "*",
                jQuery: "*",
                dojo: "*.query"
            }, t, q = [], O = 0, N = !0, M = "slvzr", R = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g, S = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g, T = /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g, L = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/, B = /:(:first-(?:line|letter))/g, C = /(^|})\s*([^\{]*?[\[:][^{]+)/g, G = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g, H = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g, P = /[^\w-]/g, K = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/, J = /^(checkbox|radio)$/, v = m > 6 ? /[\$\^*]=(['"])\1/ : null, E = /([(\[+~])\s+/g, F = /\s+([)\]+~])/g, Q = /\s+/g, x = /^\s*((?:[\S\s]*\S)?)\s*$/, i = "", o = " ", h = "$1";
            (function(a, c) {
                function d() {
                    try {
                        p.doScroll("left")
                    } catch (a) {
                        setTimeout(d, 50);
                        return
                    }
                    b("poll")
                }
                function b(d) {
                    if (!(d.type == "readystatechange" && f.readyState != "complete") && ((d.type == "load" ? a : f).detachEvent("on" + d.type, b, !1),
                    !e && (e = !0)))
                        c.call(a, d.type || d)
                }
                var e = !1
                  , g = !0;
                if (f.readyState == "complete")
                    c.call(a, i);
                else {
                    if (f.createEventObject && p.doScroll) {
                        try {
                            g = !a.frameElement
                        } catch (h) {}
                        g && d()
                    }
                    k(f, "readystatechange", b);
                    k(a, "load", b)
                }
            }
            )(j, function() {
                for (var a in z) {
                    var c, d, b = j;
                    if (j[a]) {
                        for (c = z[a].replace("*", a).split("."); (d = c.shift()) && (b = b[d]); )
                            ;
                        if (typeof b == "function") {
                            t = b;
                            U();
                            break
                        }
                    }
                }
            })
        }
    }
}
)(this);

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t) {
    var e = {}
      , s = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    };
    t.fn.bxSlider = function(n) {
        if (0 == this.length)
            return this;
        if (this.length > 1)
            return this.each(function() {
                t(this).bxSlider(n)
            }),
            this;
        var o = {}
          , r = this;
        e.el = this;
        var a = t(window).width()
          , l = t(window).height()
          , d = function() {
            o.settings = t.extend({}, s, n),
            o.settings.slideWidth = parseInt(o.settings.slideWidth),
            o.children = r.children(o.settings.slideSelector),
            o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length),
            o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length),
            o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)),
            o.active = {
                index: o.settings.startSlide
            },
            o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1,
            o.carousel && (o.settings.preloadImages = "all"),
            o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin,
            o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin,
            o.working = !1,
            o.controls = {},
            o.interval = null,
            o.animProp = "vertical" == o.settings.mode ? "top" : "left",
            o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                var t = document.createElement("div")
                  , e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var i in e)
                    if (void 0 !== t.style[e[i]])
                        return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(),
                        o.animProp = "-" + o.cssPrefix + "-transform",
                        !0;
                return !1
            }(),
            "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides),
            r.data("origStyle", r.attr("style")),
            r.children(o.settings.slideSelector).each(function() {
                t(this).data("origStyle", t(this).attr("style"))
            }),
            c()
        }
          , c = function() {
            r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),
            o.viewport = r.parent(),
            o.loader = t('<div class="bx-loading" />'),
            o.viewport.prepend(o.loader),
            r.css({
                width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                position: "relative"
            }),
            o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"),
            f(),
            o.viewport.css({
                width: "100%",
                overflow: "hidden",
                position: "relative"
            }),
            o.viewport.parent().css({
                maxWidth: p()
            }),
            o.settings.pager || o.viewport.parent().css({
                margin: "0 auto 0px"
            }),
            o.children.css({
                "float": "horizontal" == o.settings.mode ? "left" : "none",
                listStyle: "none",
                position: "relative"
            }),
            o.children.css("width", u()),
            "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin),
            "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin),
            "fade" == o.settings.mode && (o.children.css({
                position: "absolute",
                zIndex: 0,
                display: "none"
            }),
            o.children.eq(o.settings.startSlide).css({
                zIndex: o.settings.slideZIndex,
                display: "block"
            })),
            o.controls.el = t('<div class="bx-controls" />'),
            o.settings.captions && P(),
            o.active.last = o.settings.startSlide == x() - 1,
            o.settings.video && r.fitVids();
            var e = o.children.eq(o.settings.startSlide);
            "all" == o.settings.preloadImages && (e = o.children),
            o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(),
            o.settings.controls && C(),
            o.settings.auto && o.settings.autoControls && E(),
            (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)),
            g(e, h)
        }
          , g = function(e, i) {
            var s = e.find("img, iframe").length;
            if (0 == s)
                return i(),
                void 0;
            var n = 0;
            e.find("img, iframe").each(function() {
                t(this).one("load", function() {
                    ++n == s && i()
                }).each(function() {
                    this.complete && t(this).load()
                })
            })
        }
          , h = function() {
            if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides
                  , i = o.children.slice(0, e).clone().addClass("bx-clone")
                  , s = o.children.slice(-e).clone().addClass("bx-clone");
                r.append(i).prepend(s)
            }
            o.loader.remove(),
            S(),
            "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0),
            o.viewport.height(v()),
            r.redrawSlider(),
            o.settings.onSliderLoad(o.active.index),
            o.initialized = !0,
            o.settings.responsive && t(window).bind("resize", Z),
            o.settings.auto && o.settings.autoStart && H(),
            o.settings.ticker && L(),
            o.settings.pager && q(o.settings.startSlide),
            o.settings.controls && W(),
            o.settings.touchEnabled && !o.settings.ticker && O()
        }
          , v = function() {
            var e = 0
              , s = t();
            if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                if (o.carousel) {
                    var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                    for (s = o.children.eq(n),
                    i = 1; i <= o.settings.maxSlides - 1; i++)
                        s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                } else
                    s = o.children.eq(o.active.index);
            else
                s = o.children;
            return "vertical" == o.settings.mode ? (s.each(function() {
                e += t(this).outerHeight()
            }),
            o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
                return t(this).outerHeight(!1)
            }).get()),
            e
        }
          , p = function() {
            var t = "100%";
            return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth),
            t
        }
          , u = function() {
            var t = o.settings.slideWidth
              , e = o.viewport.width();
            return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)),
            t
        }
          , f = function() {
            var t = 1;
            if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                if (o.viewport.width() < o.minThreshold)
                    t = o.settings.minSlides;
                else if (o.viewport.width() > o.maxThreshold)
                    t = o.settings.maxSlides;
                else {
                    var e = o.children.first().width();
                    t = Math.floor(o.viewport.width() / e)
                }
            else
                "vertical" == o.settings.mode && (t = o.settings.minSlides);
            return t
        }
          , x = function() {
            var t = 0;
            if (o.settings.moveSlides > 0)
                if (o.settings.infiniteLoop)
                    t = o.children.length / m();
                else
                    for (var e = 0, i = 0; e < o.children.length; )
                        ++t,
                        e = i + f(),
                        i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
            else
                t = Math.ceil(o.children.length / f());
            return t
        }
          , m = function() {
            return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
        }
          , S = function() {
            if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                if ("horizontal" == o.settings.mode) {
                    var t = o.children.last()
                      , e = t.position();
                    b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                } else if ("vertical" == o.settings.mode) {
                    var i = o.children.length - o.settings.minSlides
                      , e = o.children.eq(i).position();
                    b(-e.top, "reset", 0)
                }
            } else {
                var e = o.children.eq(o.active.index * m()).position();
                o.active.index == x() - 1 && (o.active.last = !0),
                void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
            }
        }
          , b = function(t, e, i, s) {
            if (o.usingCSS) {
                var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"),
                "slide" == e ? (r.css(o.animProp, n),
                r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                    D()
                })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"),
                r.css(o.animProp, n),
                r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                    b(s.resetValue, "reset", 0),
                    N()
                }))
            } else {
                var a = {};
                a[o.animProp] = t,
                "slide" == e ? r.animate(a, i, o.settings.easing, function() {
                    D()
                }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
                    b(s.resetValue, "reset", 0),
                    N()
                })
            }
        }
          , w = function() {
            for (var e = "", i = x(), s = 0; i > s; s++) {
                var n = "";
                o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s),
                o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1,
                o.pagerEl.addClass("bx-default-pager")),
                e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
            }
            o.pagerEl.html(e)
        }
          , T = function() {
            o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'),
            o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl),
            w()),
            o.pagerEl.on("click", "a", I)
        }
          , C = function() {
            o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"),
            o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"),
            o.controls.next.bind("click", y),
            o.controls.prev.bind("click", z),
            o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next),
            o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev),
            o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'),
            o.controls.directionEl.append(o.controls.prev).append(o.controls.next),
            o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
        }
          , E = function() {
            o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"),
            o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"),
            o.controls.autoEl = t('<div class="bx-controls-auto" />'),
            o.controls.autoEl.on("click", ".bx-start", k),
            o.controls.autoEl.on("click", ".bx-stop", M),
            o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop),
            o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),
            A(o.settings.autoStart ? "stop" : "start")
        }
          , P = function() {
            o.children.each(function() {
                var e = t(this).find("img:first").attr("title");
                void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
            })
        }
          , y = function(t) {
            o.settings.auto && r.stopAuto(),
            r.goToNextSlide(),
            t.preventDefault()
        }
          , z = function(t) {
            o.settings.auto && r.stopAuto(),
            r.goToPrevSlide(),
            t.preventDefault()
        }
          , k = function(t) {
            r.startAuto(),
            t.preventDefault()
        }
          , M = function(t) {
            r.stopAuto(),
            t.preventDefault()
        }
          , I = function(e) {
            o.settings.auto && r.stopAuto();
            var i = t(e.currentTarget)
              , s = parseInt(i.attr("data-slide-index"));
            s != o.active.index && r.goToSlide(s),
            e.preventDefault()
        }
          , q = function(e) {
            var i = o.children.length;
            return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)),
            o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i),
            void 0) : (o.pagerEl.find("a").removeClass("active"),
            o.pagerEl.each(function(i, s) {
                t(s).find("a").eq(e).addClass("active")
            }),
            void 0)
        }
          , D = function() {
            if (o.settings.infiniteLoop) {
                var t = "";
                0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()),
                t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
            }
            o.working = !1,
            o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
        }
          , A = function(t) {
            o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"),
            o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
        }
          , W = function() {
            1 == x() ? (o.controls.prev.addClass("disabled"),
            o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"),
            o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"),
            o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"),
            o.controls.next.removeClass("disabled")))
        }
          , H = function() {
            o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(),
            o.settings.autoHover && r.hover(function() {
                o.interval && (r.stopAuto(!0),
                o.autoPaused = !0)
            }, function() {
                o.autoPaused && (r.startAuto(!0),
                o.autoPaused = null)
            })
        }
          , L = function() {
            var e = 0;
            if ("next" == o.settings.autoDirection)
                r.append(o.children.clone().addClass("bx-clone"));
            else {
                r.prepend(o.children.clone().addClass("bx-clone"));
                var i = o.children.first().position();
                e = "horizontal" == o.settings.mode ? -i.left : -i.top
            }
            b(e, "reset", 0),
            o.settings.pager = !1,
            o.settings.controls = !1,
            o.settings.autoControls = !1,
            o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                r.stop()
            }, function() {
                var e = 0;
                o.children.each(function() {
                    e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                });
                var i = o.settings.speed / e
                  , s = "horizontal" == o.settings.mode ? "left" : "top"
                  , n = i * (e - Math.abs(parseInt(r.css(s))));
                N(n)
            }),
            N()
        }
          , N = function(t) {
            speed = t ? t : o.settings.speed;
            var e = {
                left: 0,
                top: 0
            }
              , i = {
                left: 0,
                top: 0
            };
            "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
            var s = "horizontal" == o.settings.mode ? -e.left : -e.top
              , n = "horizontal" == o.settings.mode ? -i.left : -i.top
              , a = {
                resetValue: n
            };
            b(s, "ticker", speed, a)
        }
          , O = function() {
            o.touch = {
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            },
            o.viewport.bind("touchstart", X)
        }
          , X = function(t) {
            if (o.working)
                t.preventDefault();
            else {
                o.touch.originalPos = r.position();
                var e = t.originalEvent;
                o.touch.start.x = e.changedTouches[0].pageX,
                o.touch.start.y = e.changedTouches[0].pageY,
                o.viewport.bind("touchmove", Y),
                o.viewport.bind("touchend", V)
            }
        }
          , Y = function(t) {
            var e = t.originalEvent
              , i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x)
              , s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
            if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(),
            "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                var n = 0;
                if ("horizontal" == o.settings.mode) {
                    var r = e.changedTouches[0].pageX - o.touch.start.x;
                    n = o.touch.originalPos.left + r
                } else {
                    var r = e.changedTouches[0].pageY - o.touch.start.y;
                    n = o.touch.originalPos.top + r
                }
                b(n, "reset", 0)
            }
        }
          , V = function(t) {
            o.viewport.unbind("touchmove", Y);
            var e = t.originalEvent
              , i = 0;
            if (o.touch.end.x = e.changedTouches[0].pageX,
            o.touch.end.y = e.changedTouches[0].pageY,
            "fade" == o.settings.mode) {
                var s = Math.abs(o.touch.start.x - o.touch.end.x);
                s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(),
                r.stopAuto())
            } else {
                var s = 0;
                "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x,
                i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y,
                i = o.touch.originalPos.top),
                !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(),
                r.stopAuto()) : b(i, "reset", 200)
            }
            o.viewport.unbind("touchend", V)
        }
          , Z = function() {
            var e = t(window).width()
              , i = t(window).height();
            (a != e || l != i) && (a = e,
            l = i,
            r.redrawSlider(),
            o.settings.onSliderResize.call(r, o.active.index))
        };
        return r.goToSlide = function(e, i) {
            if (!o.working && o.active.index != e)
                if (o.working = !0,
                o.oldIndex = o.active.index,
                o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e,
                o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index),
                "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index),
                o.active.last = o.active.index >= x() - 1,
                o.settings.pager && q(o.active.index),
                o.settings.controls && W(),
                "fade" == o.settings.mode)
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed),
                    o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }),
                    o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", o.settings.slideZIndex),
                        D()
                    });
                else {
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed);
                    var s = 0
                      , n = {
                        left: 0,
                        top: 0
                    };
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) {
                            var a = o.children.eq(o.children.length - 1);
                            n = a.position(),
                            s = o.viewport.width() - a.outerWidth()
                        } else {
                            var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position()
                        }
                    else if (o.carousel && o.active.last && "prev" == i) {
                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides)
                          , a = r.children(".bx-clone").eq(d);
                        n = a.position()
                    } else if ("next" == i && 0 == o.active.index)
                        n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(),
                        o.active.last = !1;
                    else if (e >= 0) {
                        var c = e * m();
                        n = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof n) {
                        var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed)
                    }
                }
        }
        ,
        r.goToNextSlide = function() {
            if (o.settings.infiniteLoop || !o.active.last) {
                var t = parseInt(o.active.index) + 1;
                r.goToSlide(t, "next")
            }
        }
        ,
        r.goToPrevSlide = function() {
            if (o.settings.infiniteLoop || 0 != o.active.index) {
                var t = parseInt(o.active.index) - 1;
                r.goToSlide(t, "prev")
            }
        }
        ,
        r.startAuto = function(t) {
            o.interval || (o.interval = setInterval(function() {
                "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
            }, o.settings.pause),
            o.settings.autoControls && 1 != t && A("stop"))
        }
        ,
        r.stopAuto = function(t) {
            o.interval && (clearInterval(o.interval),
            o.interval = null,
            o.settings.autoControls && 1 != t && A("start"))
        }
        ,
        r.getCurrentSlide = function() {
            return o.active.index
        }
        ,
        r.getCurrentSlideElement = function() {
            return o.children.eq(o.active.index)
        }
        ,
        r.getSlideCount = function() {
            return o.children.length
        }
        ,
        r.redrawSlider = function() {
            o.children.add(r.find(".bx-clone")).outerWidth(u()),
            o.viewport.css("height", v()),
            o.settings.ticker || S(),
            o.active.last && (o.active.index = x() - 1),
            o.active.index >= x() && (o.active.last = !0),
            o.settings.pager && !o.settings.pagerCustom && (w(),
            q(o.active.index))
        }
        ,
        r.destroySlider = function() {
            o.initialized && (o.initialized = !1,
            t(".bx-clone", this).remove(),
            o.children.each(function() {
                void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
            }),
            void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"),
            t(this).unwrap().unwrap(),
            o.controls.el && o.controls.el.remove(),
            o.controls.next && o.controls.next.remove(),
            o.controls.prev && o.controls.prev.remove(),
            o.pagerEl && o.settings.controls && o.pagerEl.remove(),
            t(".bx-caption", this).remove(),
            o.controls.autoEl && o.controls.autoEl.remove(),
            clearInterval(o.interval),
            o.settings.responsive && t(window).unbind("resize", Z))
        }
        ,
        r.reloadSlider = function(t) {
            void 0 != t && (n = t),
            r.destroySlider(),
            d()
        }
        ,
        d(),
        this
    }
}(jQuery);

/* jQuery responsive breadcrumbs plugin jQuery plugin
 * https://github.com/cm0s/jquery-rcrumbs
 *
 * Copyright (c) 2013, Nicolas Forney
 * Released under the MIT licence
 *
 * version: 1.0.2
 * 2013/05/12
 */
!function(i, t, s, e) {
    "use strict";
    function n(t, s) {
        this.element = t,
        this.$element = i(t),
        this.options = i.extend(!0, {}, a, s),
        this._defaults = a,
        this._name = r,
        n.prototype.plugin = this,
        this._init()
    }
    var r = "rcrumbs"
      , a = {
        version: "1.0.2",
        callback: {
            preCrumbsListDisplay: i.noop,
            preCrumbDisplay: i.noop,
            postCrumbsListDisplay: i.noop,
            postCrumbDisplay: i.noop
        },
        ellipsis: !0,
        windowResize: !0,
        nbUncollapsableCrumbs: 2,
        animation: {
            activated: !0,
            speed: 400
        }
    };
    n.prototype = {
        version: function() {
            return this.options.version
        },
        _init: function() {
            this.$element.hasClass("rcrumbs") || this.$element.addClass("rcrumbs"),
            this.nbCrumbDisplayed = 0,
            this.$crumbsList = i("ul", this.element),
            this.$crumbs = i("li", this.$crumbsList),
            this.$lastCrumb = this.$crumbs.last(),
            this.reversedCrumbs = i("li", this.$crumbsList).get().reverse(),
            this.lastNbCrumbDisplayed = 0,
            this.totalCrumbsWidth = 0,
            this._initCrumbs(),
            this._showOrHideCrumbsList(!0),
            this.options.windowResize && this._showOrHideCrumbsListOnWindowResize()
        },
        _getHiddenElWidth: function(t) {
            var s, e = i(t).clone(!1);
            return e.css({
                visibility: "hidden",
                position: "absolute"
            }),
            e.appendTo(this.$crumbsList),
            s = e.width(),
            e.remove(),
            s
        },
        _initCrumbs: function() {
            var t = this;
            i(this.$crumbsList).contents().filter(function() {
                return 3 === this.nodeType
            }).remove(),
            i.each(this.$crumbs, function() {
                var s = i(this);
                t._storeCrumbWidth(s)
            })
        },
        _storeCrumbWidth: function(i) {
            var t = this._getHiddenElWidth(i);
            return i.data("width", t),
            t
        },
        _showOrHideCrumbsList: function(t) {
            var s = this;
            this.remainingSpaceToDisplayCrumbs = this.$element.width(),
            this.nbCrumbDisplayed = 0,
            this.totalCrumbsWidth = 0,
            this.nextCrumbToShowWidth = e,
            this.options.callback.preCrumbsListDisplay(this),
            i.each(this.reversedCrumbs, function(e) {
                var n = i(this)
                  , r = i(s.reversedCrumbs[e + 1]);
                s._showOrHideCrumb(n, r, e, t)
            }),
            this.lastNbCrumbDisplayed = this.nbCrumbDisplayed,
            this.options.callback.postCrumbsListDisplay(this)
        },
        _showOrHideCrumb: function(i, t, s, e) {
            function n() {
                i.addClass("show"),
                o.lastNbCrumbDisplayed < o.nbCrumbDisplayed + 1 && o.options.animation.activated && !e ? (i.width(0),
                i.animate({
                    width: i.data("width")
                }, o.options.animation.speed, function() {
                    o.options.callback.postCrumbDisplay(i)
                })) : o.options.callback.postCrumbDisplay(i),
                o.nbCrumbDisplayed += 1
            }
            function r() {
                i.animate({
                    width: 0
                }, o.options.animation.speed, function() {
                    i.removeClass("show")
                })
            }
            function a(i) {
                i.css({
                    width: o.remainingSpaceToDisplayCrumbs + i.data("width") + "px"
                }),
                i.addClass("ellipsis")
            }
            this.options.callback.preCrumbDisplay(i);
            var o = this;
            this.remainingSpaceToDisplayCrumbs -= i.data("width"),
            s < this.options.nbUncollapsableCrumbs ? (n(),
            this.remainingSpaceToDisplayCrumbs < 0 && a(this.$lastCrumb),
            this.totalCrumbsWidth += i.data("width")) : this.remainingSpaceToDisplayCrumbs >= 0 ? (n(),
            this.totalCrumbsWidth += i.data("width")) : (this.lastNbCrumbDisplayed > this.nbCrumbDisplayed - 1 && this.options.animation.activated ? r() : i.removeClass("show"),
            this.nextCrumbToShowWidth || (this.nextCrumbToShowWidth = i.data("width")))
        },
        _showOrHideCrumbsListOnWindowResize: function() {
            var s = this;
            i(t).resize(function() {
                var t = s.$element.width();
                (t < s.totalCrumbsWidth || s.totalCrumbsWidth + s.nextCrumbToShowWidth < t) && (i.each(s.reversedCrumbs, function() {
                    var t = i(this);
                    t.stop(!0, !0)
                }),
                s._showOrHideCrumbsList()),
                t >= s.totalCrumbsWidth && s.$lastCrumb.hasClass("ellipsis") && s._disableEllipsis(s.$lastCrumb)
            })
        },
        _disableEllipsis: function(i) {
            i.css({
                width: "auto"
            }),
            i.removeClass("ellipsis")
        }
    },
    i.fn[r] = function(t) {
        if (n.prototype[t] && -1 === t.indexOf("_")) {
            var s = i.data(this[0], "plugin_" + r);
            if (s)
                return n.prototype[t].apply(s, Array.prototype.slice.call(arguments, 1));
            i.error("jquery." + r + " plugin must be initialized first on the element")
        } else {
            if ("object" == typeof t || !t)
                return this.each(function() {
                    i.data(this, "plugin_" + r) ? i.error("jquery." + r + " plugin cannot be instantiated multiple times on same element") : i.data(this, "plugin_" + r, new n(this,t))
                });
            i.error("Method " + t + " does not exist on jquery." + r)
        }
    }
}(jQuery, window, document);

/**
 * LineUp
 * ------
 * Fix heights of the cols in the same row
 *
 * @class
 * @param String selector
 * @param Object option
 */
!function(t) {
    var e = function() {
        this.init.apply(this, arguments)
    };
    t.extend(!0, e.prototype, {
        defaults: {
            onFontResize: !0,
            onResize: !0,
            checkFontInterval: 10,
            fontSamplerName: "lineup-font-size-sampler",
            hook: t.noop
        },
        options: {},
        nodes: null,
        checkFontTimer: null,
        sampler: null,
        init: function(e, i) {
            this.nodes = t(e),
            this.config(this.defaults).config(i),
            this.refresh(),
            this.get("onResize") && t(window).on("resize", t.proxy(this.refresh, this)),
            this.get("onFontResize") && this.onFontResize(t.proxy(this.refresh, this))
        },
        config: function(e) {
            return t.extend(this.options, e),
            this
        },
        get: function(t) {
            return this.options[t]
        },
        refresh: function() {
            var e, i, n, s;
            return e = this.nodes.toArray(),
            i = [],
            n = null,
            hook = this.get("hook"),
            e.sort(function(e, i) {
                return t(e).offset().top - t(i).offset().top
            }),
            s = function() {
                var e = 0;
                t(i).each(function() {
                    e = Math.max(e, t(this).height())
                }).each(function() {
                    t(this).height(e)
                }),
                i = []
            }
            ,
            this.reset(),
            t.each(e, function() {
                var e = t(this);
                null !== n && e.offset().top !== n && s(),
                n = e.offset().top,
                i.push(this)
            }),
            s(),
            hook = this.get("hook"),
            t.isFunction(hook) && hook(this),
            this
        },
        reset: function() {
            return this.nodes.css("height", ""),
            this
        },
        onFontResize: function(e) {
            var i, n, s = this;
            return i = this.get("fontSamplerName"),
            this.sampler = t("#" + i),
            n = function() {
                var t = s.sampler.height();
                s.sampler.data("size") !== t && (e(),
                s.sampler.data("size", t))
            }
            ,
            this.sampler.length || (this.sampler = t("<span>").text("M").css({
                position: "absolute",
                visibility: "hidden"
            }).attr("id", this.get("fontSamplerName")).appendTo(t("body"))),
            this.sampler.data("size", this.sampler.height()),
            this.checkFontTimer = setInterval(n, this.get("checkFontInterval")),
            this
        }
    }),
    t.fn.extend({
        lineUp: function(i) {
            var n, s;
            n = t(this),
            s = n.data("lineUp"),
            s instanceof e ? (s.config(i),
            s.refresh()) : n.data("lineUp", new e(this.selector,i))
        }
    }),
    function() {
        var e = t("script:last").data("lineupSelector");
        e && t.each(e.split(","), function(e, i) {
            t(i).lineUp()
        })
    }()
}(jQuery);

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr = function(a, b, c) {
    function B(a) {
        i.cssText = a
    }
    function C(a, b) {
        return B(m.join(a + ";") + (b || ""))
    }
    function D(a, b) {
        return typeof a === b
    }
    function E(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function F(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!E(e, "-") && i[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function G(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : D(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function H(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + o.join(d + " ") + d).split(" ");
        return D(b, "string") || D(b, "undefined") ? F(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "),
        G(e, b, c))
    }
    function I() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++)
                t[c[d]] = c[d]in j;
            return t.list && (t.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
            t
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        e.inputtypes = function(a) {
            for (var d = 0, e, g, h, i = a.length; d < i; d++)
                j.setAttribute("type", g = a[d]),
                e = j.type !== "text",
                e && (j.value = k,
                j.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(g) && j.style.WebkitAppearance !== c ? (f.appendChild(j),
                h = b.defaultView,
                e = h.getComputedStyle && h.getComputedStyle(j, null).WebkitAppearance !== "textfield" && j.offsetHeight !== 0,
                f.removeChild(j)) : /^(search|tel)$/.test(g) || (/^(url|email)$/.test(g) ? e = j.checkValidity && j.checkValidity() === !1 : e = j.value != k)),
                s[a[d]] = !!e;
            return s
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.8.3", e = {}, f = b.documentElement, g = "modernizr", h = b.createElement(g), i = h.style, j = b.createElement("input"), k = ":)", l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {
        svg: "http://www.w3.org/2000/svg"
    }, r = {}, s = {}, t = {}, u = [], v = u.slice, w, x = function(a, c, d, e) {
        var h, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : g + (d + 1),
                l.appendChild(j);
        return h = ["&#173;", '<style id="s', g, '">', a, "</style>"].join(""),
        l.id = g,
        (m ? l : n).innerHTML += h,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = f.style.overflow,
        f.style.overflow = "hidden",
        f.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        f.style.overflow = k),
        !!i
    }, y = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"),
            d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""),
            f = D(e[d], "function"),
            D(e[d], "undefined") || (e[d] = c),
            e.removeAttribute(d))),
            e = null,
            f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), z = {}.hasOwnProperty, A;
    !D(z, "undefined") && !D(z.call, "undefined") ? A = function(a, b) {
        return z.call(a, b)
    }
    : A = function(a, b) {
        return b in a && D(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = v.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(v.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(v.call(arguments)))
        };
        return e
    }
    ),
    r.flexbox = function() {
        return H("flexWrap")
    }
    ,
    r.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    }
    ,
    r.canvastext = function() {
        return !!e.canvas && !!D(b.createElement("canvas").getContext("2d").fillText, "function")
    }
    ,
    r.webgl = function() {
        return !!a.WebGLRenderingContext
    }
    ,
    r.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", m.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }),
        c
    }
    ,
    r.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    r.postmessage = function() {
        return !!a.postMessage
    }
    ,
    r.websqldatabase = function() {
        return !!a.openDatabase
    }
    ,
    r.indexedDB = function() {
        return !!H("indexedDB", a)
    }
    ,
    r.hashchange = function() {
        return y("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }
    ,
    r.history = function() {
        return !!a.history && !!history.pushState
    }
    ,
    r.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }
    ,
    r.websockets = function() {
        return "WebSocket"in a || "MozWebSocket"in a
    }
    ,
    r.rgba = function() {
        return B("background-color:rgba(150,255,150,.5)"),
        E(i.backgroundColor, "rgba")
    }
    ,
    r.hsla = function() {
        return B("background-color:hsla(120,40%,100%,.5)"),
        E(i.backgroundColor, "rgba") || E(i.backgroundColor, "hsla")
    }
    ,
    r.multiplebgs = function() {
        return B("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(i.background)
    }
    ,
    r.backgroundsize = function() {
        return H("backgroundSize")
    }
    ,
    r.borderimage = function() {
        return H("borderImage")
    }
    ,
    r.borderradius = function() {
        return H("borderRadius")
    }
    ,
    r.boxshadow = function() {
        return H("boxShadow")
    }
    ,
    r.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }
    ,
    r.opacity = function() {
        return C("opacity:.55"),
        /^0.55$/.test(i.opacity)
    }
    ,
    r.cssanimations = function() {
        return H("animationName")
    }
    ,
    r.csscolumns = function() {
        return H("columnCount")
    }
    ,
    r.cssgradients = function() {
        var a = "background-image:"
          , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , c = "linear-gradient(left top,#9f9, white);";
        return B((a + "-webkit- ".split(" ").join(b + a) + m.join(c + a)).slice(0, -a.length)),
        E(i.backgroundImage, "gradient")
    }
    ,
    r.cssreflections = function() {
        return H("boxReflect")
    }
    ,
    r.csstransforms = function() {
        return !!H("transform")
    }
    ,
    r.csstransforms3d = function() {
        var a = !!H("perspective");
        return a && "webkitPerspective"in f.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }),
        a
    }
    ,
    r.csstransitions = function() {
        return H("transition")
    }
    ,
    r.fontface = function() {
        var a;
        return x('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr")
              , f = e.sheet || e.styleSheet
              , g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }),
        a
    }
    ,
    r.generatedcontent = function() {
        var a;
        return x(["#", g, "{font:0/0 a}#", g, ':after{content:"', k, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    }
    ,
    r.video = function() {
        var a = b.createElement("video")
          , c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c),
                c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }
    ,
    r.audio = function() {
        var a = b.createElement("audio")
          , c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c),
                c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return c
    }
    ,
    r.localstorage = function() {
        try {
            return localStorage.setItem(g, g),
            localStorage.removeItem(g),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    r.sessionstorage = function() {
        try {
            return sessionStorage.setItem(g, g),
            sessionStorage.removeItem(g),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    r.webworkers = function() {
        return !!a.Worker
    }
    ,
    r.applicationcache = function() {
        return !!a.applicationCache
    }
    ,
    r.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
    }
    ,
    r.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == q.svg
    }
    ,
    r.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(l.call(b.createElementNS(q.svg, "animate")))
    }
    ,
    r.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(l.call(b.createElementNS(q.svg, "clipPath")))
    }
    ;
    for (var J in r)
        A(r, J) && (w = J.toLowerCase(),
        e[w] = r[J](),
        u.push((e[w] ? "" : "no-") + w));
    return e.input || I(),
    e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                A(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    B(""),
    h = j = null,
    function(a, b) {
        function l(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function n(a) {
            var b = j[a[h]];
            return b || (b = {},
            i++,
            a[h] = i,
            j[i] = b),
            b
        }
        function o(a, c, d) {
            c || (c = b);
            if (k)
                return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a),
            g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }
        function p(a, c) {
            a || (a = b);
            if (k)
                return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode()
              , e = 0
              , f = m()
              , g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function q(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            k || q(a, c),
            a
        }
        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                g = "hidden"in a,
                k = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g = !0,
                k = !0
            }
        }
        )();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s,
        r(b)
    }(this, b),
    e._version = d,
    e._prefixes = m,
    e._domPrefixes = p,
    e._cssomPrefixes = o,
    e.hasEvent = y,
    e.testProp = function(a) {
        return F([a])
    }
    ,
    e.testAllProps = H,
    e.testStyles = x,
    e.prefixed = function(a, b, c) {
        return b ? H(a, b, c) : H(a, "pfx")
    }
    ,
    e
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1,
            !q && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout
          , l = b.createElement(a)
          , o = 0
          , r = 0
          , u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1,
        y[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }
        ,
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
        m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
        1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }
    , x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="),
                (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a),
                            l()
                        }
                        ),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(),
                        a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    l()
                                }
                            }(k[n])),
                            g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    B.addPrefix = function(a, b) {
        z[a] = b
    }
    ,
    B.addFilter = function(a) {
        x.push(a)
    }
    ,
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f,
        k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1,
            c(),
            k.onload = k.onreadystatechange = null)
        }
        ,
        m(function() {
            l || (l = 1,
            c(1))
        }, e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n),
        m(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
;
