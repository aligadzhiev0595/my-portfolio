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

$(window).scroll(function () {
    if ($(this).scrollTop() > $('.exp').offset().top - 600) {
        $('.wrapper__svg-circle:last').addClass('wrapper__svg-circle_active');
        $('.wrapper__titleH').addClass('wrapper__titleH_active');
        $('.wrapper__svg-circleC:last').addClass('wrapper__svg-circleC_active');
        $('.wrapper__titleC').addClass('wrapper__titleC_active');
        $('.wrapper__svg-circleJs:last').addClass('wrapper__svg-circleJs_active');
        $('.wrapper__titleJs').addClass('wrapper__titleJs_active');
        $('.wrapper__svg-circleJ:last').addClass('wrapper__svg-circleJ_active');
        $('.wrapper__titleJ').addClass('wrapper__titleJ_active');
        $('.wrapper__svg-circleR:last').addClass('wrapper__svg-circleR_active');
        $('.wrapper__titleR').addClass('wrapper__titleR_active');
        $('.wrapper__svg-circleRe:last').addClass('wrapper__svg-circleRe_active');
        $('.wrapper__titleRe').addClass('wrapper__titleRe_active');

    }
});


const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const nextSlide = () => {
    if(index == slides.length - 1){
        in
    }
}