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

  function generateBlock(options, def) {
    var size = options.standard;
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

  function Tetris(container, options) {
    var finished = false, away = false;

    this.getOptions = function() {
      return options;
    };

    this.init = function() {
      $.each(options.tetris, function(i, def) {
        var block = generateBlock(options, def);
        container.append(block);
      });
      container.animateTetris();
      return this;
    };

    this.start = function(callback) {
      container
        .removeClass('fly reset')
        .addClass('drop')
        .children('.tetris-block')
        .css('transition-delay', function(i) { return Math.round(i * DELAY) + 'ms'; })
        .end()
        .animateTetris()
        .transitionend(callback);

      this.start = function() {
        callback && callback();
      }
    };

    this.reset = function() {
      container
        .removeClass('drop fly')
        .addClass('reset')
        .animateTetris();
    };

    this.flyAway = function(callback) {
      container
        .removeClass('drop reset')
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

      this.flyAway = function() {
        callback && callback();
      }
    };

    this.getCellSize = function() {
      var width = this.width();
      return (width / COLUMNS);
    }
  }



  function updateCellPosition(container, options) {
    var size = options.standard;
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

  function updateBlockPosition(container, options) {
    var size = options.standard,
        dropped = (container.hasClass('drop') || container.hasClass('reset')),
        offset = options.height * SCALE;

    return container.find('.tetris-block').each(function() {
      var block = $(this), x = block.data('x'), y = block.data('y');
      var left = x * size, bottom = y * size;
      bottom = dropped ? bottom : bottom + offset;
      block.css({ left: left + 'px', bottom: Math.round(bottom) + 'px' });
    });
  }

  $.fn.animateTetris = function() {
    var tetris = this.data('tetris');
    if (!tetris) throw new Error('cannot access tetris settings');

    var options = tetris.getOptions(), container = this;
    updateBlockPosition(container, options);
    updateCellPosition(container, options);
    return this;
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