(function(window, $, undefined) {
  'use strict';

  function switchPage(id, callback) {
    $('.page').each(function() {
      var page = $(this);
      if (page.attr('id') === id) {
        page.addClass('active');
        $('img', page).imageloader();
      } else {
        page.removeClass('active');
      }
    });
    callback && callback();
  }

  $.PAGES = {};
  $.PAGE_INITED = {};
  $.ANIMATE = { a: 100, b: 80, c: 222 };
  $.switchPage = switchPage;

})(window, jQuery);