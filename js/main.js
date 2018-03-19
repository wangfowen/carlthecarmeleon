$(function() {
  var $modal = $('#modal');
  var $content = $('#content');
  var $menu = $('#mobile-menu');

  function link(el, link) {
    el.click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $content.load(link);
      $modal.show();
    });
  }

  link($('.eye'), "/blurbs/eye.html");
  link($('.fire'), "/blurbs/fire.html");
  link($('.led'), "/blurbs/led.html");
  link($('.music'), "/blurbs/music.html");
  link($('.car'), "/blurbs/car.html");
  link($('.tail'), "/blurbs/tail.html");

  $('#close').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $modal.hide();
  });

  $('#bg').click(function(e) {
    e.preventDefault();
    $modal.hide();
  });

  $('#menu-open').click(function(e) {
    $menu.toggle();
  });
});

