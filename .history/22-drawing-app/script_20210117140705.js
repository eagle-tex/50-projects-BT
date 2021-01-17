const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
}
