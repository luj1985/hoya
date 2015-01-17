(function(window, $, undefined) {
  'use strict';
  
  $.fn.classed = function(cls, predictor) {
    this.each(function() {
      var page = $(this);
      if (predictor(page)) {
        page.addClass(cls);
      } else {
        page.removeClass(cls);
      }
    });
  }

  function switchPage(id, callback) {
    $('.page').classed('active', function(page) {
      return page.attr('id') === id;
    });
    callback && callback();
  }

  $.PAGES = {};
  $.PAGE_INITED = {};
  $.ANIMATE = { a: 100, b: 80, c: 222 };
  $.switchPage = switchPage;

})(window, jQuery);