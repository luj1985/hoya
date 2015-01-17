$(function() {
  
  var DEFAULT_MENU_HTML = [
    '<a href="#home"><i class="md md-apps"></i></a>',
    '<a href="#about"><i class="md md-menu"></i></a>'
  ].join('');

  CASEDICT = $.extend(true, CASEDICT, RELATIONSHIP);

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

  function findColorDef(name) {
    for(var i = 0, length = CASES.length; i < length; i++) {
      var c = CASES[i];
      var arr = c[2];
      if (arr.indexOf(name) > -1) {
        return c[0];
      }
    }
    return '';
  }

  function generateCasePage(name) {
    var data = CASEDICT[name];
    var detail = CASEDETAILS[name];
    var gallery = $('<div class="gallery">');
    var bg = findColorDef(name);
    var html = '';
    for (var i = 1, length = data.img; i <= length; i++) {
      if (i === 2) {
        html += '<div class="slide description" style="background-color:' + bg + '">';
        html += detail || '';
        html += '<br>';
        html += data.desc || ''
        html += '</div>';
      }
      html += '<div class="slide image">';
      html += '<img src="images/image-loader.gif" data-src="images/case/' + name + '/' + i + '.jpg">';
      html += '</div>';
    }
    gallery.append(html);
    return gallery;
  }

  function loadHome() {
    switchPage('home', function() {
      var tetris = $('#tetris').tetris();
      $('nav.menu').empty();
      tetris.start(function() { 
        $.loading(false); 
      });
    });
  }

  function loadAbout() {
    $('nav.menu').empty();
    var tetris = $('#tetris').tetris();
    if (tetris) {
      tetris.flyAway(function() {
        switchPage('about', function() {
          tetris.reset();
        });
      });
    } else {
      switchPage('about');
    }
  }

  function loadCase(name) {
    var cell = $('.tetris-cell[case="' + name + '"]');
    var bg = cell.css('background-color');
    var data = CASEDICT[name];

    var page = $('#case');
    page.empty();
    
    switchPage('case', function() {
      var tetris = $('#tetris').tetris();
      if (tetris) { tetris.reset(); }

      $('nav.menu').html('<a href="#home"><i class="md md-apps"></i></a>');
      var content = generateCasePage(name);
      content.find('.slide:first').addClass('active').end()
        .on('click', '.slide', function() {
          var node = $(this), next = node.next();
          if (next.length === 0) {
            next = content.find('.slide:first');
          }
          node.removeClass('active');
          next.addClass('active');
        })
        .appendTo(page);
    });
  }

  function dispatch(name, param) {
    switch (name) {
      case 'home': loadHome(param); break;
      case 'about': loadAbout(param); break;
      case 'case': loadCase(param); break;
      default:
        // survey, culture, team, list, research, honor, media, recruit, contact
        switchPage(name, function() {
          $('nav.menu').html(DEFAULT_MENU_HTML);
        });
    }
  }

  $('#team .names').on('click', 'a', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('#team .names li').removeClass('active');
    $('#team article').removeClass('active');
    $(this).closest('li').addClass('active');
    $(target).addClass('active');
  });

  $(window).on('hashchange', function(e) {
    var hash = location.hash.replace('#', '') || 'home';
    var names = hash.split('_');
    var name = names[0], param = names[1];
    dispatch(name, param);
  });
  $(window).trigger('hashchange');
});