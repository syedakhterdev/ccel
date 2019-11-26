$(document).ready(function() {
    /* Img-swaper start */
    /* Initiate */
    var img_src = [];
    var i = 0;
    $('.img-swaper').each(function() {
        img_src[i++] = $(this).find('img').attr('src');
    });
    $(".img-swaper-thumb").attr("src", img_src[1]);
    /* on Next Button */
    $("#btn-next").click(function() {
        var img_src = [];
        var i = 0;
        $('.img-swaper').each(function() {
            img_src[i++] = $(this).find('img').attr('src');
            if ($(this).hasClass("active")) {
                active = i;
            }
        });
        if (active >= img_src.length) {
            $(".industry-slider-prev").html('<img src=' + img_src[1] + '>');
        } else if (active <= 1) {
            $(".industry-slider-prev").html('<img src=' + img_src[img_src.length] + '>');
        } else {
            $(".industry-slider-prev").html('<img src=' + img_src[active - 1] + '>');
        }
    });
    $("#btn-prev").click(function() {
        var img_src = [];
        var i = 0;
        $('.img-swaper').each(function() {
            img_src[i++] = $(this).find('img').attr('src');
            if ($(this).hasClass("active")) {
                active = i;
            }
        });
        if (active >= img_src.length) {
            $(".industry-slider-prev").html('<img src=' + img_src[1] + '>');
        } else if (active <= 1) {
            $(".industry-slider-prev").html('<img src=' + img_src[img_src.length] + '>');
        } else {
            $(".industry-slider-prev").html('<img src=' + img_src[active + 1] + '>');
        }
    });

    new WOW().init();

    $(".owl-carousel").owlCarousel({
        dots: true,
        loop: true,
        responsive: {
            1: {
                items: 1,
                margin: 6
            },
            991: {
                items: 2,
                margin: 15
            },
            1200: {
                items: 2,
                margin: 30
            }
        }
    });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $("header").addClass("header-dark");
    } else {
        $("header").removeClass("header-dark");
    }
});

$("header .navbar form a.btn-search").click(function() {
    $("header .navbar form .search-bar").fadeIn();
});

$("header .navbar form .search-bar i.fa").click(function() {
    $("header .navbar form .search-bar").fadeOut();
});