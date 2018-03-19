$(function() {
  var $modal = $('#modal');
  var $content = $('#content');
  var $menu = $('#mobile-menu');
  var $body = $('body');

  function link(el, link) {
    el.click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $content.load(link);
      $modal.show();
      $body.addClass("modal-open");
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
    $body.removeClass("modal-open");
  });

  $('#bg').click(function(e) {
    e.preventDefault();
    $modal.hide();
    $body.removeClass("modal-open");
  });

  $('#menu-open').click(function(e) {
    $menu.toggle();
  });
});

