const faqs = document.querySelectorAll('.faq');

function toggleActiveOff() {
  const actives = document.querySelectorAll('.faq.active');
  actives.forEach((active) => active.classList.remove('active'));
}

faqs.forEach((faq) => {
  const button = faq.children[2];
  const open = button.children[0];
  const close = button.children[1];

  open.addEventListener('click', () => {
    toggleActiveOff();
    faq.classList.add('active');
  });

  close.addEventListener('click', () => {
    faq.classList.remove('active');
  });
});
