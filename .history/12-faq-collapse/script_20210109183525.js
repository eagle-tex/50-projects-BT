// Get all divs with the "faq" class

// for each element (div with class 'faq')

const faqs = document.querySelectorAll('.faq');

// console.log(faqs);

faqs.forEach((faq, idx) => {
  // console.log(faq.children[2].children);
  // const faqChildren = faqs.children;
  // console.log(faqChildren);
  const button = faq.children[2];
  const open = button.children[0];
  const close = button.children[1];
  console.log(button);
  console.log(open);
  console.log(close);

  if (faq.classList.contains("active")) {
    open.classList.add()
  })
  // const chevron = faq.children[2].children.querySelector('.fa-chevron-down');
  // console.log(chevron);
});
