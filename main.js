jQuery(function ($) {
    $(".head__slider").slick({
        infinity: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // arrows: false,
        dots: true,
        prevArrow: $("#head__slider-prev"),
        nextArrow: $("#head__slider-next"),
        appendDots: $(".head__slider_bullets"),
    });

    $(".calendar__date").slick({
        slidesToShow: 5,
        dots: false,
        prevArrow: $("#calendar-prev"),
        nextArrow: $("#calendar-next"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
