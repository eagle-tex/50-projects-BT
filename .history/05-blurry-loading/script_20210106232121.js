const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const int = setInterval(blurring, 30);

function blurring() {
  load += 1;
  console.log(load);
}
