const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive += 1;

  console.log(currentActive);

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  console.log(currentActive);
});
