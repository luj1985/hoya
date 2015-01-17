(function(window, $, undefined) {
  'use strict';

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