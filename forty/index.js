$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.header').addClass('alt');
    }
    else {
        $('.header').removeClass('alt');
    }
});