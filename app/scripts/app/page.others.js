$(function() {

  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;
  
  $.each(['survey', 'culture', 'team', 'list', 'research', 'honor', 'media', 'recruit', 'contact'], function(key, val) {
    PAGES['_load_' + val] = function() {
      $.switchPage(val, function() {
        console.log('loaded '+ val);
        PAGE_INITED[val] = true;
      });
    };
  });
});