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
    // prev.classList.add('active');
    prev.disabled = false;
    // next.classList.add('active');
    next.disabled = false;
  } else if (circleNumber === 1) {
    // prev.classList.remove('active');
    prev.disabled = true;
  } else if (circleNumber === 4) {
    // next.classList.remove('active');
    next.disabled = true;
  }
};

next.addEventListener('click', () => {
  currentActive += 1;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();

  //   setClasses(currentActive);
  //   circles[currentActive - 2].classList.remove('active');
  //   circles[currentActive - 1].classList.add('active');

  //   console.log(currentActive);
});

prev.addEventListener('click', () => {
  currentActive -= 1;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();

  //   setClasses(currentActive);
  //   circles[currentActive].classList.remove('active');
  //   circles[currentActive - 1].classList.add('active');

  //   console.log(currentActive);
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  console.log(actives.length / circles.length);
}
