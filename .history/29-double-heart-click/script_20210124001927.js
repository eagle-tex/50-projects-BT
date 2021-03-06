const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const { leftOffset, topOffset } = e.target;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  console.log(xInside, yInside);
};

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else if (new Date().getTime() - clickTime < 800) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = new Date().getTime();
  }
});
