const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const body = document.querySelector('body');

const messages = [
  'Message One',
  'Something new',
  'Have you seen this?',
  'Unheard of yet!',
];

const colors = ['red', 'green', 'steelblue', 'aqua', 'orange', 'purple'];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function createNotification(message = null, type = null) {
  const color = colors[Math.floor(Math.random() * colors.length)];

  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(type || 'info');
  notification.innerText = message || getRandomMessage();
  toasts.appendChild(notification);
  // notification.style.color = color;
  // notification.style.right = 10;
  // notification.style.bottom = 10;

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

button.addEventListener('click', () =>
  createNotification('This is invalid data')
);

// My version of createNotification
// function createNotification() {
//   const message = messages[Math.floor(Math.random() * messages.length)];
//   const color = colors[Math.floor(Math.random() * colors.length)];

//   const toast = document.createElement('div');
//   toast.classList.add('toast');
//   toast.innerText = message;
//   toast.style.color = color;
//   toast.style.right = 10;
//   toast.style.bottom = 10;
//   toasts.appendChild(toast);

//   setTimeout(() => {
//     toasts.removeChild(toast);
//   }, 3000);
// }
