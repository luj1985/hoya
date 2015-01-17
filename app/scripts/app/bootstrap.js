$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;

  
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

  $('.page').each(function() {
    var name = $(this).attr('id');
    PAGE_INITED[name] = false;
  });

  $(window).on('hashchange', function(e) {
    var hash = window.location.hash.replace('#', '') || 'main';
    var names = hash.split('_');
    var name = names[0], param = names[1];
    var loader = PAGES['_load_' + name];
    loader && loader(param);
  });
  $(window).trigger('hashchange');
});