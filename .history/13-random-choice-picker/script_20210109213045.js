const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

function createTags(input) {
  const tags = input.split(',');
  console.log(tags);
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});
