const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

function createTags(input) {
  //
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});
