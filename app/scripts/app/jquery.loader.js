(function($, undefined) {
  'use strict';

  $.loading = function(loading) {
    var loader = $('.loading');
    loading ? loader.removeClass('hide') : loader.addClass('hide');
  };
})(jQuery);