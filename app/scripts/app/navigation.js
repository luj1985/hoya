$(function() {
  $('.nav-item').click(function() {
    var this_list = $(this).attr('data-list');

    var _order = $(this).attr('data-order');
    $('.nav-item.active').removeClass('active');
    $('.nav-item[data-order=' + _order + ']').addClass('active');

    $('.nav-list > li.active').click();

    if (this_list) {
      if (!$(this_list).hasClass('active')) {
        $('.nav-list.active').animate({
          'bottom': ['-600px', 'easeInExpo']
        }, 200).removeClass('active');
        $(this_list).animate({
          'bottom': ['0px', 'easeOutExpo']
        }, 200).addClass('active');
      }
    } else if ($(this).attr('data-fake') === 'yes') {
      var _idx = $(this).parent().children('.nav-item').index($(this));
      $('#main').find('.nav-item').eq(_idx).attr('data-delay_click', 'yes');
    }
  });


  $('.nav-list > li').hover(function() {
    var _key = $(this).attr('data-year') ? {
      key: 'data-year',
      val: $(this).attr('data-year')
    } : {
      key: 'data-category',
      val: $(this).attr('data-category')
    };

    $('.nav-list > li.active').removeClass('active');
    $(this).addClass('active');
    $('#my_index_tetris').find('.tetris-block').addClass('tetris-transparent').end().find('.tetris-block[' + _key.key + '=' + _key.val + ']').removeClass('tetris-transparent');
  }, function() {
    $('body').one('click', function(e) {
      if (!$(e.target).parents('.nav-list').length) {

        $('.nav-list > li.active').removeClass('active');
        $('#my_index_tetris').find('.tetris-block').removeClass('tetris-transparent');
      }
    });
  });
});