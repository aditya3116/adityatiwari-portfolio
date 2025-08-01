! function (c) {
    "use strict";

    function n(t, e, n) {
        var o = c(".menu-icon")[0].getBoundingClientRect(),
            i = t.pageX - o.left,
            a = t.pageY - o.top,
            s = window.pageYOffset || document.documentElement.scrollTop;
        TweenMax.to(e, .3, {
            x: (i - o.width / 2) / o.width * n,
            y: (a - o.height / 2 - s) / o.width * n,
            ease: Power2.easeOut
        })
    }
    var e = c(window);
    c('a[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var t = c(this.hash);
            if ((t = t.length ? t : c("[name=" + this.hash.slice(1) + "]")).length) return c("html,body").animate({
                scrollTop: t.offset().top - 75
            }, 1e3), !1
        }
    });
    ! function () {
        var t = void 0,
            e = void 0,
            n = function () {
                e.addEventListener("click", function () {
                    return o(t, "nav-active")
                })
            };
        c(".nav__list-item a").on("click", function () {
            c("body").removeClass("nav-active")
        });
        var o = function (t, e) {
            t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e)
        };
        t = document.querySelector("body"), e = document.querySelector(".menu-icon"), document.querySelectorAll(".nav__list-item"), n()
    }();
    c(".menu-icon").on("mouseleave", function (t) {
        TweenMax.to(this, .3, {
            scale: 1
        }), TweenMax.to(".icon-circle, .icon-m", .3, {
            scale: 1,
            x: 0,
            y: 0
        })
    }), c(".menu-icon").on("mouseenter", function (t) {
        TweenMax.to(this, .3, {
            transformOrigin: "0 0",
            scale: 1
        }), TweenMax.to(".icon-circle", .3, {
            scale: 1.2
        })
    }), c(".menu-icon").on("mousemove", function (t) {
        var e;
        n(e = t, ".icon-circle", 60), n(e, ".icon-m", 40)
    });
    var o = !0;
    e.on("scroll", function () {
        var t = e.scrollTop();
        c("#services").offset().top - 75 <= t && o && (c(".svg-icon").each(function () {
            c(".svg-icon").drawsvg({
                duration: 4e3
            }).drawsvg("animate")
        }), o = !1)
    }), c(".cover-bg, section").each(function () {
        var t = c(this).attr("data-image-src");
        void 0 !== t && !1 !== t && c(this).css("background-image", "url(" + t + ")")
    }), e.on("scroll", function () {
        c(".bar span").each(function () {
            var t = c(this).offset().top + c(this).outerHeight(),
                e = c(window).scrollTop() + c(window).height(),
                n = c(this).attr("data-width");
            t < e && c(this).css({
                width: n
            })
        })
    }), c(".header .box-text h1 .typed").typed({
        strings: ["Cybersecurity", "AWS", "Frontend and Backend", "Machine Learning and Deep Learning"],
        loop: !0,
        startDelay: 500,
        backDelay: 2000
    }), c(".about .owl-carousel").owlCarousel({
        loop: !0,
        items: 1,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: ['<span style="font-size:2rem;">&#8592;</span>', '<span style="font-size:2rem;">&#8594;</span>']
    }), c("#contact-form").validator(), c("#contact-form").on("submit", function (t) {
        if (!t.isDefaultPrevented()) {
            return c.ajax({
                type: "POST",
                url: "contact.php",
                data: c(this).serialize(),
                success: function (t) {
                    var e = "alert-" + t.type,
                        n = t.message,
                        o = '<div class="alert ' + e + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + n + "</div>";
                    e && n && (c("#contact-form").find(".messages").html(o), c("#contact-form")[0].reset())
                }
            }), !1
        }
    }), c(window).on("load", function () {
        c(".loader").fadeOut(500);
        var e = c(".gallery").isotope({});
        c(".gallery").isotope({
            itemSelector: ".item-img",
            transitionDuration: "0.5s"
        }), c(".gallery .single-image").fancybox({
            transitionIn: "elastic",
            transitionOut: "elastic",
            speedIn: 600,
            speedOut: 200,
            overlayShow: !1
        }), c(".filtering").on("click", "button", function () {
            var t = c(this).attr("data-filter");
            e.isotope({
                filter: t
            })
        }), c(".filtering").on("click", "button", function () {
            c(this).addClass("active").siblings().removeClass("active")
        }), c(".filtering button").on("click", function () {
            c("html, body").animate({
                scrollTop: c(".gallery").offset().top - 60
            }, 600)
        }), new StickySidebar("#sidebar", {
            topSpacing: 60,
            bottomSpacing: 60,
            containerSelector: ".container",
            innerWrapperSelector: ".sidebar__inner"
        })
    })
}(jQuery);
