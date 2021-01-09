const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    //
  });
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});
