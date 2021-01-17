const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const size = 20;
const color = 'black';

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

drawCircle();
