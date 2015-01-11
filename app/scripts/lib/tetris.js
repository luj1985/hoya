(function() {
  window.HY = {
    getUrlParam: function(name, str) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var search = ("string" == typeof str) ? str : window.location.search;
      var r = search.substr(1).match(reg);
      (r != null) ? r = decodeURIComponent(r[2]) : r = undefined;
      return r;
    },
    getRdInt: function(maxVal) {
      return Math.floor(Math.random() * (maxVal + 1));
    },
    loading: function(loading) {
      loading ? $('.loading,.loading_shade').removeClass('dn') : $('.loading,.loading_shade').addClass('dn');
    },
    loadimg: function(arr, funLoading, funOnLoad, funOnError) {

      var numLoaded = 0,
        numError = 0,
        isObject = Object.prototype.toString.call(arr) === "[object Object]" ? true : false;

      var arr = isObject ? arr.get() : arr;
      for (a in arr) {
        var src = isObject ? $(arr[a]).attr("data-src") : arr[a];
        preload(src, arr[a]);
      }

      function preload(src, obj) {
        var img = new Image();
        img.onload = function() {
          numLoaded++;
          funLoading && funLoading(numLoaded, arr.length, src, obj);
          funOnLoad && numLoaded == arr.length && funOnLoad(numError);
        };
        img.onerror = function() {
          numLoaded++;
          numError++;
          funOnError && funOnError(numLoaded, arr.length, src, obj);
        }
        img.src = src;
      }

    }
  };
  HY.tetris = function(conf) {
    var _this = this;
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

    function __getMyText(text) {
      if (/[^0-9]/.test(text.slice(0, 1))) {
        text = '<i>' + text.slice(0, 1) + '</i>' + text.slice(1);
      } else if (text.length > 4) {
        text = '<span style="line-height: 12px;word-break: break-all;position: absolute;width: 100%;left: 0;top: 12px;">' + text + '</span>';
      }
      return text;
    }

    function __generator(tdata) {
      var __bottom = (conf._dy * 1.3 + tdata.y * conf.standard);
      var __left = tdata.x * conf.standard;
      var _html = '<div class="' + conf.tclass + '" data-aidx="' + tdata.aIndex + '" data-atype="' + tdata.aType + '" data-left="' + __left + '" data-bottom="' + Math.round(__bottom - conf._dy * 1.3) + '" style="bottom:' + Math.round(__bottom) + 'px;left:' + __left + 'px;">';
      var _case = tdata.shape + '' + tdata.orientation;
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

      for (var i = 0; i < _matrix_pos.length; i++) {
        var cssDict = {
          // ta: ['left', 'center', 'right'],
          ta: ['center', 'center', 'center'],
          // lh: ['25px', '43px', '62px']
          lh: ['60px', '60px', '60px']
        }
        var randomCss = 'text-align:' + cssDict.ta[HY.getRdInt(2)] + ';line-height:' + cssDict.lh[HY.getRdInt(2)] + ';';

        var thumbnail_img = tdata.text[i] === '' ? '' : ('<span class="case_title" style="width: ' + conf.tCaseData[tdata.text[i]].text.replace(/[^a-z0-9A-Z\s]/g, 'AA').length * 7.23 + 'px;">' + conf.tCaseData[tdata.text[i]].text + '</span><img class="case_thumbnail" data-src="images/case/' + tdata.text[i] + '/a.jpg?20140629" alt="' + conf.tCaseData[tdata.text[i]].text + '" />');

        _html += '<span class="' + conf.tbclass + '" style="color:' + tdata.textColor + ';background-color:' + tdata.bgColor + ';top:' + _matrix_pos[i][1] * conf.standard + 'px;left:' + _matrix_pos[i][0] * conf.standard + 'px;' + randomCss + '" data-case="' + tdata.text[i] + '"' + ((tdata.text[i] !== '' && conf.tCaseData[tdata.text[i]]) ? (' data-year="' + conf.tCaseData[tdata.text[i]].year + '" data-category="' + conf.tCaseData[tdata.text[i]].category) : '') + '">' + thumbnail_img + __getMyText(tdata.text[i]) + '</span>';
      }

      _html += '</div>';
      conf.container.append(_html);
    }

    function __animate() {
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

    _this.flyAway = function(fatime, delay) {
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
        // console.log(_sprt)
        this_t.delay(_sprt).animate(_adict[parseInt(this_t.attr('data-atype'), 10)], fatime);
      }
    }

    _this.reset = function() {
      conf.container.children('.' + conf.tclass).each(function() {
        $(this).css('left', $(this).attr('data-left') + 'px');
        $(this).css('bottom', $(this).attr('data-bottom') + 'px');
      });
    }

    _this.init = function(callback) {
      $.each(conf.tetris, function(key, val) {
        __generator(val);
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
      return _this;
    };

    _this.start = function(callback) {
      __animate();
      setTimeout(function() {
        callback();
      }, conf.speed * conf.tetris.length);
    };
  };
})();