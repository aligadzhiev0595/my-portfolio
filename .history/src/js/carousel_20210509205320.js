const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    console.log(n);
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrents

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);