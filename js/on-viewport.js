function onViewport(el, elClass, elClass2, offset, callback) {
    /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
    var didScroll = false;
    var this_top;
    var height;
    var top;
    
    if(!offset) { var offset = 0; }
   
    $(window).scroll(function() {
        didScroll = true;
    });
   
    setInterval(function() {
      if (didScroll) {
        didScroll = false;
        top = $(this).scrollTop();
   
        $(el).each(function(i){
          this_top = $(this).offset().top - offset;
          height   = $(this).height();
   
          // Scrolled within current section
          if (top >= this_top && !$(this).hasClass(elClass)) {
            $(this).addClass(elClass);
            $(this).removeClass(elClass2);
            if (typeof callback == "function") callback(el);
          }
          else if (top < this_top && $(this).hasClass(elClass)){
            $(this).removeClass(elClass);
            $(this).addClass(elClass2);

          }
        });
      }
    }, 100);
}

