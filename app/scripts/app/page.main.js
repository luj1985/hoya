$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var ANIMATE = $.ANIMATE;

  var CASES = [
    [ '#864C9B', '#FFF', ['M1026', 'M1020',  '0945',  '1010'  ], 2, 2, 14, 3, 0,  3  ],
    [ "#2F4891", '#FFF', ['',      '1406',   '',      '1334'  ], 4, 4, 13, 1, 1,  3  ],
    [ "#E61923", '#FFF', ['0804',  'M0816',  'V0802', '0829'  ], 7, 1, 11, 1, 3,  5  ],
    [ "#5D4097", '#FFF', ['M1104', '1110',   'M1112', 'M1121' ], 3, 2, 10, 1, 4,  4  ],
    [ "#6DB14D", '#FFF', ['9350',  '9306',   'M0409', 'M0411' ], 4, 2, 9,  1, 5,  3  ],
    [ "#6043D1", '#FFF', ['M1203', '1228',   'M1201', '1238'  ], 4, 4, 8,  2, 6,  3  ],
    [ "#1E8F78", '#FFF', ['9441',  '9444',   'M0523', 'M0510' ], 7, 1, 15, 3, 8,  5  ],
    [ "#F39900", '#FFF', ['M0208', '',       '9101',  ''      ], 7, 1, 12, 1, 9,  5  ],
    [ "#1F8D79", '#FFF', ['9456',  '9442',   'M0526', '9445'  ], 5, 1, 7,  1, 10, 3  ],
    [ "#5D4097", '#FFF', ['1138',  '1144',   '1143',  '1122'  ], 6, 2, 6,  1, 0,  5  ],
    [ "#2E6BB4", '#FFF', ['M1317', '1151-1', '',      '1323'  ], 1, 1, 16, 3, 6,  5  ],
    [ "#2F4891", '#FFF', ['1401',  '',       '1408',  '1402'  ], 6, 2, 17, 3, 8,  6  ],
    [ "#6043D1", '#FFF', ['1243',  'M1208',  '1249',  '1216'  ], 3, 2, 18, 3, 10, 5  ],
    [ "#F0820E", '#FFF', ['0738',  'M0708',  '0709',  '0922'  ], 7, 1, 24, 2, 0,  9  ],
    [ "#6DB14B", '#FFF', ['M0414', '',       '9311',  '9316'  ], 6, 2, 5,  1, 1,  7  ],
    [ "#EFC23C", '#FFF', ['M0601', '9437-1', '0629',  ''      ], 2, 4, 4,  1, 3,  7  ],
    [ "#DD4291", '#FFF', ['M0900', '0919',   '1221',  '0909'  ], 7, 1, 25, 3, 5,  9  ],
    [ "#F4A700", '#FFF', ['M0121', '',       '9015',  ''      ], 4, 1, 23, 1, 6,  7  ],
    [ "#C7CF39", '#FFF', ['9201',  '9230',   '9217',  'M0311' ], 2, 1, 3,  1, 1,  9  ],
    [ "#2E6BB4", '#FFF', ['M1302', 'M1310',  '1320',  '1303'  ], 2, 4, 2,  1, 3,  10 ],
    [ "#6DB14B", '#FFF', ['M0405', '9353',   '9345',  '9437'  ], 2, 3, 19, 4, 6,  8  ],
    [ "#E61923", '#FFF', ['0811',  '0801',   'M0804', 'M0801' ], 2, 1, 20, 4, 9,  8  ],
    [ "#E61923", '#FFF', ['M0826', 'M0815',  '',      ''      ], 2, 4, 21, 4, 0,  11 ],
    [ "#864C9B", '#FFF', ['1003',  '',       'V1001', ''      ], 4, 4, 22, 4, 5,  11 ],
    [ "#6043D1", '#FFF', ['',      '1206',   '1225',  '1210'  ], 5, 2, 1,  1, 7,  10 ],
    [ "#864C9B", '#FFF', ['1008',  '1024',   'M1029', '1006'  ], 2, 4, 26, 3, 10, 10 ],
    [ "#F0820E", '#FFF', ['',      '',       '0000',  ''      ], 3, 3, 27, 3, 0,  12 ],
    [ "#5D4097", '#FFF', ['1130',  '1150',   '1141',  '1151'  ], 5, 1, 28, 4, 3,  12 ],
    [ "#F0820E", '#FFF', ['',      '',       '0716',  ''      ], 3, 3, 29, 4, 5,  12 ],
    [ "#2D6CB4", '#FFF', ['1315',  'V1302',  'M1306', '0919-1'], 6, 1, 30, 4, 8,  12 ],
    [ "#DD4291", '#FFF', ['',      '0937',   '',      ''      ], 2, 2, 31, 4, 10, 12 ]
  ];

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

  var TETRIS_WIDTH = SCREEN_WIDTH > 480 ? 480 : SCREEN_WIDTH; 
  var container = $('#tetris');
  var tetris = container.tetris({
    container: container,
    tetris: tetrisDefs,
    tCaseData: CASEDICT,
    height: SCREEN_HEIGHT,
    standard: TETRIS_WIDTH / 12,
    speed: ANIMATE.c
  });

  tetris.init(function() {
    $.loadimg(container.find('img[data-src]'), false, function() {
      container.find('img[data-src]').each(function() {
        $(this).attr('src', $(this).attr('data-src'));
      });
      $.loading(false);
    }, function() {
      setTimeout(function() {
        container.find('img[data-src]').each(function() {
          $(this).attr('src', $(this).attr('data-src'));
        });
        $.loading(false);
      }, 22222);
    });
  });

  $.PAGES.tetris = tetris;

  $.PAGES["_load_main"] = function() {
    $.switchPage('main', function() {
      $('nav.menu').empty();
      if (!PAGE_INITED['main']) {
        tetris.start(function() { 
          $.loading(false); 
        });
        PAGE_INITED['main'] = true;
      }
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
      left = (left + CONTENT_WIDTH) > SCREEN_WIDTH ? (SCREEN_WIDTH - CONTENT_WIDTH) : left;
      top = (top + CONTENT_HEIGHT) > SCREEN_HEIGHT ? (SCREEN_HEIGHT - CONTENT_HEIGHT) : top;

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