define(function(require,exports,module){

  require("swipe");

  window.mySwipe = new Swipe(document.getElementById('slider'), {
    speed: 400,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem) {},
    transitionEnd: function(index, elem) {}
  });


})
