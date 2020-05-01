$(document).ready(function(){
    /* Слайдер */

    $('.news_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.letters_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.clients_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.consulting_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    /* Аккордион */

    (function(){
        var flag = true;

        $('.maps_item').on('click', function(e){
            e.preventDefault();

            var
                $this = $(this),
                container = $this.closest('.maps_accordion'),
                item = $this.closest('.maps_item'),
                currentContent = item.find('.maps_item-content'),
                duration = 500;

            if (flag) {
                flag = false;
                if (!item.hasClass('active')) {

                    item
                        .addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.maps_item-content')
                        .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                } else {

                    item.removeClass('active');
                    currentContent.slideUp(function() {
                        flag = true
                    });
                }
            }
        });
    })();

    /* Модальное окно политики */

    $('body').on('click','.politic, .order_politic, .politic-modal', function(){

        $.fancybox.open({
            src  : '#modal-polit-fancybox',
            type : 'inline',
            smallBtn: false,
            buttons: ""
        });

        return false;
    });


    /* Переход по якорям */

    // $('a[href^="#"]').on('click', function(event) {
    //     event.preventDefault();
    //
    //     var sc = $(this).attr("href"),
    //         dn = $(sc).offset().top;
    //
    //     $('html, body').animate({scrollTop: dn}, 1500);
    //
    // });

    /*  Анимация AOS  */

    aos_onload();

    function aos_onload(){
        setTimeout(function() {
            AOS.init();

            AOS.init({
                duration: 800,
                once: true
            });
        }, 10);
    }

    // window.onload = function() {
    //     aos_onload();
    // };


    $('body').on('click','.menu-item, .modal-close-form', function(){
        if (window.innerWidth <= 1200) {
            $(".nav-mobile-block").click();
        }

    });

    /* Тултип */

    // $('.service_item').tooltipster({
    //     theme: 'tooltipster-noir',
    //     contentCloning: true,
    //     interactive: true,
    //     maxWidth: 400,
    //     trigger: 'click'
    // });

    /* Смена телефона и адреса */

    $('.city__item').click(function(){

        var city_text    = $(this).text();
        var city_phone   = $(this).attr("data-phone");
        var city_address = $(this).attr("data-address");
        $(".phone").text(city_phone);
        $(".city_display").text(city_text);
        $(".address").text(city_address);

        $.cookie('city', city_text, { expires: 7, path: '/' });

    });

    $('.city__item[data-value="'+$.cookie('city')+'"]').click();

});

/* Маска телефона */

$('input[type="tel"]').mask("+7 (999) 999-99-99");


/* Библиотека alertify */

alertify.set('notifier', 'position', 'bottom-right');
alertify.set('notifier', 'delay', 10);

document.addEventListener('wpcf7mailsent', function( event ) {
    alertify.success(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7invalid', function( event ) {
    alertify.warning(event.detail.apiResponse.message);
}, false);

document.addEventListener('wpcf7mailfailed', function( event ) {
    alertify.error(event.detail.apiResponse.message);
}, false);


$(document).on('click', '.wpcf7-submit', function(e){
    if( $('.ajax-loader').hasClass('is-active') ) {
        e.preventDefault();
        return false;
    }
});

/* Мобильная навигация */

$(document).mouseup(function (e){ // событие клика по веб-документу
    if ($(".header .nav-mobile-block").hasClass("active-menu")) {
        var div = $(".mobile-menu-fixed"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("header .nav-mobile-block").click();
        }
    }
});

$('body').on('click','.nav-mobile-block', function(){
    if ($(this).hasClass("active-menu")) {
        $(this).removeClass("active-menu");
        $('.mobile-menu-fixed').stop().css({
            "right" : "-300px"
        });
        $("body, html").removeClass("no-scroll");
    } else {
        $(this).addClass("active-menu");
        $('.mobile-menu-fixed').stop().css({
            "right" : "0px"
        });
        $("body, html").addClass("no-scroll");
    }
});


function feedback_update_height(){
    var array_feedback_height 	= [];

    for (var i = 0; i < $(".equipment_slider .equipment_slide .equipment_text").length; i++) {
        var unit_feedback_height 	= $(".equipment_slider .equipment_slide .equipment_text:eq("+i+")").innerHeight();
        array_feedback_height.push(+unit_feedback_height);
    }
    var unit_feedback_max_height = Math.max.apply(null, array_feedback_height);
    $(".equipment_slider .equipment_slide .equipment_text").css({
        "min-height": unit_feedback_max_height
    });
}

