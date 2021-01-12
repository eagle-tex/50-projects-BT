const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
}

updateBigCup();

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    // const maxIndex = smallCups.length - 1;
    // let index = idx;

    // if (
    //   smallCups[idx].classList.contains('full') &&
    //   !smallCups[idx < maxIndex ? idx + 1 : idx].classList.contains('full')
    // ) {
    // eslint-disable-next-line no-param-reassign
    idx -= 1;
    // not sure
    // if (idx < maxIndex) idx -= 1;
    // else idx = maxIndex;
    // index = idx - 1;
  }
  // console.log('idx', idx, 'index', index);

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
      // } else if (idx2 === index) {
      // cup.classList.toggle('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
  console.log(`highlightCups(${idx})`);
});
