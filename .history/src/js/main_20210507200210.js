var angle = 0;

function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) {
        angle = angle + 45;
    } else {
        angle = angle - 45;
    }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

$(window).scroll(function(){
    if ( $(this).scrollTop() > $('.wrapper__svg-circle').offset().top - 600 ) {
        $('.wrapper__svg-circle:second').addClass('wrapper__svg-circle_active');
    }
});