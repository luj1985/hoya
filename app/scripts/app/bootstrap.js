$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;

  $('.page').each(function() {
    var name = $(this).attr('id');
    PAGE_INITED[name] = false;
  });

  $(window).hashChange(function() {
    var hash = window.location.hash.replace('#', '') || 'main';
    var names = hash.split('_');
    var name = names[0], param = names[1];
    var loader = PAGES['_load_' + name];
    loader && loader(param);
  });
  // window.location.hash = '';
  $(window).hashChange();
  // $.loading(true);
});