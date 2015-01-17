$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;
  var ANIMATE = $.ANIMATE;

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
    var html = '';
    var cnt = 0;
    var bg = findColorDef(name);
    html += '<div class="gallery">';
    for (var i = 1, length = data.img; i <= length; i++) {
      if (i === 2) {
        html += '<div class="slide description" style="background-color:' + bg + '">';
        html += detail || '';
        html += '<br>';
        html += data.desc || ''
        html += '</div>\n';
        cnt++;
      }
      html += '<div class="slide"><img src="images/case/' + name + '/' + i + '.jpg"></div>\n';
      cnt++;
    }
    html += '</div>';
    var content = $(html);
    // content.css('width', (100 * cnt) + '%');
    return content;
  }

  PAGES['_load_case'] = function(name) {
    var cell = $('.tetris-cell[case="' + name + '"]');
    var bg = cell.css('background-color');
    var data = CASEDICT[name];

    var page = $('#case');
    page.empty();
    
    $.switchPage('case', function() {
      $('nav.menu').html('<a href="#home"><i class="md md-apps"></i></a>');
      var content = generateCasePage(name);
      content.find('.slide:first').addClass('active');
      content.on('click', '.slide', function() {
        var node = $(this),
            next = node.next();
        if (next.length === 0) {
          next = content.find('.slide:first');
        }

        node.removeClass('active');
        next.addClass('active');
      })
      page.html(content);
    });
  };
});