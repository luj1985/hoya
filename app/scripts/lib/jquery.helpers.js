(function(window, $, undefined) {
  $.fn.classed = function(cls, predictor) {
    this.each(function() {
      var page = $(this);
      if (predictor(page)) {
        page.addClass(cls);
      } else {
        page.removeClass(cls);
      }
    });
  }
})(window, jQuery);