(function(window, $, undefined) {

  $.fn.transitionend = function(callback) {
    var length = this.length, count = 0;
    return this.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
      if (++count === length) {
        callback && callback();
      }
    });
  };

})(window, jQuery);