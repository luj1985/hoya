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

  function switchPage(pageid, callback) {
    var _currentPage = $('.page.active');

    _currentPage && pageTransition(_currentPage, _currentPage.attr('data-amt'), true);

    _currentPage.removeClass('active');

    var _nextPage = $('#' + pageid);
    _nextPage.find('img[data-src]').each(function() {
      $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
    });
    pageTransition(_nextPage, _nextPage.attr('data-amt'), false, function() {
      callback();
      // $('footer').css('top', 'auto');
      // var _dw = $(document).height() - $(window).height();
      // if (_dw > 0) {
      //   $('footer').css('top', $(document).height() - 30 + 'px');
      // }
    });
  }

  $.switchPage = switchPage;
})