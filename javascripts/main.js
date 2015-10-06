jQuery(window).load(function () {
  jQuery("#loaderInner").fadeOut();
  jQuery("#loader").delay(400).fadeOut("slow");
});

$(function () {
  "use strict";
  $('#worksGrid').mixItUp();
});

$('body').scrollspy({
  offset: 200, target: '.navigation'
});
