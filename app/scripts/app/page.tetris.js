$(function() {

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

  $.PAGES.tetris = tetris;

  $.PAGES["_load_home"] = function() {
    $.switchPage('home', function() {
      $('nav.menu').empty();
      tetris.start(function() { 
        $.loading(false); 
      });
    });
  }

  $('nav.category .item').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  $('#year_list').on('click', 'li', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var year = $(this).data('year');
    var container = $('#tetris');
    container.find('.tetris-block').addClass('disabled');
    container.find('.tetris-block[data-year="' + year + '"]').removeClass('disabled');
  });

  $('#category_list').on('click', 'li', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var category = $(this).data('category');
    var container = $('#tetris');
    container.find('.tetris-block').addClass('disabled');
    container.find('.tetris-block[data-category="' + category + '"]').removeClass('disabled');
  });

  // 8rem;
  var CONTENT_HEIGHT = CONTENT_WIDTH = 6 * 16;

  $('#tetris .tetris-cell').on('click', function(e) {
    var cell = $(this);
    var name = cell.data('case');
    var d = CASEDICT[name];
    if (d) {
      var offset = cell.offset();
      var left = offset.left + (cell.width() / 2) - (CONTENT_WIDTH / 2);
      var top = offset.top + (cell.height() / 2) - (CONTENT_HEIGHT / 2);

      // make content always stay in screen
      left = left < 0 ? 0 : left;
      top = top < 0 ? 0 : top;

      maxLeft = (SCREEN_WIDTH - CONTENT_WIDTH);
      maxTop = (SCREEN_HEIGHT - CONTENT_HEIGHT);

      left = left > maxLeft ? maxLeft : left;
      top = top > maxTop ? maxTop : top;

      var preview = [
        '<a class="preview" href="#case_' + name + '">',
          '<h5>' + d.text + '</h5>',
          '<img src="images/case/' + name + '/a.jpg" alt="' + d.text + '">',
        '</a>'
      ].join('\n');

      $('.highlight').find('.content').html(preview).css({ 
        left: left, 
        top: top,
        width: CONTENT_WIDTH,
        height: CONTENT_HEIGHT
      })
      .end().addClass('show');
    }
    e.stopPropagation(); 
  });

  $('.highlight').on('click', function(e) {
    $(this).removeClass('show');
    e.stopPropagation();
  })
});