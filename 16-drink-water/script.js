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
  // Brad's initial solution, contains an error
  /*  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    // eslint-disable-next-line no-param-reassign
    idx -= 1;
  } */

  // solution without error
  let index = idx;
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling !== null
  ) {
    // eslint-disable-next-line no-param-reassign
    index = idx - 1;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});
