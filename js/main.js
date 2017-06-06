$('document').ready(function () {

    'use strict';
    $('.results .carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $('.past-acheivers ul.tabs').tabs('select_tab', 'acheivers__medical');
    $('.past-acheivers .carousel').carousel({
        // dist: 0,
        // padding: 60,
        // noWrap: true,
        // indicators: true,
        // shift: 99
    });

    $('.peoples.carousel').carousel({
        duration: 450,
        dist: -70
    });

    $('.peoples.carousel a').click(function (e) {
        e.preventDefault();
        var currentVal = $(this).find('img').data('testimonial');
        $('.peoples-testimonials .testimonial').addClass('hide');
        $('.peoples-testimonials .testimonial#' + currentVal).removeClass('hide');
    });
});