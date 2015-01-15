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
    var shapeId = tdata.shape + '' + tdata.orientation;
    var shape = SHAPES[shapeId] || [];

    for (var i = 0; i < shape.length; i++) {
      var name = tdata.text[i] || '';
      var pos = shape[i];
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
          '<a class="preview" href="#case_' + name + '">',
            '<h5>' + d.text + '</h5>',
            '<img data-src="images/case/' + name + '/a.jpg" alt="' + d.text + '">',
          '</a>'
        ].join('\n');
        var dom = $(preview).data('case', name);

        block.attr({
          'data-year': d.year,
          'data-category': d.category
        })
        .append(dom);
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
    };

    this.reset = function() {
      conf.container.children('.tetris-block').each(function() {
        var $this = $(this);
        $this.css({
          'left': $this.attr('data-left') + 'px',
          'bottom': $this.attr('data-bottom') + 'px'
        });
      });
    };

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
  }

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
  };
})(window, jQuery);