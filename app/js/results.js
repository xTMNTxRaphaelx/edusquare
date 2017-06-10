$("document").ready(function() {
  $(".scrollspy").scrollSpy();
  
  var trString = "";

  function loadTable(tabledata, id, limit) {
    var isViewMore= false;
    $.each(tabledata, function(i, data) {
      if (i === 0) {
        return;
      }
      var currentData = data;
      if(limit && i > limit) {
        trString = "<tr class='hide extra'>";
        isViewMore= true;
      } else {
        trString = "<tr>";
      }
      
      for (var j = 0; j < currentData.length; j++) {
        trString += "<td>" + currentData[j] + "</td>";
      }
      trString += "</tr>";
      $(id).find("tbody").append(trString);

    });
    if(isViewMore) {
      $(id).after('<br /><a class="btn viewMoreBtn notExpanded right">View More</a>');
      $('.viewMoreBtn').click(function(e) {
        if($(this).hasClass('notExpanded')) {
          $(id).find('tbody tr.hide').removeClass('hide');
          $(this).removeClass('notExpanded').addClass('expanded').text('View Less');
        } else {
          $(id).find('tbody tr.extra').addClass('hide');
          $(this).removeClass('expanded').addClass('notExpanded').text('View More');
          $('html,body').animate({
            scrollTop: $(this).offset().top-100},
            'slow');
        }
      });
    }
  }

  function loadResults(csvUrl, id, limit) {
    $.ajax({
      url: "assets/results/" + csvUrl,
      success: function(csvFile) {
        var csvData = $.csv.toArrays(csvFile);
        loadTable(csvData, id, limit);
      }
    });
  }
  loadResults("2017engg.csv", "#Results__JeeMain2017", 23);
  loadResults("2016NEET.csv", "#Results__NEET2016");
  loadResults("2016PMET.csv", "#Results__PMET2016");
  loadResults("2016JEEADV.csv", "#Results__JeeAdv2016", 23);
  loadResults("2015Results.csv", "#Results__MedicalJEE2015");

  function stickyNess() {
    var $sticky = $(".results-item");
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
});
