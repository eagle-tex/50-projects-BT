const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const body = document.querySelector('body');

const messages = [
  'Message One',
  'Something new',
  'Have you seen this?',
  'Unheard of yet!',
];

function createNotification() {
  const message = messages[Math.floor(Math.random() * messages.length)];

  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerText = message;
  toast.style.right = 10;
  toast.style.bottom = 10;
  toasts.appendChild(toast);

  setTimeout(() => {
    toasts.removeChild(toast);
  }, 3000);
}

button.addEventListener('click', createNotification);
