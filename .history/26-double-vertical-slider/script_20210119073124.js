// const mySliderContainer = document.querySelector('.slider-container');
// const slideRight = document.querySelector('.right-slide');
// const slideLeft = document.querySelector('.left-slide');
// const upButton = document.querySelector('.up-button');
// const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

function changeSlide(direction) {
  const sliderHeight = mySliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex += 1;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else if (direction === 'down') {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}

// const changeSlide = (direction) => {
//   const sliderHeight = mySliderContainer.clientHeight;
//   if (direction === 'up') {
//     activeSlideIndex += 1;
//     if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
//   } else if (direction === 'down') {
//     activeSlideIndex -= 1;
//     if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
//   }

//   slideRight.style.transform = `translateY(-${
//     activeSlideIndex * sliderHeight
//   }px)`;
//   slideLeft.style.transform = `translateY(${
//     activeSlideIndex * sliderHeight
//   }px)`;
// };

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));