$(function() {
  $.loading(true);
  var PAGE_INITED = { };

  var ANIMATE = { a: 100, b: 80, c: 222 };


  $('.page').each(function() {
    var name = $(this).attr('id');
    PAGE_INITED[name] = false;
  });


  var CASES = [
    [ '#864C9B', '#fff', ['M1026', 'M1020', '0945', '1010'], 2, 2, 14, 3, 0, 3 ],
    [ "#2F4891", '#fff', ['', '1406', '', '1334'], 4, 4, 13, 1, 1, 3 ],
    [ "#E61923", '#fff', ['0804', 'M0816', 'V0802', '0829'], 7, 1, 11, 1, 3, 5 ],
    [ "#5D4097", '#fff', ['M1104', '1110', 'M1112', 'M1121'], 3, 2, 10, 1, 4, 4 ],
    [ "#6DB14D", '#fff', ['9350', '9306', 'M0409', 'M0411'], 4, 2, 9, 1, 5, 3 ],
    [ "#6043D1", '#fff', ['M1203', '1228', 'M1201', '1238'], 4, 4, 8, 2, 6, 3 ],
    [ "#1E8F78", '#fff', ['9441', '9444', 'M0523', 'M0510'], 7, 1, 15, 3, 8, 5 ],
    [ "#F39900", '#fff', ['M0208', '', '9101', ''], 7, 1, 12, 1, 9, 5 ],
    [ "#1F8D79", '#fff', ['9456', '9442', 'M0526', '9445'], 5, 1, 7, 1, 10, 3 ],
    [ "#5D4097", '#fff', ['1138', '1144', '1143', '1122'], 6, 2, 6, 1, 0, 5 ],
    [ "#2E6BB4", '#fff', ['M1317', '1151-1', '', '1323'], 1, 1, 16, 3, 6, 5 ],
    [ "#2F4891", '#fff', ['1401', '', '1408', '1402'], 6, 2, 17, 3, 8, 6 ],
    [ "#6043D1", '#fff', ['1243', 'M1208', '1249', '1216'], 3, 2, 18, 3, 10, 5 ],
    [ "#F0820E", '#fff', ['0738', 'M0708', '0709', '0922'], 7, 1, 24, 2, 0, 9 ],
    [ "#6DB14B", '#fff', ['M0414', '', '9311', '9316'], 6, 2, 5, 1, 1, 7 ],
    [ "#EFC23C", '#fff', ['M0601', '9437-1', '0629', ''], 2, 4, 4, 1, 3, 7 ],
    [ "#DD4291", '#fff', ['M0900', '0919', '1221', '0909'], 7, 1, 25, 3, 5, 9 ],
    [ "#F4A700", '#fff', ['M0121', '', '9015', ''], 4, 1, 23, 1, 6, 7 ],
    [ "#C7CF39", '#fff', ['9201', '9230', '9217', 'M0311'], 2, 1, 3, 1, 1, 9 ],
    [ "#2E6BB4", '#fff', ['M1302', 'M1310', '1320', '1303'], 2, 4, 2, 1, 3, 10 ],
    [ "#6DB14B", '#fff', ['M0405', '9353', '9345', '9437'], 2, 3, 19, 4, 6, 8 ],
    [ "#E61923", '#fff', ['0811', '0801', 'M0804', 'M0801'], 2, 1, 20, 4, 9, 8 ],
    [ "#E61923", '#fff', ['M0826', 'M0815', '', ''], 2, 4, 21, 4, 0, 11 ],
    [ "#864C9B", '#fff', ['1003', '', 'V1001', ''], 4, 4, 22, 4, 5, 11 ],
    [ "#6043D1", '#fff', ['', '1206', '1225', '1210'], 5, 2, 1, 1, 7, 10 ],
    [ "#864C9B", '#fff', ['1008', '1024', 'M1029', '1006'], 2, 4, 26, 3, 10, 10 ],
    [ "#F0820E", '#fff', ['', '', '0000', ''], 3, 3, 27, 3, 0, 12 ],
    [ "#5D4097", '#fff', ['1130', '1150', '1141', '1151'], 5, 1, 28, 4, 3, 12 ],
    [ "#F0820E", '#fff', ['', '', '0716', ''], 3, 3, 29, 4, 5, 12 ],
    [ "#2D6CB4", '#fff', ['1315', 'V1302', 'M1306', '0919-1'], 6, 1, 30, 4, 8, 12 ],
    [ "#DD4291", '#fff', ['', '0937', '', ''], 2, 2, 31, 4, 10, 12 ]
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

  var PAGE_LOADER = { };
  var tetris;

  PAGE_LOADER["_load_main"] = function() {
    $.switchPage('main', function() {
      if (!PAGE_INITED['main']) {
        // screen width;
        var width = $(window).width();
        width = width > 480 ? 480 : width; 

        var container = $('#tetris');
        tetris = new $.tetris({
          container: container,
          tclass: 'tetris',
          tbclass: 'tetris-block',
          tetris: tetrisDefs,
          tCaseData: CASEDICT,
          _dy: container.height(),
          standard: width / 12, // 1个x/y坐标单位
          speed: ANIMATE.c // 单帧动画速度
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
        }).start(function() {
          $.loading(false);
        });
        PAGE_INITED['main'] = true;
      }
    });
  }

  PAGE_LOADER["_load_about"] = function() {
    if (!PAGE_INITED['about']) {
      if (tetris) {
        tetris.flyAway(ANIMATE.a, ANIMATE.b);
      }
      setTimeout(function() {
        $.switchPage('about', function() {
          tetris && tetris.reset();
        });
      }, tetrisDefs.length * ANIMATE.b);
      PAGE_INITED['about'] = true;
    } else {
      $.switchPage('about', function() { });
    }
  };
  
  $.each(['survey', 'culture', 'team', 'list', 'research', 'honor', 'media', 'recruit', 'contact'], function(key, val) {
    PAGE_LOADER['_load_' + val] = function() {
      $.switchPage(val, function() {
        console.log('loaded '+ val);
        PAGE_INITED[val] = true;
      });
    };
  });



  CASEDICT = $.extend(true, CASEDICT, RELATIONSHIP);

  $('#tetris').on('click', '.tetris-block', function() {
    var $t_block = $(this);
    var $t_block_bg = $t_block.css('background-color');
    var _case = $.trim($t_block.attr('data-case'));

    if ($t_block.hasClass('tetris-transparent')) {
      return false;
    }

    if (CASEDICT[_case]) {
      if (!$('#case_' + _case).length) {
        var caseImgHTML = '';
        CASEDICT[_case].desc = CASEDICT[_case].desc || '';
        for (var i = 1; i <= CASEDICT[_case].img; i++) {
          if (i === 2) {
            caseImgHTML += '<div class="nivoSlider-item nivoSlider-item_desc"><div class="nivoSlider-item_desc-content" style="background-color: ' + $t_block_bg + '">' + '<p style="margin-top: 40px;"></p>' + CASEDETAILS[_case] + '<br/><br/>' + CASEDICT[_case].desc + '</div></div>';
          }
          caseImgHTML += '<div class="nivoSlider-item"><img src="images/case/' + _case + '/' + i + '.jpg?20140629" /></div>';
        }
        if (i === 2) {
          caseImgHTML += '<div class="nivoSlider-item nivoSlider-item_desc"><div class="nivoSlider-item_desc-content" style="background-color: ' + $t_block_bg + '">' + '<p style="margin-top: 40px;"></p>' + CASEDETAILS[_case] + '<br/><br/>' + CASEDICT[_case].desc + '</div></div>';
        }
        $('footer').before('<div id="case_' + _case + '" class="page case_page" data-amt="fade"><div class="atc-nav"><a href="#main" class="atc-nav-main">&nbsp;</a></div><div id="case_slider-' + _case + '" class="nivoSlider">' + caseImgHTML + '</div></div>');

        var $t_block_title = $t_block.children('.case_title').clone();
        $t_block_title.width($t_block_title.width() + 10);
        $t_block_title.css({
          left: 0,
          display: 'block',
          zIndex: 999999,
          top: 0
        }).appendTo($('#case_' + _case));
        $('#case_' + _case).on('mousemove.t_b_t_' + _case, function(e) {
          if (e.pageX < 180 || e.pageX > $(window).width() - 180 || e.pageY < 30 || e.pageY > $(window).height() - 50) {
            $t_block_title.css({
              display: 'none'
            });
          } else {
            $t_block_title.css({
              display: 'block'
            });
          }
          $t_block_title.offset({
            top: e.pageY - 10,
            left: e.pageX + 10
          });
        });

        PAGE_LOADER['_load_case_' + _case] = function() {
          $.switchPage('case_' + _case, function() {
            if (!PAGE_INITED['case_' + _case]) {
              $('#case_slider-' + _case).append('<div class="nivoSlider-ctrl">' + new Array($('#case_slider-' + _case).children('.nivoSlider-item').length + 1).join('<span></span>') + '</div>').children('.nivoSlider-ctrl').on('click', 'span', function() {
                if ($(this).hasClass('active')) {
                  return;
                }
                $(this).addClass('active').siblings('.active').removeClass('active');

                var _prev = $(this).parent().siblings('.nivoSlider-item.active');

                var __idx = $(this).parent().children('span').index($(this));
                var _next = $(this).parent().siblings('.nivoSlider-item').eq(__idx);
                if (__idx === 1) {
                  var nidc = _next.children('.nivoSlider-item_desc-content');
                  if (nidc.attr('data-setted') !== 'yes') {
                    nidc.width(_next.prev().children('img:first').height() * 1247 / 795 - 200);
                    nidc.attr('data-setted', 'yes');
                  }
                }

                if (_prev.length) {
                  _prev.stop(true, true).fadeOut(200, function() {
                    _prev.removeClass('active');
                  });
                }
                setTimeout(function() {
                  _next.stop(true, true).fadeIn(200, function() {
                    _next.addClass('active');
                  });
                }, 100);
              }).children('span:first').click();
              $('#case_slider-' + _case).on('click', '.nivoSlider-item', function(e) {
                var _niem = $(this).parent().children('.nivoSlider-item');
                var _idx = _niem.index($(this));
                if ($(this).width() / 2 + $(this).offset().left > e.pageX) {
                  _idx--;
                } else {
                  _idx++;
                }
                (_idx === _niem.length) && (_idx = 0);
                (_idx === -1) && (_idx = _niem.length - 1);
                $(this).parent().children('.nivoSlider-ctrl').children('span').eq(_idx).click();
              });

              PAGE_INITED['case_' + _case] = true;
            }
          });
        };
      }
      window.location.hash = '#case_' + _case;
    }
    return false;
  });

  $(window).hashChange(function() {
    var name = window.location.hash.replace('#', '');
    name = name || 'main';
    PAGE_LOADER['_load_' + name]();
  });
  // window.location.hash = '';
  $(window).hashChange();
});