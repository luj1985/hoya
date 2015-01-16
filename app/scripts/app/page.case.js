$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;
  var ANIMATE = $.ANIMATE;

  CASEDICT = $.extend(true, CASEDICT, RELATIONSHIP);

  function generateCasePage(name, bg) {
    var data = CASEDICT[name];
    var detail = CASEDETAILS[name];
    var html = '';
    var cnt = 0;
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
      html += '<div class="slide image"><img src="images/case/' + name + '/' + i + '.jpg"></div>\n';
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
      $('nav.menu').html('<a href="#main"><i class="md md-apps"></i></a>');
      var cell = $('.tetris-cell[case="' + name + '"]');
      var bg = cell.css('background-color');
      var content = generateCasePage(name, bg);
      page.html(content);
    });
  };
});