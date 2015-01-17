(function(window, $, undefined) {
  'use strict';

  var SHAPES = {
    '11': [ [0, 0], [1, 0], [0, 1], [1, 1] ],
    '21': [ [1, 0], [0, 1], [1, 1], [2, 1] ],
    '22': [ [0, 0], [0, 1], [1, 1], [0, 2] ],
    '23': [ [0, 0], [1, 0], [2, 0], [1, 1] ],
    '24': [ [1, 0], [0, 1], [1, 1], [1, 2] ],
    '31': [ [0, 0], [0, 1], [1, 1], [2, 1] ],
    '32': [ [0, 0], [1, 0], [0, 1], [0, 2] ],
    '33': [ [0, 0], [1, 0], [2, 0], [2, 1] ],
    '34': [ [1, 0], [1, 1], [0, 2], [1, 2] ],
    '41': [ [2, 0], [0, 1], [1, 1], [2, 1] ],
    '42': [ [0, 0], [0, 1], [0, 2], [1, 2] ],
    '43': [ [0, 0], [1, 0], [2, 0], [0, 1] ],
    '44': [ [0, 0], [1, 0], [1, 1], [1, 2] ],
    '51': [ [1, 0], [0, 1], [1, 1], [0, 2] ],
    '52': [ [0, 0], [1, 0], [1, 1], [2, 1] ],
    '61': [ [0, 0], [0, 1], [1, 1], [1, 2] ],
    '62': [ [1, 0], [2, 0], [0, 1], [1, 1] ],
    '71': [ [0, 1], [0, 2], [0, 3], [0, 4] ],
    '72': [ [1, 0], [2, 0], [3, 0], [4, 0] ],
    '81': [ [0, 1], [0, 2], [0, 3], [0, 4], [0, 5] ],
    '82': [ [1, 0], [2, 0], [3, 0], [4, 0], [5, 0] ]
  };

  function formatCaseNumber(caseid) {
    if (!caseid) {
      return '';
    }

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

  function generateCell(name, pos, tdata, size) {
    var cell = $('<span>')
      .attr('class', 'tetris-cell')
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

    var d = CASEDICT[name];
    if (d) {
      cell.attr({
        'data-year': d.year,
        'data-category': d.category
      })
    }
    cell.append(formatCaseNumber(name))
    return cell;
  }

  function generateBlock(container, conf, tdata) {
    var size = conf.standard;
    var bottom = (conf.height * 1.3 + tdata.y * size);
    var left = tdata.x * size;
    var block = $('<div>')
      .attr('class', conf.blockStyle)
      .css({
        left: left,
        bottom: Math.round(bottom)
      }).data({
        'left': left + 'px',
        'bottom': Math.round(bottom - conf.height * 1.3) + 'px',
        'aidx': tdata.aIndex,
        'atype': tdata.aType
      });
    var shapeId = tdata.shape + '' + tdata.orientation;
    var shape = SHAPES[shapeId] || [];

    for (var i = 0; i < shape.length; i++) {
      var name = tdata.text[i] || '';
      var pos = shape[i];
      var cell = generateCell(name, pos, tdata, size);
      block.append(cell);
    }
    container.append(block);
  }

  function Tetris(container, conf) {

    this.init = function() {
      $.each(conf.tetris, function(_, val) {
        generateBlock(container, conf, val);
      });
      return this;
    };

    this.start = function(callback) {
      var step = Math.round(conf.height * 1.3);
      container.children('.tetris-block').each(function(i) {
        $(this).delay(i * conf.speed * 0.93)
          .animate({'bottom': ['-=' + step + 'px', 'easeOutExpo']}, conf.speed);
      });
      setTimeout(callback, conf.speed * conf.tetris.length);
    };

    this.reset = function() {
      container.children('.tetris-block').each(function() {
        var $this = $(this);
        $(this).css({
          'left': $this.data('left'),
          'bottom': $this.data('bottom')
        });
      });
    };

    this.flyAway = function(fatime, delay) {
      var width = $(window).width(),
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
    };
  }

  $.fn.tetris = function(options) {
    var tetris = this.data('tetris');
    if (tetris) {
      return tetris;
    }

    var width = this.width(),
        height = $(window).height();

    width = width > 480 ? 480 : width;     

    options = $.extend({
      blockStyle: 'tetris-block',
      cellStyle: 'tetris-cell',
      tetris: [],
      height: height,
      standard: width / 12,
      speed: 222
    }, options);
    tetris = new Tetris(this, options);

    this.data('tetris', tetris);
    return tetris.init();
  };
})(window, jQuery);