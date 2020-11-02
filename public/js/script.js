'use strict';

$(document).ready(function () {
    ;
    $(document).find('.partners__list').slick({

        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $(document).find('.arrow_prev'),
        nextArrow: $(document).find('.arrow_next')
    });
    $(document).find('.principle__list').slick({

        dots: true,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
        // prevArrow: $(document).find('.arrow_next'),
        // nextArrow: $(document).find('.arrow_prev'),
    });
    $(document).find('.event-news__btn').on('click', function (e) {
        e.preventDefault();
        $(document).find('.event-news__text_full').toggleClass('news-open');
        $(document).find('.event-news__btn').toggleClass('news-open');
        if ($(document).find('.event-news__text_full').hasClass('news-open')) {
            $(document).find('.event-news__text_full').fadeIn();
        } else {
            $(document).find('.event-news__text_full').fadeOut();
        }
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJzbGljayIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhcnJvd3MiLCJhZGFwdGl2ZUhlaWdodCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsImZhZGVJbiIsImZhZGVPdXQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQUM7QUFDM0JGLE1BQUVDLFFBQUYsRUFBWUUsSUFBWixDQUFpQixpQkFBakIsRUFBb0NDLEtBQXBDLENBQTBDOztBQUV0Q0MsY0FBTSxLQUZnQztBQUd0Q0Msa0JBQVUsSUFINEI7QUFJdENDLGVBQU8sR0FKK0I7QUFLdENDLHNCQUFjLENBTHdCO0FBTXRDQyx3QkFBZ0IsQ0FOc0I7QUFPdENDLG1CQUFXVixFQUFFQyxRQUFGLEVBQVlFLElBQVosQ0FBaUIsYUFBakIsQ0FQMkI7QUFRdENRLG1CQUFXWCxFQUFFQyxRQUFGLEVBQVlFLElBQVosQ0FBaUIsYUFBakI7QUFSMkIsS0FBMUM7QUFVQUgsTUFBRUMsUUFBRixFQUFZRSxJQUFaLENBQWlCLGtCQUFqQixFQUFxQ0MsS0FBckMsQ0FBMkM7O0FBRXZDQyxjQUFNLElBRmlDO0FBR3ZDTyxnQkFBUSxLQUgrQjtBQUl2Q04sa0JBQVUsSUFKNkI7QUFLdkNPLHdCQUFnQixJQUx1QjtBQU12Q04sZUFBTyxHQU5nQztBQU92Q0Msc0JBQWMsQ0FQeUI7QUFRdkNDLHdCQUFnQjtBQUNoQjtBQUNBO0FBVnVDLEtBQTNDO0FBWUFULE1BQUVDLFFBQUYsRUFBWUUsSUFBWixDQUFpQixrQkFBakIsRUFBcUNXLEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELFVBQVNDLENBQVQsRUFBWTtBQUN6REEsVUFBRUMsY0FBRjtBQUNBaEIsVUFBRUMsUUFBRixFQUFZRSxJQUFaLENBQWlCLHdCQUFqQixFQUEyQ2MsV0FBM0MsQ0FBdUQsV0FBdkQ7QUFDQWpCLFVBQUVDLFFBQUYsRUFBWUUsSUFBWixDQUFpQixrQkFBakIsRUFBcUNjLFdBQXJDLENBQWlELFdBQWpEO0FBQ0EsWUFBR2pCLEVBQUVDLFFBQUYsRUFBWUUsSUFBWixDQUFpQix3QkFBakIsRUFBMkNlLFFBQTNDLENBQW9ELFdBQXBELENBQUgsRUFBcUU7QUFDakVsQixjQUFFQyxRQUFGLEVBQVlFLElBQVosQ0FBaUIsd0JBQWpCLEVBQTJDZ0IsTUFBM0M7QUFDSCxTQUZELE1BRU87QUFDSG5CLGNBQUVDLFFBQUYsRUFBWUUsSUFBWixDQUFpQix3QkFBakIsRUFBMkNpQixPQUEzQztBQUNIO0FBQ0osS0FURDtBQVVILENBakNEIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHs7XG4gICAgJChkb2N1bWVudCkuZmluZCgnLnBhcnRuZXJzX19saXN0Jykuc2xpY2soe1xuXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgcHJldkFycm93OiAkKGRvY3VtZW50KS5maW5kKCcuYXJyb3dfcHJldicpLFxuICAgICAgICBuZXh0QXJyb3c6ICQoZG9jdW1lbnQpLmZpbmQoJy5hcnJvd19uZXh0JyksXG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkuZmluZCgnLnByaW5jaXBsZV9fbGlzdCcpLnNsaWNrKHtcblxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIC8vIHByZXZBcnJvdzogJChkb2N1bWVudCkuZmluZCgnLmFycm93X25leHQnKSxcbiAgICAgICAgLy8gbmV4dEFycm93OiAkKGRvY3VtZW50KS5maW5kKCcuYXJyb3dfcHJldicpLFxuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLmZpbmQoJy5ldmVudC1uZXdzX19idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmV2ZW50LW5ld3NfX3RleHRfZnVsbCcpLnRvZ2dsZUNsYXNzKCduZXdzLW9wZW4nKTtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmV2ZW50LW5ld3NfX2J0bicpLnRvZ2dsZUNsYXNzKCduZXdzLW9wZW4nKTtcbiAgICAgICAgaWYoJChkb2N1bWVudCkuZmluZCgnLmV2ZW50LW5ld3NfX3RleHRfZnVsbCcpLmhhc0NsYXNzKCduZXdzLW9wZW4nKSkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmV2ZW50LW5ld3NfX3RleHRfZnVsbCcpLmZhZGVJbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmV2ZW50LW5ld3NfX3RleHRfZnVsbCcpLmZhZGVPdXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il19
