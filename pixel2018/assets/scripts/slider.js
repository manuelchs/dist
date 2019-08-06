$(document).ready(function() {
    $('.clientes').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});
$(document).ready(function() {
    $('.services').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});
$(document).ready(function() {
    $('.hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });
});

$('.hero').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(slick.$slides.get(currentSlide)).children().addClass("disappear");
    $(slick.$slides.get(currentSlide)).children().removeClass("appear");

    $(slick.$slides.get(nextSlide)).children().removeClass("disappear");
    $(slick.$slides.get(nextSlide)).children().addClass("appear");
});

$('.hero').on('init', function(event, slick){
    $(slick.$slides.get(0)).children().addClass("appear");
});