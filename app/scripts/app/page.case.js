$(function() {
  $(document).on('keydown', function(e) {
    var _c_p_a = $('.case_page.active');
    var _c_p_a_ctrl = _c_p_a.find('.nivoSlider-ctrl');
    if (_c_p_a.length) {
      var _idx = _c_p_a_ctrl.children('span').index(_c_p_a_ctrl.children('span.active'));

      if (e.which === 37 || e.which === 38) {
        _idx--;
      } else if (e.which === 39 || e.which === 40) {
        _idx++;
      }

      (_idx === _c_p_a_ctrl.children('span').length) && (_idx = 0);
      (_idx === -1) && (_idx = _c_p_a_ctrl.children('span').length - 1);
      _c_p_a_ctrl.children('span').eq(_idx).click();
    }
  });
});