'use strict';
$('document').ready(function (e) {

    $('.peoples.carousel').carousel({
        duration: 450,
        dist: -70
    });
    
    $('.peoples.carousel a').click(function (e) {
        e.preventDefault();
        var currentVal = $(this).find('img').data('testimonial');
        $('.peoples-testimonials .testimonial').addClass('hide');
        $('.peoples-testimonials .testimonial#'+currentVal).removeClass('hide');
    });
}); 