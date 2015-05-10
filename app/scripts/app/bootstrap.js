$(function() {
  
  var DEFAULT_MENU_HTML = [
    '<a href="#back" class="back"><i class="icon-back"></i></a>',
    '<a href="#home"><i class="icon-app"></i></a>',
    '<a href="#about"><i class="icon-list"></i></a>'
  ].join('');

  CASEDICT = $.extend(true, CASEDICT, RELATIONSHIP);

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

  function switchPage(id, initializer) {
    $('.page').each(function() {
      var page = $(this);
      if (page.attr('id') === id) {
        page.addClass('active');
        initializer && initializer(page);
      } else {
        page.removeClass('active');
      }
    });
  }

  function generateCasePage(name) {
    var data = CASEDICT[name];
    var detail = CASEDETAILS[name];
    var gallery = '<div class="gallery">';
    var indicators = '<div class="indicators">';
    var bg = findColorDef(name);
    for (var i = 1, length = data.img; i <= length; i++) {
      if (i === 2) {
        gallery += '<div class="slide right description" style="background-color:' + bg + '">';
        gallery += detail || '';
        gallery += '<br>';
        gallery += data.desc || ''
        gallery += '</div>';

        indicators += '<span class="indicator"></span>';
      }
      gallery += '<div class="slide right image">';
      gallery += '<img src="images/image-loader.svg" data-src="images/thumbnails/' + name + '/' + i + '.jpg">';
      gallery += '</div>';

      indicators += '<span class="indicator"></span>'
    }
    gallery += '</div>';
    indicators += '</div>'
    return gallery + indicators;
  }

  function loadHome() {
    switchPage('home', function(page) {
      var tetris = $('#tetris', page).tetris();
      $('nav.menu').empty();
      tetris.start();
    });
  }

  function loadAbout() {
    $('nav.menu').empty();
    var tetris = $('#tetris').tetris();
    if (tetris) {
      // TODO: should detect 'home' page has been viewed or not
      tetris.flyAway(function() {
        switchPage('about', function() {
          tetris.reset();
        });
      });
    } else {
      switchPage('about');
    }
  }

  $('#case').swipe({
    fingers: 1,
    swipeLeft: function() {
      var page = $(this);
      var slide = page.find('.slide.active'),
          indicator = page.find('.indicator.active');
      var n1 = slide.next(), n2 = indicator.next();
      if (n1.length !== 0) {
        slide.removeClass('active right').addClass('left');
        indicator.removeClass('active');
        n1.addClass('active').imageloader();
        n2.addClass('active');
      }
    },
    swipeRight: function() {
      var page = $(this);
      var slide = page.find('.slide.active'),
          indicator = page.find('.indicator.active');
      var n1 = slide.prev(), n2 = indicator.prev();
      if (n1.length !== 0) {
        slide.removeClass('active left').addClass('right');
        indicator.removeClass('active');
        n1.addClass('active').imageloader();
        n2.addClass('active');
      }
    },
    fallbackToMouseEvents: true,
    allowPageScroll: "vertical"
  });

  function loadCase(name) {
    var data = CASEDICT[name];
    var page = $('#case');
    page.empty();

    switchPage('case', function(page) {
      var tetris = $('#tetris').tetris();
      if (tetris) { tetris.reset(); }
      $('nav.menu').html([
        '<a href="#back" class="back"><i class="icon-back"></i></a>',
        '<a href="#home"><i class="icon-app"></i></a>'
      ].join(''));
      var html = generateCasePage(name);
      var content = $(html);
      content.find('.slide:first').addClass('active').imageloader();
      content.find('.indicator:first').addClass('active');
      page.append(content);
      page.data('case-name', name);
    });
  }

  function dispatch(name, param) {
    switch (name) {
      case 'home': loadHome(param); break;
      case 'about': loadAbout(param); break;
      case 'case': loadCase(param); break;
      default:
        // survey, culture, team, list, research, honor, media, recruit, contact
        switchPage(name, function(page) {
          $('nav.menu').html(DEFAULT_MENU_HTML);
          $('img', page).imageloader();
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
    $('.highlight').removeClass('active').html('<div class="content"></div>');

    dispatch(name, param);
  });
  $(window).trigger('hashchange');

  $('#case').on('click', '.slide.image img', function(e) {
    var img = $(e.target);
    var currentImage = img.attr('src');
    if (currentImage === 'images/image-loader.svg') {
      currentImage = img.attr('data-src');
    }
    var fullsize = currentImage.replace('thumbnails', 'case');

    var name = $('#case').data('case-name');
    var data = CASEDICT[name] || {}, lightbox = '', gallery = '', indicators = '';
    lightbox += '<div class="lightbox">\n';
    var position = 'left';
    for (var i = 1, length = data.img; i <= length; i++) {
      var path = 'images/case/' + name + '/' + i + '.jpg ';
      var thumb = 'images/thumbnails/' + name + '/' + i + '.jpg';
      if (currentImage === thumb) {

        gallery += '<div class="slide image active">\n';
        // current image are already loaded, no need to display 'loading'
        gallery += '<img src="' + thumb + '" data-src="' + path + '">\n';

        indicators += '<span class="indicator active"></span>';
        position = 'right';
      } else {
        gallery += '<div class="slide image ' + position + '">\n';
        gallery += '<img src="images/image-loader.svg" data-src="' + path + '">\n';

        indicators += '<span class="indicator"></span>';
      }
      gallery += '</div>\n';
    }
    lightbox += '<div class="gallery">' + gallery + '</div>';
    lightbox += '<div class="indicators">' + indicators + '</div>';
    lightbox += '</div>\n';

    var $lightbox = $(lightbox);
    $lightbox.swipe({
      fingers: 1,
      allowPageScroll: 'all',
      triggerOnTouchLeave: true,
      triggerOnTouchEnd: false,
      swipeLeft: function(el, e) {
        var page = $(this);
        var currentSlide = page.find('.slide.active');
        var currentIndicator = page.find('.indicator.active');
        var next = currentSlide.next();
        if (next.length !== 0) {
          currentSlide.removeClass('active right').addClass('left');
          next.removeClass('right').addClass('active').imageloader();
          currentIndicator.removeClass('active');
          currentIndicator.next().addClass('active');
        }
      },
      swipeRight: function(el, e) {
        var page = $(this);
        var currentSlide = page.find('.slide.active');
        var currentIndicator = page.find('.indicator.active');
        var prev = currentSlide.prev();
        if (prev.length !== 0) {
          currentSlide.removeClass('active left').addClass('right');
          prev.removeClass('left').addClass('active').imageloader();
          currentIndicator.removeClass('active');
          currentIndicator.prev().addClass('active');
        }
      }
    });

    $('.highlight').find('.content').html($lightbox).css({ 
      left: 0, 
      top: 0,
      width: '100%',
      height: '100%'
    })
    .end()
    .addClass('active')
    .find('.slide.active')
    .imageloader();
  });


  $('body').on('click', '.back', function(e) {
    e.preventDefault();
    history.back();
  });
});