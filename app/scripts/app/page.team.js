$(function() {
  $('.team-name-list').on('click', 'li', function() {
    var $this = $(this);
    var _lis = $this.parent().children('li');
    var _idx = _lis.index($this);
    // console.log(_idx)
    _lis.removeClass('active');
    $this.addClass('active');

    $this.parent().siblings('.team-detail').addClass('dn').eq(_idx).removeClass('dn');
  });
});