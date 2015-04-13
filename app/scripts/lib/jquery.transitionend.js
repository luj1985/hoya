(function(window, $) {
  'use strict';

  var TRANSITION_END = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  $.fn.transitionend = function(callback) {
    var length = this.length, count = 0;
    return this.bind(TRANSITION_END, function() { 
      if (++count === length && callback) {
        callback.apply(this);
      }
    });
  };

})(window, jQuery);