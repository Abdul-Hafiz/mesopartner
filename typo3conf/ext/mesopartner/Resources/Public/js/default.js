$(document).ready(function () {
    if ($('.slider-init').length) {
        var item_count = parseInt($('.slider-init').find('.slide').length);
        $('.slider-init.owl-carousel').owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            touchDrag: false,
            mouseDrag: false,
            animateOut: 'fadeOut',
            navText:['',''],
            onInitialize: function (event) {
                if (item_count <= 1) {
                    this.options.autoplay = false;
                    this.options.loop = false;
                    this.options.dots = false;
                    this.options.nav = false;
                } else {
                    this.options.autoplay = true;
                    this.options.loop = true;
                    this.options.dots = true;
                    this.options.nav = true;
                }
            }
        });
    }

    $('.go-top').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 800);
    });

    $('.arrow').on('click', function () {
        if ($(this).parents('.megamenu-main').length) {
            $(this).parents('.col-md-3').siblings().find('li').removeClass('sun-nav--open').find('ul').slideUp('fast');
            $(this).parent().toggleClass('sun-nav--open').find('ul').slideToggle('fast');
            navcheck();
        } else {
            $(this).parent().toggleClass('sun-nav--open').find('.megamenu-main').slideToggle('fast');
            navcheck();
        }
    });

    $('.menu-trigger').on('click', function () {
        navcheck();
        $('body').toggleClass('menu--open');
        $('.navigation').slideToggle('fast');
    });
});

$(window).resize(function () {
    if (winw() < 992) {
        navcheck();
    }
});

$(window).load(function () {
});

function navcheck() {
    if (winw() < 993) {
        $('.navigation').css('max-height', winh() - headerh());
    }
}

function winw() {
    return $(window).width();
}
function winh() {
    return $(window).height();
}
function headerh() {
    return $('header').outerHeight();
}

$(window).scroll(function () {
    var sticky = $('body'),
            scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $('header.main-page').addClass('fixed');
    } else {
        $('header.main-page').removeClass('fixed');
    }
});