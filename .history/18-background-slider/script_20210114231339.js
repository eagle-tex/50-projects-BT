const { body } = document;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 1;
activeSlide += 1;

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}

setBgToBody();

rightBtn.addEventListener('click', () => {
  activeSlide += 1;

  if (activeSlide > slides.length - 1) activeSlide = 0;

  setBgToBody();
  setActiveSlide();
});
