$(function() {
  var PAGE_INITED = $.PAGE_INITED;
  var PAGES = $.PAGES;
  var ANIMATE = $.ANIMATE;

  CASEDICT = $.extend(true, CASEDICT, RELATIONSHIP);

  PAGES['_load_case'] = function(id) {
    var name = 'case_' + id;
    $.switchPage(name, function() {
      if (!PAGE_INITED['case_' + id]) {
        $('#case_slider-' + id)
          .append(
            '<div class="nivoSlider-ctrl">' + 
            new Array($('#case_slider-' + id).children('.nivoSlider-item').length + 1).join('<span></span>') + 
            '</div>'
          )
          .children('.nivoSlider-ctrl')
          .on('click', 'span', function() {
            var $this = $(this);
            if ($this.hasClass('active')) return;

            $this.addClass('active').siblings('.active').removeClass('active');

            var prev = $this.parent().siblings('.nivoSlider-item.active');
            var idx = $this.parent().children('span').index($this);
            var next = $this.parent().siblings('.nivoSlider-item').eq(idx);
            if (idx === 1) {
              var nidc = next.children('.nivoSlider-item_desc-content');
              if (nidc.attr('data-setted') !== 'yes') {
                nidc.width(next.prev().children('img:first').height() * 1247 / 795 - 200);
                nidc.attr('data-setted', 'yes');
              }
            }

            if (prev.length) {
              prev.stop(true, true).fadeOut(200, function() {
                prev.removeClass('active');
              });
            }
            setTimeout(function() {
              next.stop(true, true).fadeIn(200, function() {
                next.addClass('active');
              });
            }, 100);
          }).children('span:first').click();


        $('#case_slider-' + id).on('click', '.nivoSlider-item', function(e) {
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

        PAGE_INITED['_load_case_' + id] = true;
      }
    });
  };

  $('#tetris').on('click', 'img', function() {
    var block = $(this);

    var bg = block.css('background-color');
    var _case = $.trim(block.data('case'));


    if (CASEDICT[_case]) {
      if (!$('#case_' + _case).length) {
        var caseImgHTML = '';
        CASEDICT[_case].desc = CASEDICT[_case].desc || '';
        for (var i = 1; i <= CASEDICT[_case].img; i++) {
          if (i === 2) {
            caseImgHTML += 
              '<div class="nivoSlider-item nivoSlider-item_desc">' + 
                '<div class="nivoSlider-item_desc-content" style="background-color: ' + bg + '">' + 
                  '<p style="margin-top: 40px;"></p>' + 
                  CASEDETAILS[_case] + 
                  '<br/><br/>' + 
                  CASEDICT[_case].desc + 
                '</div>' + 
              '</div>';
          }
          caseImgHTML += 
            '<div class="nivoSlider-item">' + 
              '<img src="images/case/' + _case + '/' + i + '.jpg?20140629" />' +
            '</div>';
        }
        if (i === 2) {
          caseImgHTML += 
            '<div class="nivoSlider-item nivoSlider-item_desc">' +
              '<div class="nivoSlider-item_desc-content" style="background-color: ' + bg + '">' + 
                '<p style="margin-top: 40px;"></p>' + 
                CASEDETAILS[_case] + 
                '<br/><br/>' + 
                CASEDICT[_case].desc + 
              '</div>' + 
            '</div>';
        }
        $('footer').before(
          '<div id="case_' + _case + '" class="page case_page" data-amt="fade">' + 
            '<div class="atc-nav">' + 
              '<a href="#main" class="atc-nav-main">&nbsp;</a>' + 
            '</div>' + 
            '<div id="case_slider-' + _case + '" class="nivoSlider">' + caseImgHTML + '</div>' + 
          '</div>'
        );

        var title = block.children('.title').clone();
        title.width(title.width() + 10);
        title.css({
          left: 0,
          display: 'block',
          zIndex: 999999,
          top: 0
        }).appendTo($('#case_' + _case));
      }
      window.location.hash = '#case_' + _case;
    }
    return false;
  });
});