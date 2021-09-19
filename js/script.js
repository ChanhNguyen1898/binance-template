$(document).ready(function() {
    $('.css-oymnjk').hide();
    $('.css-1wobcdl').click(function() {
        $('.css-oymnjk').fadeIn();
    });
    $('.menu-item').click(function() {
        $(this).toggleClass('css-1pkwjgt css-1nxq18a');
        $(this).next().toggleClass('css-1cuk2y css-17xlfum');
    });
    $('.css-110oij1, .css-1pysja1').click(function() {
        $('.css-oymnjk').fadeOut();
    });
    // slick1 slider
    $(".slick1").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dot: false,
        autoplay: true,
        vertical: true
    });
    // slick2 slider
    $(".slick2").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev css-1njv131"><span class="bullet css-4cffwv"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="mirror css-3kwgah"><path d="M10.5 4l1.41 1.41-5.1 5.1h14.16v1.99H6.82l5.09 5.09L10.5 19 3 11.5 10.5 4z" fill="currentColor"></path></svg></span></button>',
        nextArrow: '<button class="slick-next css-1njv131"><span class="bullet css-4cffwv"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="mirror css-3kwgah"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></span></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
    });
    $('.myTabs').each(function() {
        var $myTabs = $(this);
        $myTabs.find('.css-gnqbje').hide().first().show();
        $myTabs.find('.css-1ajvsun:first').addClass('active').show();
        $myTabs.find('.css-1ajvsun').click(function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            $myTabs.find('.css-gnqbje').hide();
            var tabLink = $(this).attr('rel');
            $(tabLink).show();
            return false;
        });
    });
    $('.slideToggle').each(function() {
        $('.btnToggle').click(function() {
            $(this).toggleClass('active');
            var tabRel = $(this).attr('rel');
            $(tabRel).slideToggle();
            $(".css-1qu0gon:visible").not(tabRel).slideToggle();
            $(".css-1qu0gon:visible").not(tabRel).prev().toggleClass('active');
        });
    });

});
