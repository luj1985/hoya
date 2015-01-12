(function(window, $, undefined) {
  $.loadimg = function(arr, funLoading, funOnLoad, funOnError) {
    var numLoaded = 0,
        numError = 0,
        isObject = Object.prototype.toString.call(arr) === "[object Object]" ? true : false;

    var arr = isObject ? arr.get() : arr;
    for (a in arr) {
      var src = isObject ? $(arr[a]).attr("data-src") : arr[a];
      preload(src, arr[a]);
    }

    function preload(src, obj) {
      var img = new Image();
      img.onload = function() {
        numLoaded++;
        funLoading && funLoading(numLoaded, arr.length, src, obj);
        funOnLoad && numLoaded == arr.length && funOnLoad(numError);
      };
      img.onerror = function() {
        numLoaded++;
        numError++;
        funOnError && funOnError(numLoaded, arr.length, src, obj);
      }
      img.src = src;
    }
  }
})(window, jQuery);