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
  messages.forEach((message) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;
    body.appendChild(toast);
  });
}

button.addEventListener('click', createNotification());
