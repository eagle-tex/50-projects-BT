const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We love programming';
const idx = 1;
const speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);

  index += 1;

  if (idx > text.length) {
    idx = 1;
  }
}

writeText();
