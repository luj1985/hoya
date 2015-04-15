(function(window, $) {
  'use strict';

  var TRANSITION_END = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  $.fn.transitionend = function(callback, property) {
    var length = this.length, count = 0;

    function propertyMatcher(e) {
      return e.originalEvent.propertyName === property;
    }

    function matchAll() {
      return true;
    }
    
    var matcher = property ? propertyMatcher : matchAll;

    return this.bind(TRANSITION_END, function(e) {
      if (matcher(e)) {
        if (++count >= length && callback) {
          callback.apply(this);
        }
      }
    });
  };

})(window, jQuery);