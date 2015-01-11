(function(window, $, undefined) {

  function matrixPos(_case) {
    var _matrix_pos = [];

    switch (_case) {
      case '11':
        _matrix_pos = [
          [0, 0], // left, top; x, y
          [1, 0],
          [0, 1],
          [1, 1]
        ];
        break;
      case '21':
        _matrix_pos = [
          [1, 0],
          [0, 1],
          [1, 1],
          [2, 1]
        ];
        break;
      case '22':
        _matrix_pos = [
          [0, 0],
          [0, 1],
          [1, 1],
          [0, 2]
        ];
        break;
      case '23':
        _matrix_pos = [
          [0, 0],
          [1, 0],
          [2, 0],
          [1, 1]
        ];
        break;
      case '24':
        _matrix_pos = [
          [1, 0],
          [0, 1],
          [1, 1],
          [1, 2]
        ];
        break;
      case '31':
        _matrix_pos = [
          [0, 0],
          [0, 1],
          [1, 1],
          [2, 1]
        ];
        break;
      case '32':
        _matrix_pos = [
          [0, 0],
          [1, 0],
          [0, 1],
          [0, 2]
        ];
        break;
      case '33':
        _matrix_pos = [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1]
        ];
        break;
      case '34':
        _matrix_pos = [
          [1, 0],
          [1, 1],
          [0, 2],
          [1, 2]
        ];
        break;
      case '41':
        _matrix_pos = [
          [2, 0],
          [0, 1],
          [1, 1],
          [2, 1]
        ];
        break;
      case '42':
        _matrix_pos = [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 2]
        ];
        break;
      case '43':
        _matrix_pos = [
          [0, 0],
          [1, 0],
          [2, 0],
          [0, 1]
        ];
        break;
      case '44':
        _matrix_pos = [
          [0, 0],
          [1, 0],
          [1, 1],
          [1, 2]
        ];
        break;
      case '51':
        _matrix_pos = [
          [1, 0],
          [0, 1],
          [1, 1],
          [0, 2]
        ];
        break;
      case '52':
        _matrix_pos = [
          [0, 0],
          [1, 0],
          [1, 1],
          [2, 1]
        ];
        break;
      case '61':
        _matrix_pos = [
          [0, 0],
          [0, 1],
          [1, 1],
          [1, 2]
        ];
        break;
      case '62':
        _matrix_pos = [
          [1, 0],
          [2, 0],
          [0, 1],
          [1, 1]
        ];
        break;
      case '71':
        _matrix_pos = [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4]
        ];
        break;
      case '72':
        _matrix_pos = [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0]
        ];
        break;
      case '81':
        _matrix_pos = [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
          [0, 5]
        ];
        break;
      case '82':
        _matrix_pos = [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0]
        ];
        break;
      default:
        _matrix_pos = [];
    }
    return _matrix_pos;
  }


  function formatCaseNumber(text) {
    if (/[^0-9]/.test(text.slice(0, 1))) {
      text = '<i>' + text.slice(0, 1) + '</i><span>' + text.slice(1) + '</span>';
    } else if (text.length > 4) {
      text = '<span">' + text + '</span>';
    }
    return text;
  }

  // TODO: should use template to generate html
  function blockGenerator(conf, tdata) {
    var bottom = (conf._dy * 1.3 + tdata.y * conf.standard);
    var left = tdata.x * conf.standard;
    var html = $('<div>')
      .attr('class', conf.tclass)
      .attr('data-aidx', tdata.aIndex)
      .attr('data-atype', tdata.aType)
      .attr('data-left', left)
      .attr('data-bottom', Math.round(bottom - conf._dy * 1.3))
      .css({
        left: left,
        bottom: Math.round(bottom)
      });
    var _case = tdata.shape + '' + tdata.orientation;
    var _matrix_pos = matrixPos(_case);

    for (var i = 0; i < _matrix_pos.length; i++) {
      var name = tdata.text[i] || '';

      var block = $('<span>')
        .attr('class', conf.tbclass)
        .attr('data-case', name)
        .css({
          'color' : tdata.textColor,
          'background-color': tdata.bgColor,
          'top': _matrix_pos[i][1] * conf.standard + 'px',
          'left': _matrix_pos[i][0] * conf.standard + 'px',
          'height': conf.standard,
          'width': conf.standard,
          'font-size' : (conf.standard / 3) + 'px',
          'line-height': (conf.standard / 3) + 'px'
        });

      var d = conf.tCaseData[name];
      if (name !== '' && d) {
        block.attr('data-year', d.year);
        block.attr('data-category', d.category);
        var title = $('<span>')
          .attr('class', 'case_title')
          .css('width', d.text.replace(/[^a-z0-9A-Z\s]/g, 'AA').length * 7.23 + 'px')
          .text(d.text);

        var thumbnail = $('<img>')
          .attr('class', 'case_thumbnail')
          .attr('data-src', 'images/case/' + name + '/a.jpg?20140629')
          .attr('alt', d.text);

        block.append(title);
        block.append(thumbnail);
      }

      block.append(formatCaseNumber(name));

      html.append(block);
    }
    conf.container.append(html);
  }

  function __animate(conf) {
    var _tetris = conf.container.children('.' + conf.tclass);
    var _mry = Math.round(conf._dy * 1.3);

    _tetris.each(function(key) {
      var _aem = $(this);
      setTimeout(function() {
        _aem.animate({
          'bottom': ['-=' + _mry + 'px', 'easeOutExpo']
        }, conf.speed);
      }, key * conf.speed * 0.93);
    });
  }


  $.tetris = function(conf) {
    conf = $.extend({
      container: $('#container'),
      tclass: 'tetris',
      tbclass: 'tetris-block',
      tetris: [{
        bgColor: '#ccc',
        textColor: '#fff',
        text: ['CGHP', 'LDTF', 'TZD2', 'QJNT'],
        shape: 5,
        orientation: 1,
        aIndex: 2, // animate away index
        aType: 1, // animate type ->: 1
        x: 8,
        y: 11
      }],
      tCaseData: {},
      _dy: 500,
      standard: 10, // 1个x/y坐标单位
      speed: 100 // 单帧动画速度
    }, conf);

    this.flyAway = function(fatime, delay) {
      var _tetris = conf.container.children('.' + conf.tclass);
      _tetris.stop(true, true);

      var _sprt = 0;
      var _ww = $(window).width();
      var _wh = $(window).height();
      var _adict = ['0', {
        'left': ['+=' + _ww + 'px', 'easeInQuad']
      }, {
        'bottom': ['-=' + _wh + 'px', 'easeInQuad']
      }, {
        'left': ['-=' + _ww + 'px', 'easeInQuad']
      }, {
        'bottom': ['+=' + _ww + 'px', 'easeInQuad']
      }];
      for (var i = 1; i <= conf.tetris.length; i++) {
        _sprt += delay;
        var this_t = conf.container.children('.' + conf.tclass + '[data-aidx=' + i + ']');
        this_t.delay(_sprt).animate(_adict[parseInt(this_t.attr('data-atype'), 10)], fatime);
      }
    }

    this.reset = function() {
      conf.container.children('.' + conf.tclass).each(function() {
        $(this).css('left', $(this).attr('data-left') + 'px');
        $(this).css('bottom', $(this).attr('data-bottom') + 'px');
      });
    }

    this.init = function(callback) {
      $.each(conf.tetris, function(key, val) {
        blockGenerator(conf, val);
      });

      $('.case_thumbnail').hover(function() {
        var $this = $(this);

        var $case_title = $this.siblings('.case_title');
        var _oft = $this.offset();
        var _case = $this.attr('data-case');
        _oft.dtop = _oft.top + 60;
        _oft.top = _oft.top + 10;
        _oft.dleft = _oft.left + 55;
        _oft.left = _oft.left + 10;
        $('body').on('mousemove.c_t' + _case, function(e) {
          if (_oft.top < e.pageY && _oft.dtop > e.pageY && _oft.left < e.pageX && _oft.dleft > e.pageX) {
            $case_title.offset({
              top: e.pageY - 10,
              left: e.pageX
            });
          } else {
            $('body').off('mousemove.c_t' + _case);
            $case_title.css('z-index', '-1');
            setTimeout(function() {
              $case_title.css('z-index', '101');
            }, 88);
          }
        });
      }, function(e) {
        // if (!$(e.relatedTarget).hasClass('case_title')) {
        //   $('body').off('mousemove.c_t');
        // }
      });
      callback();
      return this;
    };

    this.start = function(callback) {
      __animate(conf);
      setTimeout(function() {
        callback();
      }, conf.speed * conf.tetris.length);
    };
  };
})(window, jQuery);