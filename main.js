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

    // $(".calendar__date").slick({
    //     slidesToShow: 5,
    //     dots: false,
    //     prevArrow: $("#calendar-prev"),
    //     nextArrow: $("#calendar-next"),
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 3,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // });
    $(".calendar__items").slick({
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

    $('.photos__slider').slick({
        // arrows:false,
        dots:false,
        infinity: true,
        slidesToShow:3,
        centerMode: true,
        prevArrow: $('#photos__prev'),
        nextArrow: $('#photos__next'),
    });

    $("#burger").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
        $("body").toggleClass("lock");
    });

    $(".icon__submenu").on("click", function () {
        $(this).closest(".dropdown").toggleClass("active");
    });


    $('#form').on('submit', function(e){
        let html = '<div class="result"><i class="icon icon__success"></i><div class="head2__title">Thank You!</div><p>Your message has been sent successfully!</p><a href="/" class="yellowbtn">Go to main page</a></div>';
        $(this).parent().html(html);
    });

    
    $('.storys__sliders').slick({
        arrows:false,
        dots:true
    });
    $('.slider__items').slick({
        arrows:false,
        dots:true
    });

    $('.career__btn').on('click', function(e){
        e.preventDefault();
        $('.career__btn').not(this).removeClass('active');
        $(this).addClass('active');
        let id = $(this).attr('href');
        $(id).addClass('active');
        $('.career__tab').not(id).removeClass('active');
    });

    $('.spoiler__btn').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    $('.cancelbtn').on('click', function(e){
        $.magnificPopup.close();
    });


    function showHidePassBtn(){
        $('input[type="password"]').wrap('<div class="rmpass"></div>');
        $('.rmpass').append('<button class="rmpass__btn"></button>');
        $('.rmpass__btn').on('click', function(e){
            e.preventDefault();
            let pass = $(this).closest('.rmpass').find('input');
            if(pass.attr('type')=='password'){
                pass.attr('type', 'textbox');
                $(this).addClass('active');
            }else{
                pass.attr('type', 'password');
                $(this).removeClass('active');
            }
        });
    }
    showHidePassBtn();

   
});
