(function(window, $, undefined) {
  'use strict';

  function emptyFn(){};
  function callThought(callback) {
    return function() {
      callback();
    }
  }

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
  var SCALE = 1.3, COLUMNS = 12, DELAY = 200;

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

    this.init = function() {
      $.each(options.tetris, function(i, def) {
        var block = generateBlock(options, def);
        container.append(block);
      });
      return container.animateTetris();
    };

    this.start = function(callback) {
      callback = callback || emptyFn;
      container
        .removeClass('fly reset')
        .addClass('drop')
        .children('.tetris-block')
        .css('transition-delay', function(i) { return Math.round(i * DELAY) + 'ms'; })
        .end()
        .animateTetris()
        .transitionend(callback);

      this.start = callThought(callback);
    };

    this.reset = function() {
      container
        .removeClass('drop fly')
        .addClass('reset')
        .animateTetris();
    };

    this.flyAway = function(callback) {
      callback = callback || emptyFn;

      if (container.hasClass('drop')) {
        container
          .removeClass('drop reset')
          .addClass('fly')
          .children('.tetris-block')
          .each(function() {
            var node = $(this),
                idx = node.data('aidx'),
                atype = parseInt(node.data('atype')) - 1;
            node.css('transition-delay', (idx * 80) + 'ms');
            node.css(EASING[atype]);
          })
          .transitionend(callback);
        this.flyAway = callThought(callback);
      } else {
        callback();
      }
    };    
  }


  function updateCellPosition(container, size) {
    return container.find('.tetris-cell').each(function() {
      var cell = $(this), x = cell.data('x'), y = cell.data('y');

      cell.css({
        'left': x * size + 'px',
        'top': y * size + 'px',
        'height': size + 'px',
        'width': size + 'px',
        // exclude 1px border and 1px padding
        'font-size' : ((size - 4) / 3) + 'px',
        'line-height': (size / 3) + 'px'
      })
    });
  }

  function updateBlockPosition(container, size, height) {
    var dropped = (container.hasClass('drop') || container.hasClass('reset')),
        offset = height * SCALE;

    return container.find('.tetris-block').each(function() {
      var block = $(this), x = block.data('x'), y = block.data('y');
      var left = x * size, bottom = y * size;
      bottom = dropped ? bottom : bottom + offset;
      block.css({ left: left + 'px', bottom: Math.round(bottom) + 'px' });
    });
  }

  $.fn.animateTetris = function() {
    var width = this.width(), height = $(window).height();
    var size = width / COLUMNS;

    updateBlockPosition(this, size, height);
    updateCellPosition(this, size, height);
    return this;
  }

  $.fn.tetris = function(options) {
    var container = this;
    var tetris = container.data('tetris');
    if (tetris) { return tetris; }
 
    options = $.extend({ tetris: [] }, options);
    tetris = new Tetris(container, options);
    container.data('tetris', tetris);

    $(window).on('resize', function() {
      container.animateTetris();
    });
    return tetris.init();
  };
})(window, jQuery);