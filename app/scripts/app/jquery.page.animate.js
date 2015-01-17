(function(window, $, undefined) {
  'use strict';

  function switchPage(id, initializer) {
    initializer && initializer();
    $('.page').each(function() {
      var page = $(this);
      if (page.attr('id') === id) {
        page.find('img').imageloader();
        page.addClass('active');
      } else {
        page.removeClass('active');
      }
    });
  }

  $.PAGES = {};
  $.PAGE_INITED = {};
  $.switchPage = switchPage;

})(window, jQuery);