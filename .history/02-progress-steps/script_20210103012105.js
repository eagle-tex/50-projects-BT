const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

console.log(prev.disabled);
console.log(next.disabled);

let currentActive = 1;

const setClasses = (circleNumber) => {
  // Activate button 'prev' when over circle 1
  if (circleNumber > 1 && circleNumber < 4) {
    prev.classList.add('active');
    prev.disabled = false;
    next.classList.add('active');
    next.disabled = false;
  } else if (circleNumber === 1) {
    prev.classList.remove('active');
  } else if (circleNumber === 4) {
    next.classList.remove('active');
  }

  circles[circleNumber];
};

next.addEventListener('click', () => {
  currentActive += 1;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  setClasses(currentActive);

  circles[currentActive - 2].classList.remove('active');
  circles[currentActive - 1].classList.add('active');

  console.log(currentActive);
});

prev.addEventListener('click', () => {
  currentActive -= 1;

  if (currentActive < 1) {
    currentActive = 1;
  }

  setClasses(currentActive);

  console.log(currentActive);
});
