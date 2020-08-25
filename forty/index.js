$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.header').addClass('alt');
    }
    else {
        $('.header').removeClass('alt');
    }
});

$("#getStartedAnchor").on('click', function(event) {

    if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
        window.location.hash = hash;
    });
    }
});