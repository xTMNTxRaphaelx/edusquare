$('document').ready(function() {
    $(".scrollspy").scrollSpy();

    function stickyNess() {
    var $sticky = $(".exams-list");
    var $stickyrStopper = $(".page-footer");
    if (!!$sticky.offset()) {
      // make sure ".sticky" element exists

      var generalSidebarHeight = $sticky.innerHeight();
      var stickyTop = $sticky.offset().top;
      var stickOffset = 0;
      var stickyStopperPosition = $stickyrStopper.offset().top;
      var stopPoint =
        stickyStopperPosition - generalSidebarHeight - stickOffset;
      var diff = stopPoint + stickOffset;

      $(window).scroll(function() {
        // scroll event
        var windowTop = $(window).scrollTop(); // returns number
        if (stopPoint < windowTop) {
          $sticky.css({
            position: "absolute",
            top: diff + (windowTop - stopPoint)
          });
        } else if (stickyTop < windowTop + stickOffset) {
          $sticky.css({
            position: "fixed",
            top: stickOffset
          });
        } else {
          $sticky.css({
            position: "absolute",
            top: "initial"
          });
        }
      });
    }
  }
  stickyNess();
})