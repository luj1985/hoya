$(function() {

  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;
  
  $.each(['survey', 'culture', 'team', 'list', 'research', 'honor', 'media', 'recruit', 'contact'], function(key, val) {
    
    PAGES['_load_' + val] = function() {
      $.switchPage(val, function() {
        $('nav.menu').html(
          '<a href="#tetris"><i class="md md-apps"></i></a>' +
          '<a href="#about"><i class="md md-menu"></i></a>'
        );
        PAGE_INITED[val] = true;
      });
    };
  });
});