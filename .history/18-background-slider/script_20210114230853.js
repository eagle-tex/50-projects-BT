const { body } = document;
const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');

const activeSlide = 0;

function setBgtoBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setBgtoBody();
