const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We love programming';
const idx = 1;
const speed = 300 / speedEl.value;

function writeText() {
  textEl.innerHTML = text.slice(0, idx);
}

writeText();
