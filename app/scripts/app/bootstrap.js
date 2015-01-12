$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;

  $('.page').each(function() {
    var name = $(this).attr('id');
    PAGE_INITED[name] = false;
  });

  $(window).hashChange(function() {
    var name = window.location.hash.replace('#', '') || 'main';
    var loader = PAGES['_load_' + name];
    loader && loader();
  });
  // window.location.hash = '';
  $(window).hashChange();
  $.loading(true);
});