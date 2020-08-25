$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.header').addClass('alt');
    }
    else {
        $('.header').removeClass('alt');
    }
});