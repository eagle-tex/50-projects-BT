// Get all divs with the "faq" class

// for each element (div with class 'faq')

const faqs = document.querySelectorAll('.faq');

console.log(faqs);

faqs.forEach((faq, idx) => {
  console.log(faq.children[2].children);
  const faqChildren = faq.children;
  console.log(faqChildren);
  // const chevron = faq.children[2].children.querySelector('.fa-chevron-down');
  // console.log(chevron);
});
