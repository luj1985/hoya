(function(window, $, undefined) {
  'use strict';

  function pageTransition(page, animateType, isRevert, callback) {
    callback = callback || function() { void 0; };
    switch (animateType) {
      case 'fade':
        isRevert ? page.fadeOut(200, callback) : page.fadeIn(200 ,callback);
        break;
      default:
        isRevert ? page.hide(callback) : page.show(callback);
    }
    page.addClass('active');
  }

  function switchPage(id, callback) {
    var current = $('.page.active');
    pageTransition(current, current.attr('data-amt'), true);
    current.removeClass('active');

    var next = $('#' + id);
    next.find('img[data-src]').each(function() {
      $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
    });
    pageTransition(next, next.attr('data-amt'), false, callback);
  }

  $.PAGES = {};
  $.PAGE_INITED = {};
  $.ANIMATE = { a: 100, b: 80, c: 222 };
  $.switchPage = switchPage;
})(window, jQuery);