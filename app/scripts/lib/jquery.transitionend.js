(function(window, $, undefined) {
  'use strict';

  $.fn.transitionend = function(callback) {
    var length = this.length, count = 0;
    return this.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){ 
      console.log('transition end event was received')
      if (++count === length && callback) {
        callback.apply(this);
      }
    });
  };

})(window, jQuery);