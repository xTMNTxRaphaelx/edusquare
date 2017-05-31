'use strict';
$('document').ready(function (e) {

    $('.peoples.carousel').carousel();
    $('.testimonial-carousel.carousel').carousel();
    
    $('.peoples.carousel a').click(function (e) {
        e.preventDefault();
        var currentVal = $(this).find('img').data('testimonial');
        $('.testimonials-section .testimonial').addClass('hide');
        $('.testimonials-section .testimonial#'+currentVal).removeClass('hide');
    });
});