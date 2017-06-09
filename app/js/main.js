"use strict";

/**
   * Hero Slider
   */
function heroSlider() {
  $(".edusquare-slider").slider({
    indicators: false,
    height: 500
  });
  //   Hero Slider Nav Icons {Reset slider timeout with pause and start.}
  $(".edusquare-slider i.left-icon").click(function(e) {
    e.preventDefault();
    $(".edusquare-slider").slider("pause");
    $(".edusquare-slider").slider("prev");
    $(".edusquare-slider").slider("start");
  });
  $(".edusquare-slider i.right-icon").click(function(e) {
    e.preventDefault();
    $(".edusquare-slider").slider("pause");
    $(".edusquare-slider").slider("next");
    $(".edusquare-slider").slider("start");
  });
}

function coursesFn() {
  // box close event
  console.log("ichi");
  $(".course-card-content i").click(function(e) {
    e.preventDefault();
    $(this).closest(".course-card-content").removeClass("active").hide();
  });
}

function ourClasses() {
  $(".courses-type ul.tabs li.tab a").hover(function() {
    var data = $(this).attr("href");
    $(data).siblings(".course-card-content").hide();
    $(data).show();
  });
}

function ourResults() {
  $(".our-results ul.tabs").tabs({
    onShow: function(e) {
      $(".our-results .carousel.carousel-slider").carousel({
        fullWidth: true
      });
    }
  });
}

$("document").ready(function() {
  heroSlider();
  coursesFn();
  ourClasses();
  ourResults();

  //   $(".past-acheivers ul.tabs").tabs("select_tab", "acheivers__medical");
  //   $(".past-acheivers .carousel").carousel({});

  $(".peoples.carousel").carousel({
    duration: 450,
    dist: -70
  });

  $(".peoples.carousel a").click(function(e) {
    e.preventDefault();
    var currentVal = $(this).find("img").data("testimonial");
    $(".peoples-testimonials .testimonial").addClass("hide");
    $(".peoples-testimonials .testimonial#" + currentVal).removeClass("hide");
  });
});
