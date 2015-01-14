$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;
  var ANIMATE = $.ANIMATE;

  CASEDICT = $.extend(true, CASEDICT, RELATIONSHIP);

  function generateCasePage(name, bg) {
    var data = CASEDICT[name];
    var detail = CASEDETAILS[name];
    var html = '<div class="gallery">';

    for (var i = 1, length = data.img; i <= length; i++) {
      if (i === 2) {
        html += '<div class="slide" style="background-color:' + bg + '">';
        html += detail || '';
        html += '<br>';
        html += data.desc || ''
        html += '</div>\n';
      }
      html += '<div class="slide"><img src="images/case/' + name + '/' + i + '.jpg"></div>\n';
    }
    html += '</div>';
    return html;
  }

  PAGES['_load_case'] = function(name) {
    $.switchPage('case', function() {
      var cell = $('.tetris-cell[case="' + name + '"]');
      var bg = cell.css('background-color');
      var page = generateCasePage(name, bg);
      $('#case').html(page);
      $('#case .slide').swipebox();
    });
  };

  $('#tetris').on('click', '.preview', function() {
    var cell = $(this).closest('.tetris-cell');
    var name = cell.data('case');

    if (CASEDICT[name]) {      
      window.location.hash = '#case_' + name;
    }
    return false;
  });
});