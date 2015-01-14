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


  function formatCaseNumber(caseid) {
    if (!caseid)  return '';
    
    var html = '<div class="case">';
    var matches = caseid.match(/^([a-zA-Z])(\d+)$/);
    if (matches) {
      var l = matches[1], no = matches[2];
      html += '<i>' + l + '</i>';
      html += '<span>' + no + '</span>';
    } else {
      html += '<span>' + caseid + '</span>';
    }
    html += '</div>';
    return html;
  }

  function generateBlock(conf, tdata) {
    var size = conf.standard;
    var bottom = (conf.height * 1.3 + tdata.y * size);
    var left = tdata.x * size;
    var html = $('<div>')
      .attr({
        'class': conf.blockStyle,
        'data-aidx': tdata.aIndex,
        'data-atype': tdata.aType,
        'data-left': left,
        'data-bottom': Math.round(bottom - conf.height * 1.3)
      }).css({
        left: left,
        bottom: Math.round(bottom)
      });
    var _case = tdata.shape + '' + tdata.orientation;
    var _matrix_pos = matrixPos(_case);

    for (var i = 0; i < _matrix_pos.length; i++) {
      var name = tdata.text[i] || '';
      var pos = _matrix_pos[i];
      var block = $('<span>')
        .attr('class', conf.cellStyle)
        .attr('data-case', name)
        .css({
          'color' : tdata.textColor,
          'background-color': tdata.bgColor,
          'top': pos[1] * size + 'px',
          'left': pos[0] * size + 'px',
          'height': size + 'px',
          'width': size + 'px',
          // exclude 1px border and 1px padding
          'font-size' : ((size - 4) / 3) + 'px',
          'line-height': (size / 3) + 'px'
        });

      var d = conf.tCaseData[name];
      if (name !== '' && d) {
        var preview = [
          '<div class="preview">',
            '<h5>' + d.text + '</h5>',
            '<img data-src="images/case/' + name + '/a.jpg" alt="' + d.text + '">',
          '</div>'
        ].join('\n');

        block.attr({
          'data-year': d.year,
          'data-category': d.category
        })
        .append(preview);
      }
      block.append(formatCaseNumber(name)).appendTo(html);
    }
    conf.container.append(html);
  }

  function Tetris(conf) {

    this.tetris = conf.tetris;

    this.flyAway = function(fatime, delay) {
      var container = conf.container,
          width = $(window).width(),
          height = $(window).height(),
          easing = ['0', 
            { 'left': ['+=' + width + 'px', 'easeInQuad'] }, 
            { 'bottom': ['-=' + height + 'px', 'easeInQuad'] }, 
            { 'left': ['-=' + width + 'px', 'easeInQuad'] }, 
            { 'bottom': ['+=' + width + 'px', 'easeInQuad'] }
          ];

      container.children('.tetris-block')
        .stop(true, true)
        .each(function() {
          var node = $(this);
          var idx = node.data('aidx'),
              atype = parseInt(node.data('atype'), 10);
          node.delay(idx * delay).animate(easing[atype], fatime);
        });
    }

    this.reset = function() {
      conf.container.children('.tetris-block').each(function() {
        var $this = $(this);
        $this.css({
          'left': $this.attr('data-left') + 'px',
          'bottom': $this.attr('data-bottom') + 'px'
        });
      });
    }

    this.init = function(callback) {
      $.each(conf.tetris, function(_, val) {
        generateBlock(conf, val);
      });
      callback();
      return this;
    };

    this.start = function(callback) {
      var step = Math.round(conf.height * 1.3);
      conf.container.children('.tetris-block').each(function(i) {
        $(this).delay(i * conf.speed * 0.93)
          .animate({'bottom': ['-=' + step + 'px', 'easeOutExpo']}, conf.speed);
      });
      setTimeout(callback, conf.speed * conf.tetris.length);
    };
  };

  $.fn.tetris = function(options) {
    options = $.extend({
      blockStyle: 'tetris-block',
      cellStyle: 'tetris-cell',
      tetris: [],
      tCaseData: {},
      height: 500,
      standard: 10,
      speed: 100
    }, options);
    return new Tetris(options);
  }
})(window, jQuery);