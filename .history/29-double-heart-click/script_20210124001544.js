const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas fa-heart');
  // heart.classList.add('fas');

  const x = e.clientX;
  const y = e.clientY;

  console.log(x, y);
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
