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
  var SCALE = 1.3,
      COLUMNS = 12,
      DELAY = 200,
      SCREEN_HEIGHT = $(window).height();

  function caculateEasing() {
    var screenWidth = $(window).width(), screenHeight = $(window).height();
    return [
      { 'left':   function(i, v) { return (parseInt(v) + screenWidth) + 'px'; }},
      { 'bottom': function(i, v) { return (parseInt(v) + screenHeight) + 'px'; }},
      { 'left':   function(i, v) { return (parseInt(v) - screenWidth) + 'px'; }},
      { 'bottom': function(i, v) { return (parseInt(v) - screenHeight) + 'px'; }}
    ];
  }

  var EASING = caculateEasing();

  $(window).on('resize', function() {
    EASING = caculateEasing();
    SCREEN_HEIGHT = $(window).height();
  });

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

  function generateBlock(conf, def) {
    var size = conf.standard;
    var block = $('<div>')
      .attr('class', 'tetris-block')
      .data({
        'aidx': def.aIndex,
        'atype': def.aType
      }).data({
        'x' : def.x,
        'y' : def.y
      });

    var shapeId = def.shape + '' + def.orientation;
    var shape = SHAPES[shapeId] || [];

    for (var i = 0, length = shape.length; i < length; i++) {
      var name = def.text[i] || '';
      var pos = shape[i];
      var cell = generateCell(name, pos, def);
      block.append(cell);
    }
    return block;
  }


  function generateCell(name, pos, def) {
    var cell = $('<span>')
      .attr('class', 'tetris-cell')
      .attr('data-case', name)
      .data({ x: pos[0], y: pos[1] })
      .css({
        'color' : def.textColor,
        'background-color': def.bgColor
      });

    var d = RELATIONSHIP[name];
    if (d) {
      cell.attr({
        'data-year': d.year,
        'data-category': d.category,
      })
    }
    return cell.append(formatCaseNumber(name));
  }

  function updateCellPosition(container, conf) {
    var size = conf.standard;
    return container.find('.tetris-cell').each(function() {
      var cell = $(this);
      var y = cell.data('y'), 
          x = cell.data('x');

      cell.css({
        'top': y * size + 'px',
        'left': x * size + 'px',
        'height': size + 'px',
        'width': size + 'px',
        // exclude 1px border and 1px padding
        'font-size' : ((size - 4) / 3) + 'px',
        'line-height': (size / 3) + 'px'
      })
    });
  }

  function updateBlockPosition(container, conf) {
    var size = conf.standard;
    return container.find('.tetris-block').each(function() {
      $(this).css({
        left: function() {
          return $(this).data('x') * size + 'px';
        },
        bottom: function() {
          var block = $(this), y = block.data('y');
          if (container.hasClass('dropping') || container.hasClass('reset')) {
            return Math.round(y * size) + 'px';
          }
          return y * size + conf.height * SCALE + 'px';
        }
      })
    });
  }

  function updatePosition(container, conf) {
    updateCellPosition(container, conf);
    updateBlockPosition(container, conf);
    return container;
  }

  function Tetris(container, conf) {
    var finished = false, away = false;

    this.init = function() {
      var size = conf.standard;
      $.each(conf.tetris, function(i, def) {
        var block = generateBlock(conf, def);
        container.append(block);
      });
      updatePosition(container, conf);
      return this;
    };

    this.start = function(callback) {
      if (finished) {
        callback && callback();
        return this
      };

      container
        .removeClass('fly reset')
        .addClass('dropping')
        .children('.tetris-block')
        .css('transition-delay', function(i) {
          return Math.round(i * DELAY) + 'ms';
        });

      updatePosition(container, conf).transitionend(callback);
      finished = true;
    };

    this.reset = function() {
      container
        .removeClass('dropping fly')
        .addClass('reset');

      updatePosition(container, conf);
    };

    this.flyAway = function(callback) {
      if (away || !finished) {
        callback && callback();
        return this;
      }

      container
        .removeClass('dropping reset')
        .addClass('fly')
        .children('.tetris-block')
        .each(function() {
          var node = $(this);
          var idx = node.data('aidx'),
              atype = parseInt(node.data('atype')) - 1;
          node.css('transition-delay', (idx * 80) + 'ms');
          node.css(EASING[atype]);
        })
        .transitionend(callback);

      away = true;
    };

    this.getCellSize = function() {
      var width = this.width();
      return (width / COLUMNS);
    }
  }

  $.fn.tetris = function(options) {
    var tetris = this.data('tetris');
    if (tetris) { return tetris; }

    var width = this.width();   
    options = $.extend({
      tetris: [],
      height: SCREEN_HEIGHT,
      standard: width / COLUMNS
    }, options);
    tetris = new Tetris(this, options);

    this.data('tetris', tetris);
    return tetris.init();
  };
})(window, jQuery);