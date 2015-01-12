(function(window, $, undefined) {
  $.loading = function(loading) {
    var loader = $('.loading,.loading_shade');
    loading ? loader.removeClass('dn') : loader.addClass('dn');
  }
})(window, jQuery);