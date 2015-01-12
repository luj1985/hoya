$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  
  $.PAGES["_load_about"] = function() {
    var tetris = $.PAGES.tetris;
    if (!PAGE_INITED['about']) {
      if (tetris) {
        tetris.flyAway(ANIMATE.a, ANIMATE.b);
      }
      setTimeout(function() {
        $.switchPage('about', function() {
          tetris && tetris.reset();
        });
      }, tetris.tetris.length * ANIMATE.b);
      PAGE_INITED['about'] = true;
    } else {
      $.switchPage('about', function() { });
    }
  };
});