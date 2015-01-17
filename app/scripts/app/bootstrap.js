$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;
  var ANIMATE = $.ANIMATE;

  $('.page').each(function() {
    var name = $(this).attr('id');
    PAGE_INITED[name] = false;
  });
  
  var DEFAULT_MENU_HTML = [
    '<a href="#home"><i class="md md-apps"></i></a>',
    '<a href="#about"><i class="md md-menu"></i></a>'
  ].join('');

  $.PAGES["_load_about"] = function() {
    $('nav.menu').empty();
    var tetris = $.PAGES.tetris;

    if (!PAGE_INITED['about']) {
      if (tetris) {
        tetris.flyAway(ANIMATE.a, ANIMATE.b);
        setTimeout(function() {
          $.switchPage('about', function() {
            tetris.reset();
          });
        }, tetris.tetris.length * ANIMATE.b);
      } else {
        $.switchPage('about');
      }
      PAGE_INITED['about'] = true;
    } else {
      $.switchPage('about');
    }
  };

  function dispatch(name, param) {
    switch (name) {
      case 'survey':
      case 'culture':
      case 'team':
      case 'list':
      case 'research':
      case 'honor':
      case 'media':
      case 'recruit':
      case 'contact':
        $.switchPage(name, function() {
          $('nav.menu').html(DEFAULT_MENU_HTML);
        });
        break;
      default:
        PAGES['_load_' + name](param);
    }
  }

  $(window).on('hashchange', function(e) {
    var hash = location.hash.replace('#', '') || 'home';
    var names = hash.split('_');
    var name = names[0], param = names[1];
    dispatch(name, param);
  });
  $(window).trigger('hashchange');
});