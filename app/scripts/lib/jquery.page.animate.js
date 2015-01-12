$(function(window, jQuery, undefined) {
  function pageTransition($page, atype, isRevert, callback) {
    callback = callback || function() { void 0; }
    switch (atype) {
      case 'fade':
        isRevert ? $page.fadeOut(200, callback) : $page.fadeIn(200 ,callback);
        break;
      default:
        isRevert ? $page.hide(callback) : $page.show(callback);
    }
    $page.addClass('active');
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

  $.switchPage = switchPage;
})