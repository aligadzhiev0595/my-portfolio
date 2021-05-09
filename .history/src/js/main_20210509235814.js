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
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// setInterval(nextSlide, 2500)


window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("header_sticky", window.scrollY > 0);
  });

  document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
  });
  
  const burger = document.getElementById("burger");
  const root = document.getElementById("root");
  burger.addEventListener("click", function () {
    root.classList.toggle("overflow-hidden");
    layer.classList.toggle("active");
  });