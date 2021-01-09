// Get all divs with the "faq" class

// for each element (div with class 'faq')

const faqs = document.querySelectorAll('.faq');

console.log(faqs);

faqs.forEach((faq, idx) => {
  const chevron = faq.children.children.querySelector('.fa-chevron-down');
  console.log(chevron);
});
