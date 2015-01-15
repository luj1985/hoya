$(function() {
  $('.team-name-list').on('click', 'li', function() {
    var page = $(this);
    var _lis = page.parent().children('li');
    var _idx = _lis.index(page);
    // console.log(_idx)
    _lis.removeClass('active');
    page.addClass('active');

    page.parent().siblings('.team-detail').addClass('dn').eq(_idx).removeClass('dn');
  });
});