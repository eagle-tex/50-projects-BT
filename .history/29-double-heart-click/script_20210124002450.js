const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
const timesClicked = 0;

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const { offsetLeft, offsetTop } = e.target;

  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerHTML = timesClicked + 1;

  setTimeout(() => heart.remove(), 3000);
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