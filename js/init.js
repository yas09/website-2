$(document).ready(function(){
/*
    onViewport(".header__desc-box", "slideOutLeft","slideInLeft", 200, function() {
    });
   
    onViewport(".about-area", "fadeIn", "hide", 400, function() {
    });

    onViewport(".resume-area", "fadeIn", "hide", 900, function() {
    });
*/
    $('.smooth-goto').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top + 50
        }, 1000);
    });
});