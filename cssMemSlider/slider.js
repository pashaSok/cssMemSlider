const sliderLine = document.querySelector('.slide-line');
const slides = document.querySelectorAll('.slide-wrapper');
const dotsWrapper = document.querySelector('.dots');

let position = 0;
let dotIndex = 0;

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
        position = 700 *index;
        sliderLine.style.left=-position+'px';
        activeSlide(index);
    })
});
