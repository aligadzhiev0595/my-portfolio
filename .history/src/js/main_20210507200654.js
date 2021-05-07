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
    if ( $(this).scrollTop() > $('.exp').offset().top - 600 ) {
        $('.wrapper__svg-circle:last').addClass('wrapper__svg-circle_active');
        $('.wrapper__titleH').addClass('wrapper__titleH_active');
        $('.wrapper__svg-circle:last').addClass('wrapper__svg-circle_active');
        $('.wrapper__svg-circle:last').addClass('wrapper__svg-circle_active');
        $('.wrapper__svg-circle:last').addClass('wrapper__svg-circle_active');
    }
});