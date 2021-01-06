const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

function blurring() {
  load += 1;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.inner;
  console.log(load);
}

const int = setInterval(blurring, 30);
