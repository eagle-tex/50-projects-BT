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

function createNotification() {
  const color = colors[Math.floor(Math.random() * colors.length)];

  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.innerText = getRandomMessage();
  toasts.appendChild(notif);
  // notif.style.color = color;
  // notif.style.right = 10;
  // notif.style.bottom = 10;

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

button.addEventListener('click', createNotification);

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
