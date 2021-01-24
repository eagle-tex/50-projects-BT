const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

function doTheTrick(theClickedOne){
  if(good.checked&&cheap.checked&&fast.checked)
}

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
);
