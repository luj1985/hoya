$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var ANIMATE = $.ANIMATE;

  $.PAGES["_load_about"] = function() {
    var tetris = $.PAGES.tetris;
    if (!PAGE_INITED['about']) {
      if (tetris) {
        tetris.flyAway(ANIMATE.a, ANIMATE.b);
        setTimeout(function() {
          $.switchPage('about', function() {
            tetris.reset();
          });
        }, tetris.tetris.length * ANIMATE.b);
      } else {
        $.switchPage('about');
      }
      PAGE_INITED['about'] = true;
    } else {
      $.switchPage('about');
    }
  };
});