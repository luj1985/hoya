(function(window, $, undefined) {
  'use strict';

  $.loadimg = function(arr, fnLoading, fnLoad, fnError) {
    var i = 0,
        numError = 0,
        isObject = Object.prototype.toString.call(arr) === '[object Object]' ? true : false;

    function preload(src, obj) {
      var img = new Image();
      img.onload = function() {
        i++;
        fnLoading && fnLoading(i, arr.length, src, obj);
        fnLoad && i === arr.length && fnLoad(numError);
      };
      img.onerror = function() {
        i++;
        numError++;
        fnError && fnError(i, arr.length, src, obj);
      };
      img.src = src;
    }

    arr = isObject ? arr.get() : arr;
    for (var a in arr) {
      var src = isObject ? $(arr[a]).attr('data-src') : arr[a];
      preload(src, arr[a]);
    }
  };
})(window, jQuery);