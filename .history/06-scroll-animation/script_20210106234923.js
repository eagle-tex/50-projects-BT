const boxes = document.querySelectorAll('.box');

window.addEventListener('scrol', checkBoxes);

function checkBoxes() {
  const triggerBottom = console.log((window.innerHeight / 5) * 4);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add();
    }
  });
}
