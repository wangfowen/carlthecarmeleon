$(function() {
  var $modal = $('#modal');
  var $content = $('#content');

  function link(el, link) {
    el.click(function(e) {
      e.preventDefault();
      $content.load(link);
      $modal.show();
    });
  }

  link($('#eye'), "/blurbs/eye.html");
  link($('#fire'), "/blurbs/fire.html");
  link($('#led'), "/blurbs/led.html");
  link($('#music'), "/blurbs/music.html");

  $('#close').click(function(e) {
    e.preventDefault();
    $modal.hide();
  });
});

