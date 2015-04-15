(function(window, $) {
  'use strict';

  var TRANSITION_END = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  $.fn.transitionend = function(callback, property) {
    var length = this.length, count = 0;

    function propertyMatcher(e) {
      var pn = e.originalEvent.propertyName;
      return !!callback && ($.isArray(property) ? (property.indexOf(pn) !== -1) : (pn === property));
    }
    function matchAll() { return !!callback; }    
    var matcher = property ? propertyMatcher : matchAll;
    // cancel unfinished transition
    return this.unbind(TRANSITION_END).bind(TRANSITION_END, function(e) {
      if (matcher(e) && (++count >= length)) {
        callback.apply(this);
      }
    });
  };

})(window, jQuery);