$(function() {
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
    $('#my_index_tetris')
      .find('.tetris-block')
      .addClass('tetris-transparent')
    .end()
      .find('.tetris-block[' + _key.key + '=' + _key.val + ']')
      .removeClass('tetris-transparent');
  });
});