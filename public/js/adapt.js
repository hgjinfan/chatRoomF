(function() {
    var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?5b54f32e24f54c1326f588f61ee7f0ec";
      var s = document.getElementsByTagName("script")[0]; 
})();
// Rem布局方式 100px = 1rem
; (function (doc, win) {
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }
if (!doc.addEventListener) return
win.addEventListener(resizeEvt, recalc, false)
doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)