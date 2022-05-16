const sliderLine = document.querySelector('.slide-line');
const slides = sliderLine.querySelectorAll('.slide-wrapper');
const dotsWrapper = document.querySelector('.dots');
const underSlider = document.querySelector('.under-slider');
const underSliderSlideLine = underSlider.querySelector('.under-slide-line');
const commentsSlides = underSliderSlideLine.querySelectorAll('.slide-wrapper');

let position = 0;

for(let i=0; i<slides.length; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsWrapper.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');


const activeSlide=(index)=>{
    for(let dot of dots){
        dot.classList.remove('active')
    }
    dots[index].classList.add('active');
}


dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        position = 60 *index;
        underSliderSlideLine.style.left=-position+'vw';
        sliderLine.style.left=-position+'vw';
        activeSlide(index);
    })
});
