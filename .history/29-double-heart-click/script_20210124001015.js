const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;

loveMe.addEventListener('dblclick', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  }
  console.log(123);
});
