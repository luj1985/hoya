$(function() {
  var PAGES = $.PAGES;

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

  PAGES['_load_case'] = function(name) {
    var cell = $('.tetris-cell[case="' + name + '"]');
    var bg = cell.css('background-color');
    var data = CASEDICT[name];

    var page = $('#case');
    page.empty();
    
    $.switchPage('case', function() {
      var tetris = $.PAGES.tetris;
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
  };
});