const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

const scale=(num,in_min,in_max,out_min,out_max)=>{return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min}

let load = 0;

function blurring() {
  load += 1;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity=
}

const int = setInterval(blurring, 30);
