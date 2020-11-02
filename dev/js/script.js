$(document).ready(function () {;
    $(document).find('.partners__list').slick({

        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $(document).find('.arrow_prev'),
        nextArrow: $(document).find('.arrow_next'),
    });
    $(document).find('.principle__list').slick({

        dots: true,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: $(document).find('.arrow_next'),
        // nextArrow: $(document).find('.arrow_prev'),
    });
    $(document).find('.event-news__btn').on('click', function(e) {
        e.preventDefault();
        $(document).find('.event-news__text_full').toggleClass('news-open');
        $(document).find('.event-news__btn').toggleClass('news-open');
        if($(document).find('.event-news__text_full').hasClass('news-open')) {
            $(document).find('.event-news__text_full').fadeIn();
        } else {
            $(document).find('.event-news__text_full').fadeOut();
        }
    });
});