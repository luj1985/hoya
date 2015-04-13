$(function() {
  'use strict';

  var tetrisDefs = $.map(CASES, function(t) {
    return {
      bgColor: t[0],
      textColor: t[1],
      text: t[2],
      shape: t[3],
      orientation: t[4],
      aIndex: t[5],
      aType: t[6],
      x: t[7],
      y: t[8]
    };
  });

  // screen width;
  var SCREEN_WIDTH = $(window).width(),
      SCREEN_HEIGHT = $(window).height();

  var container = $('#tetris');
  var tetris = container.tetris({
    tetris: tetrisDefs
  });

  $('nav.category .item a').on('click', function(e) {
    e.preventDefault();
    var link = $(this);
    var target = link.attr('href');
    var offset = link.offset();
    var filter = $(target).clone().attr('id', 'filter');

    var container = $('#tetris');
    if (target === '#year_list') {
      filter.on('click', 'li', function() {
        var year = $(this).data('year');
        container.find('.tetris-cell').addClass('disabled');
        container.find('.tetris-cell[data-year="' + year + '"]').removeClass('disabled');
      })
    } else if (target === '#category_list') {
      filter.on('click', 'li', function() {
        var category = $(this).data('category');
        container.find('.tetris-cell').addClass('disabled');
        container.find('.tetris-cell[data-category="' + category + '"]').removeClass('disabled');
      });
    } else {
      throw new Error('unknown target: ' + target);
    }

    var highlight = $('.highlight');

    highlight.find('.content').css({
      'top' : offset.top + link.height(),
      'left': offset.left
    }).html(filter);

    var li = link.closest('li');
    highlight.addClass('active').one('click', function(e) {
      li.removeClass('active');
    });

    li.addClass('active');
  });

  // 8rem;
  var CONTENT_HEIGHT, CONTENT_WIDTH;
  CONTENT_HEIGHT = CONTENT_WIDTH = 6 * 16;

  $('#tetris .tetris-cell').on('click', function(e) {
    e.preventDefault();

    var cell = $(this);
    if (cell.hasClass('disabled')) {
      return;
    }
    var name = cell.data('case');
    var d = CASEDICT[name];
    if (d) {
      var offset = cell.offset();
      var left = offset.left + (cell.width() / 2) - (CONTENT_WIDTH / 2);
      var top = offset.top + (cell.height() / 2) - (CONTENT_HEIGHT / 2);

      // make content always stay in screen
      left = left < 0 ? 0 : left;
      top = top < 0 ? 0 : top;

      var maxLeft = (SCREEN_WIDTH - CONTENT_WIDTH);
      var maxTop = (SCREEN_HEIGHT - CONTENT_HEIGHT);

      left = left > maxLeft ? maxLeft : left;
      top = top > maxTop ? maxTop : top;

      var preview = [
        '<a class="preview" href="#case_' + name + '">',
          '<h5>' + d.text + '</h5>',
          '<img src="images/image-loader.gif" data-src="images/case/' + name + '/a.jpg" alt="' + d.text + '">',
        '</a>'
      ].join('\n');


      $('.highlight').find('.content').html(preview).css({ 
        left: left, 
        top: top,
        width: CONTENT_WIDTH,
        height: CONTENT_HEIGHT
      })
      .end().addClass('active').imageloader();
    }
    e.stopPropagation(); 
  });

  $('.highlight').on('click', function(e) {
    $(this).removeClass('active');
    e.stopPropagation();
  })
});